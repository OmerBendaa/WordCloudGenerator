import { useEffect, useState, type RefObject } from "react";

export const useDimentions = (containerRef: RefObject<HTMLDivElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          height: rect.height,
        });
      } else {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    updateDimensions();

    const timeoutId = setTimeout(() => {
      updateDimensions();
    }, 0);

    window.addEventListener("resize", updateDimensions);

    const resizeObserver = new ResizeObserver(updateDimensions);

    const observeTimeoutId = setTimeout(() => {
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(observeTimeoutId);
      window.removeEventListener("resize", updateDimensions);
      resizeObserver.disconnect();
    };
  }, []);

  return dimensions;
};
