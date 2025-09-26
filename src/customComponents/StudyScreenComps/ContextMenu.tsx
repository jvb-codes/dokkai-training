import useContextMenu from "@/customHooks/useContextMenu";
import { useSearchedWordContext } from "@/customHooks/useSearchedWordContext";
import usePositionWordDef from "@/customHooks/usePositionWordDef";
import axios from "axios";
import useVocabListContext from "@/customHooks/useVocabListContext";

type ContextMenuPropsType = {
  setIsDefVisible: React.Dispatch<React.SetStateAction<boolean>>;
  menuRef: React.RefObject<HTMLDivElement | null>;
  selectedText: string | undefined;
};

const ContextMenu = ({
  //positions menu on x and y axis within TextCard

  //gets height and width of menu for adjusting positioning; prevents going over TextCard's rt and bottom borders
  menuRef,
  selectedText,
  setIsDefVisible,
}: ContextMenuPropsType) => {
  const { setSearchedWord } = useSearchedWordContext();
  const { isMenuVisible, setIsMenuVisible, coords } = useContextMenu();
  const { positionWordDef } = usePositionWordDef();
  const { setIsVocabListVisible } = useVocabListContext();

  const lookUpWord = async () => {
    if (selectedText && selectedText.length > 0) {
      //fetch
      try {
        const response = await axios.get(
          `http://localhost:5000/?keyword=${selectedText}`
        );
        //the searched word

        const searchedWord = response.data.data[0].japanese[0].word;
        console.log(searchedWord);

        //the japanese reading (in hiragana)
        const reading = response.data.data[0].japanese[0].reading;
        console.log(reading);

        //the english definitions (in an array)
        const engDefs = response.data.data[0].senses[0].english_definitions;
        console.log(engDefs);

        setSearchedWord({
          word: searchedWord,
          reading: reading,
          definition: engDefs,
        });
      } catch (error) {
        console.log(error);
      }

      //open dialogue
    } else {
      console.log("No words were selected.");
    }
  };

  return (
    <>
      <div
        ref={menuRef}
        style={{
          top: !isMenuVisible ? -9999 : coords?.y,
          left: !isMenuVisible ? -9999 : coords?.x,
        }}
        className={` w-[220px] ${
          isMenuVisible
            ? "absolute animate-fade-in shadow-md shadow-card-foreground"
            : "absolute pointer-events-none invisible"
        }  bg-inkwell-50 border border-inkwell-200 rounded-md shadow-lg md:text-[14px]`}
      >
        <div
          onClick={(e) => {
            positionWordDef(e);
            lookUpWord();
            setIsDefVisible(true);
            setIsMenuVisible(false);
          }}
          className="hover:bg-inkwell-100  text-black cursor-pointer pl-8 md:pl-6 py-3 flex items-center gap-3"
        >
          <span className="material-symbols-outlined">search</span>
          <p>Look Up Word</p>
        </div>
        <div className="hover:bg-inkwell-100  text-black cursor-pointer pl-8 md:pl-6 py-3 flex items-center gap-3">
          <span className="material-symbols-outlined">add</span>
          <p>Add To My Vocab</p>
        </div>
        <div
          onClick={() => setIsVocabListVisible(true)}
          className="hover:bg-inkwell-100  text-black cursor-pointer pl-8 md:pl-6 py-3 flex items-center gap-3"
        >
          <span className="material-symbols-outlined">list</span>
          <p>See Vocab List</p>
        </div>
      </div>
    </>
  );
};

export default ContextMenu;
