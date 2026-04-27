import { usePastedTextContext } from "./usePastedTextContext";
import useVocabListContext from "./useVocabListContext";

const useHighlight = () => {
  const {
    pastedText,
    setPastedTextWithHighlights,
    setIsPastedTextHighlighted,
  } = usePastedTextContext();
  const { vocabList, setVocabList } = useVocabListContext();

  const highlight = {
    turnOn: (highlightKey: string | undefined, id: number) => {
      const re = new RegExp(`(${highlightKey})`, "g");

      //array of characters with highlightKey grouped together.
      const arrayOfOriginalText = pastedText?.split(re);

      const newText = arrayOfOriginalText?.map((word, i) =>
        word === highlightKey ? (
          <mark className="bg-inkwell-300 rounded-sm" key={i}>
            {word}
          </mark>
        ) : (
          word
        ),
      );

      const on = vocabList.map((entry) =>
        entry.id === id
          ? { ...entry, isHighlight: true }
          : { ...entry, isHighlight: false },
      );

      setVocabList(on);
      if (newText) setPastedTextWithHighlights(newText);
      setIsPastedTextHighlighted(true);
    },
    turnOff: (id: number) => {
      const off = vocabList.map((entry) =>
        entry.id === id ? { ...entry, isHighlight: false } : entry,
      );
      setVocabList(off);
      setIsPastedTextHighlighted(false);
    },
  };

  return { highlight };
};

export default useHighlight;
