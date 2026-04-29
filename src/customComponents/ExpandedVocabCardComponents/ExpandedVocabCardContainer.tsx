import type { PropsWithChildren } from "react";

const ExpandedVocabCardContainer = ({ children }: PropsWithChildren) => {
  return (
    <section className="fixed bottom-8 p-5 flex flex-col w-[90%] md:w-[600px] lg:w-[896px] bg-inkwell-600 text-inkwell-50 animate-fade-in h-[500px]">
      {children}
    </section>
  );
};

export default ExpandedVocabCardContainer;
