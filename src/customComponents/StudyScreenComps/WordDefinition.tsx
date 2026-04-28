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
  const { searchedWord, setSearchedWord, isLookingUpWord } =
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
      {isLookingUpWord && <Fallback />}
      {searchedWord && (
        <section className="w-1/2 absolute left-[50%] translate-x-[-50%] top-0 ">
          {!isLookingUpWord && (
            <WordDefCard
              className={`border-none rounded-md shadow-2xl  md:text-[14px] overflow-hidden bg-inkwell-600 text-inkwell-50 backdrop-blur-3xl p-3`}
            >
              <WordDefCardHeader className=" p-0 justify-end items-center">
                <CloseIcon
                  iconName="close"
                  onClick={() => {
                    setIsDefVisible(false);
                    setSearchedWord(undefined);
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
              <WordDefCardFooter className="flex gap-3 p-5 justify-end">
                <Button
                  className="cursor-pointer px-4 py-2 rounded bg-inkwell-600 border hover:bg-inkwell-500 "
                  onClick={() => {
                    setIsDefVisible(false);
                    setSearchedWord(undefined);
                  }}
                >
                  Close
                </Button>
                <Button
                  onClick={() => {
                    if (searchedWord) addWord(searchedWord, setVocabList);
                  }}
                  className="cursor-pointer px-4 py-2 rounded "
                >
                  Add To My Vocab
                </Button>
              </WordDefCardFooter>
            </WordDefCard>
          )}
        </section>
      )}
    </>
  );
};

export default WordDefinition;
