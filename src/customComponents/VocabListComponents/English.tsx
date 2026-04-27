type EnglishPropsType = {
  english?: string | string[];
  styles?: string;
};

const English = ({ english, styles }: EnglishPropsType) => {
  const englishDefinitions =
    typeof english === "string"
      ? english
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : english;

  return (
    <>
      <div className={`${styles}`}>
        {englishDefinitions?.map((word) =>
          englishDefinitions.length > 1 ? (
            <span>{word}; </span>
          ) : (
            <span>{word} </span>
          ),
        )}
      </div>
    </>
  );
};

export default English;
