import { createContext } from "react";
import type { FlashCardType } from "@/types/types";

export const FlashcardContext = createContext<FlashCardType | undefined>(
  undefined,
);
