import { createContext } from "react";
import type { SearchedWordContextType } from "@/types/types";

export const SearchedWordContext = createContext<
  SearchedWordContextType | undefined
>(undefined);
