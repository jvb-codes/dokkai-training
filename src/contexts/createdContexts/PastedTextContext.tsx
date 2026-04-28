import { createContext } from "react";
import type { PastedTextContextType } from "@/types/types";

export const PastedTextContext = createContext<
  PastedTextContextType | undefined
>(undefined);
