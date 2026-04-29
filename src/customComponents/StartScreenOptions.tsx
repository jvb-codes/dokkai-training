import { Button } from "@/components/ui/button";
import useLocalStorage from "@/customHooks/useLocalStorage";
import { usePastedTextContext } from "@/contexts/useContextHooks/usePastedTextContext";
import useDisplayIdContext from "@/contexts/useContextHooks/useDisplayIdContext";

const StartScreenOptions = () => {
  const { setScreenId } = useDisplayIdContext();
  const { setPastedText, prevSession, setPrevSession } = usePastedTextContext();
  const { clearLocalStorage } = useLocalStorage();

  return (
    <div className="flex flex-col md:flex-row gap-5 mt-2 ">
      <Button
        onClick={() => {
          clearLocalStorage();
          setPrevSession(null);
        }}
        className="bg-accent-500 cursor-pointer font-semibold"
      >
        Study New Text
      </Button>
      <Button
        onClick={() => {
          setScreenId(2);
          if (prevSession) setPastedText(prevSession.text);
        }}
        className="bg-accent-500 cursor-pointer font-semibold"
      >
        Study Previous Text
      </Button>
    </div>
  );
};

export default StartScreenOptions;
