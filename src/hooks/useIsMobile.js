const { useState, useEffect, useMemo } = require("react");

const useIsMobile = () => {
  const [dimension, setDimension] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimension(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setDimension(window.innerWidth);
      });
    };
  }, []);

  const isMobile = useMemo(() => dimension <= 760, [dimension]);

  return isMobile;
};

export default useIsMobile;
