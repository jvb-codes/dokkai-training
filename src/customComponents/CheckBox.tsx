type CheckBoxPropsType = {
  value: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultChecked?: boolean;
  label?: string;
  checkBoxStyles?: string;
  labelStyles?: string;
};

export const CheckBox = ({
  value,
  name,
  defaultChecked,
  label,
  checkBoxStyles,
  labelStyles,
  onChange,
}: CheckBoxPropsType) => {
  return (
    <div className="flex gap-3 p-3">
      <input
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        onChange={onChange}
        type="checkbox"
        className={`${checkBoxStyles}`}
      />
      <label className={`${labelStyles}`}>{label}</label>
    </div>
  );
};
