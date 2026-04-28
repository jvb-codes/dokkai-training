import { createContext } from "react";
import type { WordDefContextType } from "@/types/types";

export const WordDefContext = createContext<WordDefContextType | undefined>(
  undefined,
);
