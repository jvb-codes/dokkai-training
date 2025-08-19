import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ScreenContainer from "./ScreenContainer";
import { usePastedTextContext } from "@/customHooks/usePastedTextContext";
import useScreenIdContext from "@/customHooks/useScreenIdContext";
import type { ChangeEvent } from "react";

const StartScreen = () => {
  const { screenId, setScreenId } = useScreenIdContext();
  const { setPastedText } = usePastedTextContext();

  //to be deleted after development
  const newsExample =
    "15日も西日本と東日本を中心に気温が上がり、記録的な大雨の被災地を含む各地で猛烈な暑さになりました。16日も九州では危険な暑さが予想されていて、熱中症への対策を徹底してください。一方、大気の状態が不安定になり、局地的に雨雲が発達していて、土砂災害などに十分注意が必要です。";

  const handlePastedText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //set with e.target.value after development
    setPastedText(newsExample);
  };
  return (
    <>
      {screenId === 1 && (
        <ScreenContainer>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl">
            Dokkai Training<span className="text-destructive ">.</span>
          </h1>
          <Textarea
            onChange={handlePastedText}
            autoFocus
            required
            placeholder="Paste in the Japanese text you want to study here..."
            className="resize-none w-[90%] lg:max-w-[960px]"
          />
          <Button onClick={() => setScreenId(2)}>Study</Button>
        </ScreenContainer>
      )}
    </>
  );
};

export default StartScreen;
