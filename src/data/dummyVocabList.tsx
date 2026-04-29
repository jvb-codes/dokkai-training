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

export const dummyVocabList: VocabEntryType[] = [
  {
    id: 1,
    word: "焼損面積",
    reading: "しょうそんめんせき",
    definition: "burned area; area damaged by fire",
    tags: ["disaster", "fire"],
    isHighlight: false,
    wordHighlightKey: "焼損面積",
    isKnown: false,
  },
  {
    id: 2,
    word: "消火活動",
    reading: "しょうかかつどう",
    definition: "firefighting activity",
    tags: ["disaster", "emergency"],
    isHighlight: false,
    wordHighlightKey: "消火活動",
    isKnown: false,
  },
  {
    id: 3,
    word: "避難指示",
    reading: "ひなんしじ",
    definition: "evacuation order",
    tags: ["disaster", "safety"],
    isHighlight: false,
    wordHighlightKey: "避難指示",
    isKnown: false,
  },
  {
    id: 4,
    word: "再燃",
    reading: "さいねん",
    definition: "reignition; fire starting again",
    tags: ["fire"],
    isHighlight: false,
    wordHighlightKey: "再燃",
    isKnown: false,
  },
  {
    id: 5,
    word: "局地激甚災害",
    reading: "きょくちげきじんさいがい",
    definition: "localized severe disaster (government designation)",
    tags: ["government", "disaster"],
    isHighlight: false,
    wordHighlightKey: "局地激甚災害",
    isKnown: false,
  },
  {
    id: 6,
    word: "気象状況",
    reading: "きしょうじょうきょう",
    definition: "weather conditions",
    tags: ["weather"],
    isHighlight: false,
    wordHighlightKey: "気象状況",
    isKnown: false,
  },
  {
    id: 7,
    word: "災害義援金",
    reading: "さいがいぎえんきん",
    definition: "disaster relief donations",
    tags: ["disaster", "finance"],
    isHighlight: false,
    wordHighlightKey: "災害義援金",
    isKnown: false,
  },
  {
    id: 8,
    word: "延焼",
    reading: "えんしょう",
    definition: "spread of fire",
    tags: ["fire"],
    isHighlight: false,
    wordHighlightKey: "延焼",
    isKnown: false,
  },
  {
    id: 9,
    word: "操業",
    reading: "そうぎょう",
    definition: "business operation; (fishing) operation",
    tags: ["business", "fishing"],
    isHighlight: false,
    wordHighlightKey: "操業",
    isKnown: false,
  },
  {
    id: 10,
    word: "観光",
    reading: "かんこう",
    definition: "tourism; sightseeing",
    tags: ["economy", "travel"],
    isHighlight: false,
    wordHighlightKey: "観光",
    isKnown: false,
  },
];
