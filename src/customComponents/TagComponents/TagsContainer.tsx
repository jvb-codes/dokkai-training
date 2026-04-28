import useTagsContext from "@/contexts/useContextHooks/useTagsContext";
import type { PropsWithChildren } from "react";

const TagsContainer = ({ children }: PropsWithChildren) => {
  const { allTags } = useTagsContext();
  return (
    <div
      className={` fixed bottom-8 flex flex-col w-[300px] md:w-[600px] lg:w-[896px] bg-inkwell-600 text-inkwell-50 animate-fade-in ${allTags?.length === 0 && "h-50"}`}
    >
      {children}
    </div>
  );
};

export default TagsContainer;
