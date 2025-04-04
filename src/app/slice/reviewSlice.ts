import { ReviewField } from '@/feature/review/types';
import flattenFields from '@/utils/flattenFields';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface ReviewState {
  fields: ReviewField[];
  loading: boolean;
  error: string | null;
}

const initialState: ReviewState = {
  fields: [],
  loading: false,
  error: null,
};

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
  reducers: {},
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
      });
  },
});
