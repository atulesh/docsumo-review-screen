interface ReviewContent {
  value: string;
  confidence: number;
  isValidFormat: boolean;
  page: number;
  position: number[];
  reviewRequired: boolean;
  validationSource: string;
}

export interface ReviewField {
  id: number;
  title: string;
  type: string;
  section: string;
  lowConfidence: boolean;
  ignore: boolean;
  format: string;
  formatMessage: string;
  userId: string;
  docId: string;
  orgId: string;
  content: ReviewContent;
}
