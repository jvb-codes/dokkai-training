import type { PropsWithChildren } from "react";

const TagSelectionPanel = ({ children }: PropsWithChildren) => {
  return (
    <>
      {
        <div className="flex flex-col justify-center bg-inkwell-600 text-inkwell-50 p-5 rounded-md fixed left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] w-[90%] md:w-[600px] lg:w-[896px] animate-fade-in">
          {children}
        </div>
      }
    </>
  );
};

export default TagSelectionPanel;
