export type VocabEntryType = {
  id: number;
  word: string;
  reading?: string;
  definition?: string | string[];
  tags?: string[];
  isHighlight?: boolean;
  wordHighlightKey?: string;
  isKnown?: boolean;
};
