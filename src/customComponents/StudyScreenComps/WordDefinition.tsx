import { Button } from "@/components/ui/button";
import { Icon as CloseIcon } from "../Icon";
import {
  Card as WordDefCard,
  CardContent as WordDefContent,
  CardHeader as WordDefCardHeader,
  CardFooter as WordDefCardFooter,
} from "@/components/ui/card";
import { useSearchedWordContext } from "@/contexts/useContextHooks/useSearchedWordContext";
import useWordDefContext from "@/contexts/useContextHooks/useWordDefContext";
import useVocabList from "@/customHooks/useVocabList";

import useVocabListContext from "@/contexts/useContextHooks/useVocabListContext";
import Fallback from "../Fallback";

const WordDefinition = () => {
  const { searchedWord, setSearchedWord, isLookingUpWord, setSelectedText } =
    useSearchedWordContext();
  const { setIsDefVisible } = useWordDefContext();

  const { addWord } = useVocabList();

  const { setVocabList } = useVocabListContext();

  const definitions = searchedWord?.definition.map((word, index) => (
    <p className="mb-1" key={index}>
      {index + 1}. {word}
    </p>
  ));

  return (
    <>
      <section className=" fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[350px] md:w-[650px]">
        {isLookingUpWord && <Fallback />}
        {!isLookingUpWord && searchedWord && (
          <WordDefCard
            className={`border-none rounded-md shadow-2xl  md:text-[14px] overflow-hidden bg-inkwell-600 text-inkwell-50 backdrop-blur-3xl p-3`}
          >
            <WordDefCardHeader className=" p-0 justify-end items-center">
              <CloseIcon
                iconName="close"
                onClick={() => {
                  setIsDefVisible(false);
                  setSearchedWord(undefined);
                  setSelectedText("");
                }}
                styles="word-definition__close cursor-pointer"
              />
            </WordDefCardHeader>
            <WordDefContent>
              <div>
                <p className="text-2xl">{searchedWord?.word}</p>
                <p className="text-2xl mb-2">{searchedWord?.reading}</p>
                <p className="text-md">{definitions}</p>
              </div>
            </WordDefContent>
            <WordDefCardFooter className="flex justify-center gap-3 p-5">
              <Button
                className="cursor-pointer px-4 py-2 rounded bg-inkwell-600 border hover:bg-inkwell-500 "
                onClick={() => {
                  setIsDefVisible(false);
                  setSearchedWord(undefined);
                  setSelectedText("");
                }}
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  if (searchedWord) addWord(searchedWord, setVocabList);
                  setSelectedText("");
                  setSearchedWord(undefined);
                }}
                className="cursor-pointer px-4 py-2 rounded "
              >
                Add To My Vocab
              </Button>
            </WordDefCardFooter>
          </WordDefCard>
        )}
      </section>
    </>
  );
};

export default WordDefinition;
