export type VocabEntryType = {
  id: number;
  word: string;
  reading: string;
  meaning: string;
  tags: string[];
};
export type VocabListType = VocabEntryType[];

export const vocabList = [
  {
    id: 1,
    word: "発達",
    reading: "はったつ",
    meaning: "development; growth; advance",
    tags: ["発達", "NHK news"],
  },
  {
    id: 2,
    word: "九州",
    reading: "きゅうしゅう",
    meaning: "Kyusyu District",
    tags: ["九州", "prefectures"],
  },
  {
    id: 3,
    word: "必要",
    reading: "ひつよう",
    meaning: "needfully",
    tags: ["必要", "twitter post"],
  },
  {
    id: 4,
    word: "発達",
    reading: "はったつ",
    meaning: "development; growth; advance",
    tags: ["発達", "NHK news"],
  },
  {
    id: 5,
    word: "九州",
    reading: "きゅうしゅう",
    meaning: "Kyusyu District",
    tags: ["九州", "prefectures"],
  },
  {
    id: 6,
    word: "必要",
    reading: "ひつよう",
    meaning: "needfully",
    tags: ["必要", "twitter post"],
  },
];
