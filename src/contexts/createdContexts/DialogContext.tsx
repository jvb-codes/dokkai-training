import { createContext } from "react";
import type { DialogContextType } from "@/types/types";

export const DialogContext = createContext<DialogContextType | undefined>(
  undefined,
);
