import { Icon as ProgressIcon } from "./Icon";

const Fallback = () => {
  return (
    <div className="flex items-center gap-3 animate-fade-in border-none rounded-md shadow-2xl  md:text-[14px] p-5  bg-inkwell-600 text-inkwell-50 w-[350px] ">
      <ProgressIcon iconName="progress_activity" styles="animate-spin" />
      <p>Looking up word...</p>
    </div>
  );
};

export default Fallback;
