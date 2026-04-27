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
  ExpandedCardContext,
  FlashCardContext,
  DialogContext,
  type IsTagSelectionPanelVisibleType,
  type StudySessionType,
  type DialogType,
} from "@/context";
import type { ReactNode, JSX } from "react";
import { type VocabEntryType } from "./data/vocabList";
import { usePastedTextContext } from "./customHooks/usePastedTextContext";

export const PastedTextContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [prevSession, setPrevSession] = useState<StudySessionType | null>(null);
  const [pastedText, setPastedText] = useState<string>(
    prevSession ? prevSession.text : "",
  );
  const [isPastedTextHighlighted, setIsPastedTextHighlighted] = useState(false);
  const [pastedTextWithHighlights, setPastedTextWithHighlights] = useState<
    (string | JSX.Element)[]
  >([]);
  const [highlightedWords, setHighlightedWords] = useState<string[]>([]);
  const [pastedTextError, setPastedTextError] = useState<string>("");
  const [isNewSession, setIsNewSession] = useState(false);

  return (
    <PastedTextContext.Provider
      value={{
        pastedText,
        setPastedText,
        isPastedTextHighlighted,
        setIsPastedTextHighlighted,
        pastedTextWithHighlights,
        setPastedTextWithHighlights,
        highlightedWords,
        setHighlightedWords,
        pastedTextError,
        setPastedTextError,
        prevSession,
        setPrevSession,
        isNewSession,
        setIsNewSession,
      }}
    >
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
  const [searchedWord, setSearchedWord] = useState<SearchedWordType>();
  const [selectedText, setSelectedText] = useState<string | undefined>(
    undefined,
  );
  const [isLookingUpWord, setIsLookingUpWord] = useState<boolean>(false);

  return (
    <SearchedWordContext.Provider
      value={{
        selectedText,
        setSelectedText,
        searchedWord,
        setSearchedWord,
        isLookingUpWord,
        setIsLookingUpWord,
      }}
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
  const [isDefVisible, setIsDefVisible] = useState(false);

  return (
    <WordDefContext.Provider
      value={{
        isDefVisible,
        setIsDefVisible,
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
  const { prevSession } = usePastedTextContext();
  const [vocabList, setVocabList] = useState<VocabEntryType[]>(
    prevSession ? prevSession.vocabList : [],
  );
  const [isVocabListVisible, setIsVocabListVisible] = useState(false);
  const [isDockVisible, setIsDockVisible] = useState(true);
  const [lastEntryIsVisible, setLastEntryIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const lastEntryRef = useRef(null);
  const [isTagSelectionVisible, setIsTagSelectionVisible] = useState(false);

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
        isTagSelectionVisible,
        setIsTagSelectionVisible,
      }}
    >
      {children}
    </VocabListContext.Provider>
  );
};

//SECTION - TagsContext

export const TagsContextProvider = ({ children }: { children: ReactNode }) => {
  const clickedVocabCardInitialValues = {
    id: 0,
    word: "",
    reading: "",
    definition: "",
    tags: [],
    isHighlight: false,
    wordHighlightKey: "",
    isKnown: false,
  };
  const [clickedVocabCard, setClickedVocabCard] = useState<VocabEntryType>(
    clickedVocabCardInitialValues,
  );
  const [clickedVocabCardDefaults, setClickedVocabCardDefaults] =
    useState<VocabEntryType>(clickedVocabCardInitialValues);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [isTagListVisible, setIsTagListVisible] = useState(false);
  const [isTagSelectionPanelVisible, setIsTagSelectionPanelVisible] =
    useState<IsTagSelectionPanelVisibleType>({
      visible: false,
      action: null,
    });
  const [searchedTag, setSearchedTag] = useState("");
  const [tagsPageNum, setTagsPageNum] = useState(1);
  const [tagsGroupNum, setTagsGroupNum] = useState(1);
  const [clickedTags, setClickedTags] = useState<string[]>([]);
  const [tags, setTags] = useState<string[] | null>(null);
  const [tagsSelectionError, setTagsSelectionError] = useState<string | null>(
    null,
  );

  return (
    <TagsContext.Provider
      value={{
        clickedVocabCard,
        setClickedVocabCard,
        clickedVocabCardDefaults,
        setClickedVocabCardDefaults,
        isTagListVisible,
        setIsTagListVisible,
        searchedTag,
        setSearchedTag,
        allTags,
        setAllTags,
        tagsPageNum,
        setTagsPageNum,
        tagsGroupNum,
        setTagsGroupNum,
        clickedTags,
        setClickedTags,
        isTagSelectionPanelVisible,
        setIsTagSelectionPanelVisible,
        tags,
        setTags,
        tagsSelectionError,
        setTagsSelectionError,
      }}
    >
      {children}
    </TagsContext.Provider>
  );
};

//SECTION - ExpandedCardContext

export const ExpandedCardContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isExpandedCardVisible, setIsExpandedCardVisible] = useState(false);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [isEntryEdited, setIsEntryEdited] = useState({
    word: false,
    reading: false,
    meaning: false,
  });

  return (
    <ExpandedCardContext.Provider
      value={{
        isExpandedCardVisible,
        setIsExpandedCardVisible,
        isInEditMode,
        setIsInEditMode,
        isEntryEdited,
        setIsEntryEdited,
      }}
    >
      {children}
    </ExpandedCardContext.Provider>
  );
};

//SECTION - FlashCardContext

export const FlashCardContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [words, setWords] = useState<VocabEntryType[]>([]);
  const [knownWords, setKnownWords] = useState<VocabEntryType[]>([]);

  return (
    <FlashCardContext.Provider
      value={{
        isFlipped,
        setIsFlipped,
        currentCardIndex,
        setCurrentCardIndex,
        words,
        setWords,
        knownWords,
        setKnownWords,
      }}
    >
      {children}
    </FlashCardContext.Provider>
  );
};
export const DialogContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const dialogDefaults = {
    cardId: null,
    type: "",
    isOpen: false,
    title: "",
    message: "",
  };
  const [dialog, setDialog] = useState<DialogType>(dialogDefaults);

  return (
    <DialogContext.Provider
      value={{
        dialog,
        setDialog,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};
