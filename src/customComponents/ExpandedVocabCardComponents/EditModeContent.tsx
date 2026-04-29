import type { PropsWithChildren } from "react";

const EditModeContent = ({ children }: PropsWithChildren) => {
  return <div className="mt-20 flex flex-col gap-2 text-lg">{children}</div>;
};

export default EditModeContent;
