import { Icon as ProgressIcon } from "./Icon";

const Fallback = () => {
  return (
    <div className="w-1/2 flex items-center gap-3 animate-fade-in border-none rounded-md shadow-2xl  md:text-[14px] p-5  bg-inkwell-600 absolute left-[50%] translate-x-[-50%] text-inkwell-50">
      <ProgressIcon iconName="progress_activity" styles="animate-spin" />
      <p>Looking up word...</p>
    </div>
  );
};

export default Fallback;
