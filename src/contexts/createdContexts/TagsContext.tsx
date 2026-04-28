import { createContext } from "react";
import type { TagsContextType } from "@/types/types";

export const TagsContext = createContext<TagsContextType | undefined>(
  undefined,
);
