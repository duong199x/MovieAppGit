import { useEffect, useState } from "react";

export const useViewport = () => {
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );
  useEffect(() => {
    const handlwWindowWidth = () => {
      const width = window.innerWidth || document.documentElement.clientWidth;
      setWindowWidth(width);
    };
    handlwWindowWidth();
    window.addEventListener("resize", handlwWindowWidth);
    return () => {
      window.removeEventListener("resize", handlwWindowWidth);
    };
  }, []);
  return [windowWidth];
};
