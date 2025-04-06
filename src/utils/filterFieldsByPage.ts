import { ReviewField } from '@/feature/review/types';

// filter fields by page
export const filterFieldsByPage = (
  fields: ReviewField[],
  pageId: number,
): ReviewField[] => {
  if (!pageId) return fields;

  return fields.filter((field) => field.content.page === pageId);
};
