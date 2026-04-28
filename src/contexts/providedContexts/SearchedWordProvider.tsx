import type { ReactNode } from "react";
import { useState } from "react";
import { SearchedWordContext } from "../createdContexts/SearchedWordContext";

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
