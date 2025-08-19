import { ScreenIdContext } from "@/context";
import { useContext } from "react";

const useScreenIdContext = () => {
  const context = useContext(ScreenIdContext);
  if (!context) {
    throw new Error(
      "useScreenIdContext must be used within ScreenIdProvider. Is the component wrapped with the provider?"
    );
  }
  return context;
};

export default useScreenIdContext;
