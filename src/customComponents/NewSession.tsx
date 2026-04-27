import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import usePastedText from "@/customHooks/usePastedText";
import { usePastedTextContext } from "@/customHooks/usePastedTextContext";
import useScreenIdContext from "@/customHooks/useScreenIdContext";

const NewSession = () => {
  const { handlePastedText, startNewSession, isTextValid } = usePastedText();
  const { setPastedText, setPastedTextError, pastedTextError, pastedText } =
    usePastedTextContext();

  const { setScreenId } = useScreenIdContext();

  return (
    <>
      <Textarea
        onChange={(e) =>
          handlePastedText(e.target.value, setPastedText, setPastedTextError)
        }
        autoFocus
        required
        placeholder="Paste some Japanese text here..."
        className="resize-none w-[90%] lg:max-w-[960px] min-h-[200px] bg-inkwell-100 focus-visible:ring-2
             focus-visible:ring-inkwell-600 focus-visible:border-inkwell-600"
      />
      <p className="text-red-300">{pastedTextError}</p>
      <Button
        className="bg-accent-500 text-inkwell-50 cursor-pointer"
        onClick={() =>
          isTextValid(pastedText)
            ? startNewSession(
                setScreenId,
                setPastedTextError,
                pastedText,
                setPastedText,
              )
            : setPastedTextError("Paste some text first.")
        }
      >
        Start Studying
      </Button>
    </>
  );
};

export default NewSession;
