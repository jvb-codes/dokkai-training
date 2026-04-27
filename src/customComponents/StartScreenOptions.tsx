import { Button } from "@/components/ui/button";
import useLocalStorage from "@/customHooks/useLocalStorage";
import { usePastedTextContext } from "@/customHooks/usePastedTextContext";
import useScreenIdContext from "@/customHooks/useScreenIdContext";

const StartScreenOptions = () => {
  const { setScreenId } = useScreenIdContext();
  const { setPastedText, prevSession, setPrevSession } = usePastedTextContext();
  const { clearLocalStorage } = useLocalStorage();

  return (
    <div className="flex gap-5 ">
      <Button
        onClick={() => {
          clearLocalStorage();
          setPrevSession(null);
        }}
        className="bg-accent-500  cursor-pointer font-semibold"
      >
        Study New Text
      </Button>
      <Button
        onClick={() => {
          setScreenId(2);
          if (prevSession) setPastedText(prevSession.text);
        }}
        className="bg-accent-500  cursor-pointer font-semibold"
      >
        Study Previous Text
      </Button>
    </div>
  );
};

export default StartScreenOptions;
