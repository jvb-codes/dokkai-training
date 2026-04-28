import { createContext } from "react";
import type { VocabListContextType } from "@/types/types";

export const VocabListContext = createContext<VocabListContextType | undefined>(
  undefined,
);
