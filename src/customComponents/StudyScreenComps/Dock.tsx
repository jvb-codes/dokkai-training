import type { ReactNode } from "react";

type DockProps = {
  children: ReactNode;
};

const Dock = ({ children }: DockProps) => {
  return (
    <div className="flex justify-center w-[300px] md:w-[600px] lg:w-[896px]">
      {children}
    </div>
  );
};

export default Dock;
