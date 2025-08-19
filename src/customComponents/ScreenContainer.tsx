import type { ReactNode } from "react";

const ScreenContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" flex flex-col justify-center items-center  h-screen gap-8 animate-fade-in ">
      {children}
    </div>
  );
};

export default ScreenContainer;
