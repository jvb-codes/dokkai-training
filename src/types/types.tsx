import type { JSX, SetStateAction } from "react";

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

export type HighlightedWordsType = {
  id: number;
  word: string;
  isHighlighted: false;
};

export type StudySessionType = {
  text: string;
  vocabList: VocabEntryType[];
};

export type PastedTextContextType = {
  pastedText: string;
  setPastedText: React.Dispatch<SetStateAction<string>>;
  isPastedTextHighlighted: boolean;
  setIsPastedTextHighlighted: React.Dispatch<SetStateAction<boolean>>;
  pastedTextWithHighlights: (string | JSX.Element)[];
  setPastedTextWithHighlights: React.Dispatch<
    SetStateAction<(string | JSX.Element)[]>
  >;
  highlightedWords: string[];
  setHighlightedWords: React.Dispatch<SetStateAction<string[]>>;
  pastedTextError: string | null;
  setPastedTextError: React.Dispatch<SetStateAction<string>>;
  prevSession: StudySessionType | null;
  setPrevSession: React.Dispatch<SetStateAction<StudySessionType | null>>;
  isNewSession: boolean;
  setIsNewSession: React.Dispatch<SetStateAction<boolean>>;
};

export type DisplayIdContextType = {
  screenId: number;
  setScreenId: React.Dispatch<SetStateAction<number>>;
};

export type SearchedWordType = {
  word: string;
  reading: string;
  definition: string[];
};

export type SearchedWordContextType = {
  selectedText: string | undefined;
  setSelectedText: React.Dispatch<SetStateAction<string | undefined>>;
  searchedWord: SearchedWordType | undefined;
  setSearchedWord: React.Dispatch<SetStateAction<SearchedWordType | undefined>>;
  isLookingUpWord: boolean;
  setIsLookingUpWord: React.Dispatch<SetStateAction<boolean>>;
};

export type CoordsType = {
  x: number;
  y: number;
};

export type ContextMenuContextType = {
  coords: CoordsType | undefined;
  setCoords: React.Dispatch<SetStateAction<CoordsType | undefined>>;
  isMenuVisible: boolean;
  setIsMenuVisible: React.Dispatch<SetStateAction<boolean>>;
  cardRef: React.RefObject<HTMLDivElement | null>;
  menuRef: React.RefObject<HTMLDivElement | null>;
};

export type WordDefContextType = {
  isDefVisible: boolean;
  setIsDefVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ToastContextType = {
  toastMsg: string;
  setToastMsg: React.Dispatch<React.SetStateAction<string>>;
  isToastVisible: boolean;
  setIsToastVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export type VocabListContextType = {
  vocabList: VocabEntryType[];
  setVocabList: React.Dispatch<React.SetStateAction<VocabEntryType[]>>;
  isVocabListVisible: boolean;
  setIsVocabListVisible: React.Dispatch<React.SetStateAction<boolean>>;
  lastEntryIsVisible: boolean;
  setLastEntryIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  lastEntryRef: React.RefObject<HTMLDivElement | null>;
  isMounted: boolean;
  setIsMounted: React.Dispatch<React.SetStateAction<boolean>>;
  isDockVisible: boolean;
  setIsDockVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isTagSelectionVisible: boolean;
  setIsTagSelectionVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export type IsTagSelectionPanelVisibleType = {
  visible: boolean;
  action: "createFlashcardStack" | "createTags" | null;
};

export type TagsContextType = {
  tags: string[] | null;
  setTags: React.Dispatch<React.SetStateAction<string[] | null>>;
  clickedVocabCard: VocabEntryType;
  setClickedVocabCard: React.Dispatch<React.SetStateAction<VocabEntryType>>;
  clickedVocabCardDefaults: VocabEntryType;
  setClickedVocabCardDefaults: React.Dispatch<
    React.SetStateAction<VocabEntryType>
  >;
  isTagListVisible: boolean;
  setIsTagListVisible: React.Dispatch<React.SetStateAction<boolean>>;
  searchedTag: string;
  setSearchedTag: React.Dispatch<React.SetStateAction<string>>;
  allTags: string[];
  setAllTags: React.Dispatch<React.SetStateAction<string[]>>;
  isTagSelectionPanelVisible: IsTagSelectionPanelVisibleType;
  setIsTagSelectionPanelVisible: React.Dispatch<
    React.SetStateAction<IsTagSelectionPanelVisibleType>
  >;
  tagsPageNum: number;
  setTagsPageNum: React.Dispatch<React.SetStateAction<number>>;
  tagsGroupNum: number;
  setTagsGroupNum: React.Dispatch<React.SetStateAction<number>>;
  clickedTags: string[];
  setClickedTags: React.Dispatch<React.SetStateAction<string[]>>;
  tagsSelectionError: string | null;
  setTagsSelectionError: React.Dispatch<React.SetStateAction<string | null>>;
};

type IsEntryEditedType = {
  word: boolean;
  reading: boolean;
  meaning: boolean;
};

export type EntryEditType = {
  isExpandedCardVisible: boolean;
  setIsExpandedCardVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isInEditMode: boolean;
  setIsInEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  isEntryEdited: { word: boolean; reading: boolean; meaning: boolean };
  setIsEntryEdited: React.Dispatch<React.SetStateAction<IsEntryEditedType>>;
};

export type FlashCardType = {
  isFlipped: boolean;
  setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>;
  currentCardIndex: number;
  setCurrentCardIndex: React.Dispatch<React.SetStateAction<number>>;
  words: VocabEntryType[];
  setWords: React.Dispatch<React.SetStateAction<VocabEntryType[]>>;
  knownWords: VocabEntryType[];
  setKnownWords: React.Dispatch<React.SetStateAction<VocabEntryType[]>>;
};

export type DialogType = {
  cardId?: number | null;
  type: string;
  isOpen: boolean;
  title: string;
  message: string;
};

export type DialogContextType = {
  dialog: DialogType;
  setDialog: React.Dispatch<React.SetStateAction<DialogType>>;
};
