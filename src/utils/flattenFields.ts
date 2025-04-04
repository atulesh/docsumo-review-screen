import { MARKED_AS_MISSING } from '@/feature/constants';
import { ReviewField } from '@/feature/review/types';

const flattenFields = (data: unknown): ReviewField[] => {
  return Array.isArray(data)
    ? data.map((field) => {
        const content = field.content ?? {};
        return {
          id: field.id,
          title:
            field.id_auto_extract_label ?? field.label ?? MARKED_AS_MISSING,
          type: field.type,
          section: field.p_title,
          lowConfidence: field.low_confidence ?? false,
          ignore: field.ignore ?? false,
          format: field.format,
          formatMessage: field.format_message,
          userId: field.user_id,
          docId: field.doc_id,
          orgId: field.org_id,
          content: {
            value: content.value ?? MARKED_AS_MISSING,
            confidence: content.confidence ?? 0,
            isValidFormat: content.is_valid_format ?? true,
            page: content.page,
            position: content.position ?? [0, 0, 0, 0],
            reviewRequired: content.review_required ?? false,
            validationSource: content.validation_source,
          },
        };
      })
    : [];
};

export default flattenFields;
