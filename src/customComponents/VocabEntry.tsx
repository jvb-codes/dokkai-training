type VocabEntryPropsType = {
  value: string | string[];
  styles?: string;
};

export const VocabEntry = ({ value, styles }: VocabEntryPropsType) => {
  return (
    <>
      {typeof value === "string" && <p className={`${styles}`}>{value}</p>}
      {Array.isArray(value) && (
        <div className="flex gap-1">
          {value.map((tag) => {
            return <p>{tag}</p>;
          })}
        </div>
      )}
    </>
  );
};
