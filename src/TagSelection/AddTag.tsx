import useTagSelection from "@/customHooks/useTagSelection";

const AddTag = () => {
  const { addTagViaIcon } = useTagSelection();
  return (
    <div className="mt-5 flex gap-2">
      <span
        onClick={() => addTagViaIcon()}
        className="material-symbols-outlined"
      >
        add
      </span>
      <p>Create a new tag</p>
    </div>
  );
};

export default AddTag;
