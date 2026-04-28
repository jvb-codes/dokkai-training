import { createContext } from "react";
import type { EntryEditType } from "@/types/types";

export const ExpandedCardContext = createContext<EntryEditType | undefined>(
  undefined,
);
