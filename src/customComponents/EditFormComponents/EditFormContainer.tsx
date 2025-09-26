import type { PropsWithChildren } from "react";

const EditFormContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="fixed bottom-8 text-xl flex justify-center items-center gap-5 h-[300px] flex-col w-[300px] md:w-[600px] lg:w-[896px] bg-inkwell-600 text-inkwell-50 animate-fade-in ">
      {children}
    </div>
  );
};

export default EditFormContainer;
