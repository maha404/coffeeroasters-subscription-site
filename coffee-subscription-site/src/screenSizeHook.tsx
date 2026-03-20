import { useEffect, useState } from "react";

type ScreenSize = "mobile" | "desktop";

const getScreenSize = (): ScreenSize => {
  if (typeof window === "undefined") {
    return "desktop";
  }

  return window.innerWidth < 768 ? "mobile" : "desktop";
};

export const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;