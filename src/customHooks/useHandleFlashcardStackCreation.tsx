import { useState } from "react";

const useHandleFlashcardStackCreation = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const handleFlashcardStackCreation = {
    updateTags: function (isChecked: boolean, val: string) {
      if (isChecked) this.addTag(val);
      else this.removeTag(val);
    },
    addTag: function (val: string) {
      setSelectedTags((prev) => (prev.includes(val) ? prev : [...prev, val]));
    },
    removeTag: function (val: string) {
      setSelectedTags((prev) => prev.filter((tag) => tag !== val));
    },
    submitTags: function () {},
  };
  return { handleFlashcardStackCreation, selectedTags };
};

export default useHandleFlashcardStackCreation;
