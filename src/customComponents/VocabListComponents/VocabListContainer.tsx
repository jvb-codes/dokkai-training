import type { PropsWithChildren } from "react";

const VocabListContainer = ({ children }: PropsWithChildren) => {
  // same width as text card
  return (
    <div className="fixed bottom-8 flex flex-col items-center justify-center w-[300px] md:w-[600px] lg:w-[896px]">
      {children}
    </div>
  );
};

export default VocabListContainer;
