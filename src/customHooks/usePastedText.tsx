const usePastedText = () => {
  const handlePastedText = (
    text: string,
    setPastedText: (newValue: string) => void,
    setPastedTextError: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    setPastedText(text);
    setPastedTextError("");
  };

  const startNewSession = (
    setScreenId: React.Dispatch<React.SetStateAction<number>>,
    setPastedTextError: React.Dispatch<React.SetStateAction<string>>,
    pastedText: string,
    setPastedText: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    setScreenId(2);
    setPastedTextError("");
    localStorage.setItem(
      "studySession",
      JSON.stringify({ text: pastedText, vocabList: [] }),
    );
    setPastedText(pastedText);
  };

  const isTextValid = (value: string | null | undefined) => {
    if (typeof value === "string") return value.length !== 0;
    return value !== null && value !== undefined;
  };

  return { handlePastedText, startNewSession, isTextValid };
};

export default usePastedText;
