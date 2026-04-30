import useDisplayIdContext from "@/contexts/useContextHooks/useDisplayIdContext";
import Front from "./Front";
import Back from "./Back";
import { useFlashCardContext } from "@/contexts/useContextHooks/useFlashCardContext";

const Flashcards = () => {
  const { screenId } = useDisplayIdContext();
  const { isFlipped } = useFlashCardContext();

  return (
    <>
      {screenId === 3 && (
        <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-inkwell-200 to-inkwell-300">
          <div className="perspective-distant text-inkwell-50 w-[350px] md:w-[600px] h-[400px] rounded-md">
            <div
              className={`${isFlipped ? "transform rotate-y-180 transition-all duration-500 transform-3d" : ""}  bg-inkwell-500 h-full flex flex-col justify-center shadow-inkwell-900 shadow-lg relative`}
            >
              <Front />
              <Back />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Flashcards;
