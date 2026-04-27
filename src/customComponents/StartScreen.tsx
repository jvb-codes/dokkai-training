import ScreenContainer from "./ScreenContainer";
import useScreenIdContext from "@/customHooks/useScreenIdContext";
import StartScreenOptions from "./StartScreenOptions";
import { usePastedTextContext } from "@/customHooks/usePastedTextContext";
import useLocalStorage from "@/customHooks/useLocalStorage";
import { useEffect } from "react";
import NewSession from "./NewSession";

const StartScreen = () => {
  const { screenId } = useScreenIdContext();
  const { prevSession, setPrevSession } = usePastedTextContext();

  const { getLocalStorge } = useLocalStorage();

  useEffect(() => {
    setPrevSession(getLocalStorge());
  }, []);

  return (
    <>
      {screenId === 1 && (
        <ScreenContainer>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-inkwell-400">
            Dokkai Training
            <span className=" text-accent-500">.</span>
          </h1>
          {prevSession && <StartScreenOptions />}
          {!prevSession && <NewSession />}
        </ScreenContainer>
      )}
    </>
  );
};

export default StartScreen;
