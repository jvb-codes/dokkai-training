import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useSearchedWordContext } from "@/customHooks/useSearchedWordContext";
import useWordDefinitionContext from "@/customHooks/useWordDefinitionContext";

const WordDefinition = () => {
  const { searchedWord, setSearchedWord } = useSearchedWordContext();
  const {
    wordDefCoords,
    wordDefWindowRef,
    setGrabOffset,
    isDefVisible,
    setIsDefVisible,
  } = useWordDefinitionContext();

  const definitions = searchedWord?.definition.map((word, index) => (
    <p className="mb-1" key={index}>
      {index + 1}. {word}
    </p>
  ));

  return (
    <>
      <Card
        ref={wordDefWindowRef}
        draggable
        onMouseDown={(e) => {
          if (wordDefWindowRef.current) {
            const rect = wordDefWindowRef?.current.getBoundingClientRect();
            setGrabOffset({ x: e.pageX - rect.left, y: e.pageY - rect.top });
          }
        }}
        style={{ top: wordDefCoords?.y, left: wordDefCoords?.x }}
        className={`${
          isDefVisible
            ? "absolute animate-fade-in shadow-md shadow-card-foreground"
            : "absolute pointer-events-none invisible"
        }  w-1/2 bg-inkwell-50 border border-inkwell-200 rounded-md shadow-lg md:text-[14px] overflow-hidden p-0 `}
      >
        {searchedWord && (
          <>
            <CardHeader className="text-right bg-inkwell-100 p-0 gap-0 ">
              <div className="py-1">
                <span
                  onClick={() => {
                    setIsDefVisible(false);
                    setSearchedWord(undefined);
                  }}
                  className="word-definition__close material-symbols-outlined cursor-pointer"
                >
                  close
                </span>
              </div>
            </CardHeader>
          </>
        )}
        <CardContent className="p-4 ">
          {searchedWord && (
            <div className="">
              <p className="text-xl">{searchedWord?.word}</p>
              <p className="text-xl mb-2">{searchedWord?.reading}</p>
              {definitions}
              <div className="flex gap-3 mt-6 ">
                <Button className="bg-accent-500 cursor-pointer hover:bg-accent-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-accent-500">
                  Add To My Vocab
                </Button>
                <Button
                  className="bg-inkwell-100 cursor-pointer hover:bg-inkwell-200 text-inkwell-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-inkwell-500"
                  onClick={() => {
                    setIsDefVisible(false);
                    setSearchedWord(undefined);
                  }}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
          {!searchedWord && (
            <div className="flex items-center gap-3 animate-fade-in">
              <span className="animate-spin material-symbols-outlined">
                progress_activity
              </span>
              <p>Looking up word...</p>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default WordDefinition;
