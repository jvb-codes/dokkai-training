import type { PropsWithChildren } from "react";

const ReadModeContent = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col mt-30 items-center">{children}</div>;
};

export default ReadModeContent;
