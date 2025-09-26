import { createContext } from "react";
import type { SetStateAction } from "react";
import { type VocabEntryType, type VocabListType } from "./data/vocabList";

//SECTION - PastedTextContext

type PastedTextContextType = {
  pastedText: string;
  setPastedText: (newValue: string) => void;
};

export const PastedTextContext = createContext<
  PastedTextContextType | undefined
>(undefined);

//SECTION - ScreenIdContext

type ScreenIdContextType = {
  screenId: number;
  setScreenId: (newValue: number) => void;
};

export const ScreenIdContext = createContext<ScreenIdContextType | undefined>(
  undefined
);

//SECTION - SearchedWordContext
type SearchedWordType = {
  word: string;
  reading: string;
  definition: string[];
};
type SearchedWordContextType = {
  selectedText: string | undefined;
  setSelectedText: React.Dispatch<SetStateAction<string | undefined>>;
  searchedWord: SearchedWordType | undefined;
  setSearchedWord: React.Dispatch<SetStateAction<SearchedWordType | undefined>>;
};

export const SearchedWordContext = createContext<
  SearchedWordContextType | undefined
>(undefined);

//SECTION - ContextMenuContext

type CoordsType = {
  x: number;
  y: number;
};

type ContextMenuContextType = {
  coords: CoordsType | undefined;
  setCoords: React.Dispatch<SetStateAction<CoordsType | undefined>>;
  isMenuVisible: boolean;
  setIsMenuVisible: React.Dispatch<SetStateAction<boolean>>;
  cardRef: React.RefObject<HTMLDivElement | null>;
  menuRef: React.RefObject<HTMLDivElement | null>;
};

export const ContextMenuContext = createContext<
  ContextMenuContextType | undefined
>(undefined);

//SECTION - WordDefContext

type WordDefCoordsType = {
  x: number;
  y: number;
};

type WordDefContextType = {
  isDefVisible: boolean;
  setIsDefVisible: React.Dispatch<React.SetStateAction<boolean>>;
  wordDefCoords: WordDefCoordsType | undefined;
  setWordDefCoords: React.Dispatch<
    React.SetStateAction<WordDefCoordsType | undefined>
  >;
  grabOffset: WordDefCoordsType | undefined;
  setGrabOffset: React.Dispatch<
    React.SetStateAction<WordDefCoordsType | undefined>
  >;
  wordDefWindowRef: React.RefObject<HTMLDivElement | null>;
};

export const WordDefContext = createContext<WordDefContextType | undefined>(
  undefined
);

//SECTION - ToastContext

type ToastContextType = {
  toastMsg: string;
  setToastMsg: React.Dispatch<React.SetStateAction<string>>;
  isToastVisible: boolean;
  setIsToastVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

//SECTION - VocabListContext

type VocabListContextType = {
  vocabList: VocabListType;
  setVocabList: React.Dispatch<React.SetStateAction<VocabListType>>;
  isVocabListVisible: boolean;
  setIsVocabListVisible: React.Dispatch<React.SetStateAction<boolean>>;
  lastEntryIsVisible: boolean;
  setLastEntryIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  lastEntryRef: React.RefObject<HTMLDivElement | null>;
  isMounted: boolean;
  setIsMounted: React.Dispatch<React.SetStateAction<boolean>>;
  isDockVisible: boolean;
  setIsDockVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const VocabListContext = createContext<VocabListContextType | undefined>(
  undefined
);

//SECTION - TagsContext

type TagsContextType = {
  clickedVocabCard: VocabEntryType | undefined;
  setClickedVocabCard: React.Dispatch<
    React.SetStateAction<VocabEntryType | undefined>
  >;
  isTagListVisible: boolean;
  setIsTagListVisible: React.Dispatch<React.SetStateAction<boolean>>;
  searchedTag: string;
  setSearchedTag: React.Dispatch<React.SetStateAction<string>>;
  allTags: string[];
  setAllTags: React.Dispatch<React.SetStateAction<string[]>>;
};

export const TagsContext = createContext<TagsContextType | undefined>(
  undefined
);

//SECTION - EntryEdit

type EntryEditType = {
  isEntryEditVisible: boolean;
  setIsEntryEditVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EntryEditContext = createContext<EntryEditType | undefined>(
  undefined
);
