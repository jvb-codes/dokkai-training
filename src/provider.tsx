import { useState, useRef } from "react";
import {
  PastedTextContext,
  ScreenIdContext,
  SearchedWordContext,
  ContextMenuContext,
  WordDefContext,
  ToastContext,
  VocabListContext,
  TagsContext,
  EntryEditContext,
} from "@/context";
import type { ReactNode } from "react";
import {
  vocabList as dummyList,
  type VocabEntryType,
  type VocabListType,
} from "./data/vocabList";

export const PastedTextContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [pastedText, setPastedText] = useState("");

  return (
    <PastedTextContext.Provider value={{ pastedText, setPastedText }}>
      {children}
    </PastedTextContext.Provider>
  );
};

export const ScreenIdContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [screenId, setScreenId] = useState(1);

  return (
    <ScreenIdContext.Provider value={{ screenId, setScreenId }}>
      {children}
    </ScreenIdContext.Provider>
  );
};

export const SearchedWordProvider = ({ children }: { children: ReactNode }) => {
  type SearchedWordType = {
    word: string;
    reading: string;
    definition: string[];
  };
  const [searchedWord, setSearchedWord] = useState<
    SearchedWordType | undefined
  >(undefined);
  const [selectedText, setSelectedText] = useState<string | undefined>(
    undefined
  );

  return (
    <SearchedWordContext.Provider
      value={{ selectedText, setSelectedText, searchedWord, setSearchedWord }}
    >
      {children}
    </SearchedWordContext.Provider>
  );
};

//SECTION - ContextMenuContextProvider

export const ContextMenuContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  type CoordsType = {
    x: number;
    y: number;
  };
  const [coords, setCoords] = useState<CoordsType | undefined>({
    x: -9999,
    y: -9999,
  });
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  return (
    <ContextMenuContext.Provider
      value={{
        coords,
        setCoords,
        isMenuVisible,
        setIsMenuVisible,
        cardRef,
        menuRef,
      }}
    >
      {children}
    </ContextMenuContext.Provider>
  );
};

//SECTION - WordDefContext

export const WordDefContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  type WordDefCoordsType = {
    x: number;
    y: number;
  };

  const [wordDefCoords, setWordDefCoords] = useState<
    WordDefCoordsType | undefined
  >({
    x: -9999,
    y: -9999,
  });
  const [isDefVisible, setIsDefVisible] = useState(false);
  const [grabOffset, setGrabOffset] = useState<WordDefCoordsType | undefined>(
    undefined
  );
  const wordDefWindowRef = useRef<HTMLDivElement | null>(null);

  return (
    <WordDefContext.Provider
      value={{
        wordDefCoords,
        setWordDefCoords,
        isDefVisible,
        setIsDefVisible,
        grabOffset,
        setGrabOffset,
        wordDefWindowRef,
      }}
    >
      {children}
    </WordDefContext.Provider>
  );
};

//SECTION - ToastContext

export const ToastContextProvider = ({ children }: { children: ReactNode }) => {
  const [toastMsg, setToastMsg] = useState<string>("");
  const [isToastVisible, setIsToastVisible] = useState<boolean>(false);

  return (
    <ToastContext.Provider
      value={{ toastMsg, setToastMsg, isToastVisible, setIsToastVisible }}
    >
      {children}
    </ToastContext.Provider>
  );
};

//SECTION - VocabList

export const VocabListProvider = ({ children }: { children: ReactNode }) => {
  const [vocabList, setVocabList] = useState<VocabListType>(dummyList);
  const [isVocabListVisible, setIsVocabListVisible] = useState(false);
  const [isDockVisible, setIsDockVisible] = useState(true);
  const [lastEntryIsVisible, setLastEntryIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const lastEntryRef = useRef(null);

  return (
    <VocabListContext.Provider
      value={{
        vocabList,
        setVocabList,
        isVocabListVisible,
        setIsVocabListVisible,
        lastEntryIsVisible,
        setLastEntryIsVisible,
        lastEntryRef,
        isMounted,
        setIsMounted,
        isDockVisible,
        setIsDockVisible,
      }}
    >
      {children}
    </VocabListContext.Provider>
  );
};

//SECTION - TagsContext

export const TagsContextProvider = ({ children }: { children: ReactNode }) => {
  const [clickedVocabCard, setClickedVocabCard] = useState<
    VocabEntryType | undefined
  >(undefined);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [isTagListVisible, setIsTagListVisible] = useState(false);
  const [searchedTag, setSearchedTag] = useState("");

  return (
    <TagsContext.Provider
      value={{
        clickedVocabCard,
        setClickedVocabCard,
        isTagListVisible,
        setIsTagListVisible,
        searchedTag,
        setSearchedTag,
        allTags,
        setAllTags,
      }}
    >
      {children}
    </TagsContext.Provider>
  );
};

//SECTION - EntryEditContext

export const EntryEditContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isEntryEditVisible, setIsEntryEditVisible] = useState(false);

  return (
    <EntryEditContext.Provider
      value={{ isEntryEditVisible, setIsEntryEditVisible }}
    >
      {children}
    </EntryEditContext.Provider>
  );
};
