import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import useDialogContext from "@/contexts/useContextHooks/useDialogContext";

import useVocabList from "@/customHooks/useVocabList";
import Ok from "@/customComponents/DialogBtnLabels/Ok";
import Cancel from "./DialogBtnLabels/Cancel";
import Continue from "./DialogBtnLabels/Continue";
import { toast } from "sonner";

const Dialog = () => {
  const { dialog, setDialog } = useDialogContext();
  const { deleteWord } = useVocabList();

  const { isOpen, cardId, message, title, type } = dialog;

  const types = [
    "duplicate",
    "wordNotFound",
    "wordNotSelected",
    "networkError",
    "404",
  ];

  return (
    <AlertDialog
      open={isOpen}
      onOpenChange={(open) => {
        setDialog((prev) => ({ ...prev, isOpen: open }));
      }}
    >
      <AlertDialogContent className="bg-inkwell-600 text-inkwell-50 border-none flex flex-col gap-13 p-7">
        <AlertDialogHeader>
          <AlertDialogTitle className="my-2">{title}</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className={`${types.includes(type) && "invisible"} cursor-pointer hover:bg-inkwell-500`}
          >
            <Cancel dialogType={type} />
          </AlertDialogCancel>
          <AlertDialogAction
            className="cursor-pointer"
            onClick={() => {
              if (type === "delete" && cardId) {
                deleteWord(cardId);
                toast.success("Word deleted", {
                  position: "top-center",
                  duration: 2500,
                });
              }
            }}
          >
            <Ok dialogType={type} />
            <Continue dialogType={type} />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Dialog;
