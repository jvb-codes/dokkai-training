import { createContext } from "react";

import type { DisplayIdContextType } from "@/types/types";
export const DisplayIdContext = createContext<DisplayIdContextType | undefined>(
  undefined,
);
