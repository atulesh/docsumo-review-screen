import { ReviewField } from '@/feature/review/types';
import flattenFields from '@/utils/flattenFields';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageData {
  id: number;
  image: {
    url: string;
    height: number;
    width: number;
  };
}
interface ReviewState {
  pages: PageData[];
  currentPage: number;
  fields: ReviewField[];
  selectedIds: number[];
  hoveredId: number | null;
  loading: boolean;
  error: string | null;
}

const initialState: ReviewState = {
  pages: [],
  currentPage: 0,
  fields: [],
  selectedIds: [],
  hoveredId: null,
  loading: false,
  error: null,
};

export const fetchPages = createAsyncThunk<PageData[]>(
  'review/fetchPages',
  async () => {
    try {
      const response = await fetch('/data/pages.json');
      const { data } = await response.json();
      const documents = data?.documents ?? [];
      const pageList = documents.flatMap(
        (doc: { pages: PageData[] }) => doc.pages ?? [],
      );
      return pageList;
    } catch (error) {
      console.error('Error fetching pages:', error);
      return [];
    }
  },
);

export const fetchFields = createAsyncThunk<ReviewField[]>(
  'review/fetchFields',
  async () => {
    try {
      const response = await fetch('/data/sections.json');
      const { data } = await response.json();
      const children = data?.sections?.[0]?.children ?? [];

      return flattenFields(children);
    } catch (error) {
      console.error('Error fetching fields:', error);
      return [];
    }
  },
);

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    toggleSelection: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.selectedIds.indexOf(id);
      if (index === -1) {
        state.selectedIds.push(id);
      } else {
        state.selectedIds.splice(index, 1);
      }
    },
    clearSelection: (state) => {
      state.selectedIds = [];
    },
    setSelection: (state, action: PayloadAction<number[]>) => {
      state.selectedIds = action.payload;
    },
    hoverField: (state, action: PayloadAction<number | null>) => {
      state.hoveredId = action.payload;
    },
    removeField: (state, action: PayloadAction<number>) => {
      state.fields = state.fields.filter(
        (field) => field.id !== action.payload,
      );
    },
    confirmSelection: (state) => {
      // Todo: Handle confirm action
      state.selectedIds = [];
      state.hoveredId = null;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchFields.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFields.fulfilled, (state, action) => {
        state.fields = action.payload;
        state.loading = false;
      })
      .addCase(fetchFields.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch fields';
      })
      .addCase(fetchPages.fulfilled, (state, action) => {
        state.pages = action.payload;
      });
  },
});

export const {
  toggleSelection,
  clearSelection,
  setSelection,
  hoverField,
  removeField,
  confirmSelection,
  setCurrentPage,
} = reviewSlice.actions;

export const selectFields = (state: { review: ReviewState }) =>
  state.review.fields;
export const selectHoveredId = (state: { review: ReviewState }) =>
  state.review.hoveredId;
export const selectSelectedIds = (state: { review: ReviewState }) =>
  state.review.selectedIds;
export const selectCurrentPage = (state: { review: ReviewState }) =>
  state.review.currentPage;
export const selectPages = (state: { review: ReviewState }) =>
  state.review.pages;
