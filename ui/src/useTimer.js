import { useEffect, useRef } from "react";

export default function useTimer(func, timeDelay) {
  const timerRef = useRef();

  useEffect(() => {
    if (!timerRef.current) {
      timerRef.current = window.setInterval(func, timeDelay);
    }

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = undefined;
      }
    };
  }, []);
}
