import { createContext } from "react";

//SECTION - PastedTextContext

type PastedTextContextType = {
  pastedText: string;
  setPastedText: (newValue: string) => void;
};

export const PastedTextContext = createContext<
  PastedTextContextType | undefined
>(undefined);

//SECTION - ScreenIdContext

type ScreenIdContextType = {
  screenId: number;
  setScreenId: (newValue: number) => void;
};

export const ScreenIdContext = createContext<ScreenIdContextType | undefined>(
  undefined
);
