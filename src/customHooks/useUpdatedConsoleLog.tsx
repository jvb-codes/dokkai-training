import { useCallback, useEffect } from "react";

const useUpdatedConsoleLog = (value: unknown) => {
  const updatedConsoleLog = useCallback(() => {
    console.log(value);
  }, [value]);

  useEffect(() => {
    updatedConsoleLog();
  }, [updatedConsoleLog]);

  return {};
};

export default useUpdatedConsoleLog;
