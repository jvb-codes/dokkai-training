import useScreenIdContext from "@/customHooks/useScreenIdContext";
import type { ReactNode } from "react";

const ScreenContainer = ({ children }: { children: ReactNode }) => {
  const { screenId } = useScreenIdContext();
  return (
    <div
      className={`flex flex-col justify-center   items-center gap-5 animate-fade-in min-h-screen ${
        screenId === 1
          ? "bg-gradient-to-tr from-inkwell-900 via-inkwell-800 to-accent-700 "
          : "min-h-screen bg-gradient-to-b from-inkwell-200 to-inkwell-300"
      } `}
    >
      {children}
    </div>
  );
};

export default ScreenContainer;
