import type { VocabEntryType } from "@/data/vocabList";

const useLocalStorage = () => {
  type StudySessionType = {
    text: string;
    vocabList: VocabEntryType[];
  };

  const getLocalStorge = () => {
    const storedData = localStorage.getItem("studySession");

    let studySession: StudySessionType | null = null;

    if (storedData) {
      studySession = JSON.parse(storedData);
    }
    return studySession;
  };

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const setLocalStorage = (text: string, vocabList: VocabEntryType[]) => {
    const currentSession = { text: text, vocabList: vocabList };
    localStorage.setItem("studySession", JSON.stringify(currentSession));
  };

  return { getLocalStorge, clearLocalStorage, setLocalStorage };
};

export default useLocalStorage;
