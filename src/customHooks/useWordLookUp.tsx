import axios from "axios";
import type { SearchedWordType } from "@/types/types";
import { useSearchedWordContext } from "@/contexts/useContextHooks/useSearchedWordContext";
// import useWordDefinitionContext from "./useWordDefinitionContext";
import useDialogContext from "../contexts/useContextHooks/useDialogContext";

const useWordLookUp = () => {
  const { setIsLookingUpWord } = useSearchedWordContext();
  // const { setIsDefVisible } = useWordDefinitionContext();
  const { setDialog } = useDialogContext();

  const handleResponseError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        setDialog({
          isOpen: true,
          title: "Not Found",
          message:
            "A server connected, but failed to find the requested webpage or file",
          type: "404",
        });
      } else if (error.request) {
        setDialog({
          isOpen: true,
          title: "Network Error",
          message:
            "We weren't able to look up your word at this time. Please try again later.",
          type: "networkError",
        });
      }
    } else {
      setDialog({
        isOpen: true,
        title: "Word Not Found",
        message: "We attempted to look up this word, but nothing was found.",
        type: "wordNotFound",
      });
    }
  };

  const handleNoSelectedWordsError = () => {
    setDialog({
      isOpen: true,
      title: "No Words Selected",
      message: "First select a word you would like to look up.",
      type: "wordNotSelected",
    });
  };

  const lookUpWord = async (
    selectedText: string | undefined,
    setSearchedWord: React.Dispatch<
      React.SetStateAction<SearchedWordType | undefined>
    >,
  ) => {
    if (selectedText?.trim()) {
      try {
        setIsLookingUpWord(true);
        const response = await axios.get(
          `http://localhost:5000/?keyword=${selectedText}`,
        );

        if (response.status === 200) {
          const kanji = response.data.data[0].japanese[0].word;

          const reading = response.data.data[0].japanese[0].reading;

          const engDefs = response.data.data[0].senses[0].english_definitions;

          setSearchedWord({
            word: kanji || reading,
            reading: reading,
            definition: engDefs,
          });
        }
      } catch (error: unknown) {
        handleResponseError(error);
      } finally {
        setIsLookingUpWord(false);
      }
    } else handleNoSelectedWordsError();
  };

  return { lookUpWord };
};

export default useWordLookUp;
