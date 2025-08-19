import TextCard from "./TextCard";
// import VocabCard from "./VocabCard";
import ScreenContainer from "../ScreenContainer";
import useScreenIdContext from "@/customHooks/useScreenIdContext";

const StudyScreen = () => {
  const { screenId } = useScreenIdContext();

  return (
    <>
      {screenId === 2 && (
        <ScreenContainer>
          <TextCard />
          {/* <VocabCard /> */}
        </ScreenContainer>
      )}
    </>
  );
};

export default StudyScreen;
