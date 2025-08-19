import { Card, CardContent } from "@/components/ui/card";
import { usePastedTextContext } from "@/customHooks/usePastedTextContext";
import ContextMenu from "./ContextMenu";
import useContextMenu from "@/customHooks/useContextMenu";

const TextCard = () => {
  const { pastedText } = usePastedTextContext();
  const {
    setIsMenuVisible,
    isMenuVisible,
    cardRef,
    positionContextMenu,
    coords,
    menuRef,
    setMenuWidth,
  } = useContextMenu();

  return (
    <>
      <Card
        onClick={() => setIsMenuVisible(false)}
        className="max-w-2xl h-screen m-4 font-display-Japanese relative "
      >
        <CardContent
          ref={cardRef}
          onContextMenu={(e) => {
            e.preventDefault();
            positionContextMenu(e);
          }}
          className="leading-8"
        >
          <p>{pastedText}</p>
        </CardContent>
        <ContextMenu
          isMenuVisible={isMenuVisible}
          coords={coords}
          menuRef={menuRef}
          setMenuWidth={setMenuWidth}
        />
      </Card>
    </>
  );
};

export default TextCard;
