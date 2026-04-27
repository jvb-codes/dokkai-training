type HiraganaPropsType = {
  hiragana?: string;
  styles?: string;
};
const Hiragana = ({ hiragana, styles }: HiraganaPropsType) => {
  return (
    <>
      {hiragana ? (
        <div className={`${styles}`}>{hiragana}</div>
      ) : (
        "Hiragana not found."
      )}
    </>
  );
};

export default Hiragana;
