import useTagsContext from "@/customHooks/useTagsContext";

const Word = () => {
  const { clickedVocabCard } = useTagsContext();

  return (
    <>
      <div key={clickedVocabCard?.id} className="flex flex-col gap-2">
        <div>
          <p className="text-2xl">{clickedVocabCard?.word}</p>
          <p>{clickedVocabCard?.reading}</p>
        </div>
        <p>{clickedVocabCard?.meaning}</p>
      </div>
    </>
  );
};

export default Word;
