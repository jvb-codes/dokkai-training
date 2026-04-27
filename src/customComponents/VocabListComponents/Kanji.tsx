type KanjiPropsType = {
  kanji?: string;
  styles?: string;
};

const Kanji = ({ kanji, styles }: KanjiPropsType) => {
  return (
    <>{kanji ? <p className={`${styles}`}>{kanji}</p> : "Kanji not found."}</>
  );
};

export default Kanji;
