/* eslint-disable consistent-return */
import { useEffect } from "react";

const useOnBeforeUnload = (isLoading: boolean) => {
  useEffect(() => {
    const handleWindowClose = (e: BeforeUnloadEvent) => {
      if (!isLoading) return;
      e.preventDefault();
      // eslint-disable-next-line no-return-assign
      return (e.returnValue = "");
    };

    window.addEventListener("beforeunload", handleWindowClose);

    return () => {
      window.removeEventListener("beforeunload", handleWindowClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useOnBeforeUnload;
