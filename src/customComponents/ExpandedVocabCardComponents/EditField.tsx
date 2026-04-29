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
    <div>
      <label className="w-[75px] border ">{labelName}</label>
      <input
        autoComplete="off"
        autoFocus={autofocus}
        className="focus:outline outline-inkwell-500 rounded-md overflow-ellipsis p-1 border"
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
