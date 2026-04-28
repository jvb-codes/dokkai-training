import { createContext } from "react";

import type { ContextMenuContextType } from "@/types/types";

export const ContextMenuContext = createContext<
  ContextMenuContextType | undefined
>(undefined);
