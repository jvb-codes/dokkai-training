type EditFieldPropsType = {
  value?: string | string[];
  name: string;
  labelName: string;
  autofocus?: boolean;
  handleOnBlur?: () => void;
  handleEdit: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const EditField = ({
  value,
  name,
  labelName,
  handleEdit,
  autofocus,
  handleOnBlur,
}: EditFieldPropsType) => {
  return (
    <div className="space-x-5">
      <label className="inline-block text-right w-[75px] ">{labelName}</label>
      <input
        autoComplete="off"
        autoFocus={autofocus}
        className="focus:outline outline-inkwell-500 rounded-md overflow-ellipsis p-2"
        type="text"
        required
        onChange={handleEdit}
        onBlur={handleOnBlur}
        value={Array.isArray(value) ? value.join(", ") : value}
        name={name}
      />
    </div>
  );
};
