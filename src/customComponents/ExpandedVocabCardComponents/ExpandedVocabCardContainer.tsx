import type { PropsWithChildren } from "react";

const ExpandedVocabCardContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="fixed bottom-8 flex  gap-7 w-[300px] md:w-[600px] lg:w-[896px] bg-inkwell-600 text-inkwell-50 animate-fade-in h-[500px]">
      {children}
    </div>
  );
};

export default ExpandedVocabCardContainer;
