import type { PropsWithChildren } from "react";

const TagSelectionPanel = ({ children }: PropsWithChildren) => {
  return (
    <>
      {
        <div className="flex flex-col justify-center bg-inkwell-600 text-inkwell-50 p-10 rounded-md fixed bottom-5 w-[600px] gap-5">
          {children}
        </div>
      }
    </>
  );
};

export default TagSelectionPanel;
