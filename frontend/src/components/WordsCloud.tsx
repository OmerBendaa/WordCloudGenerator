import { useCallback, useEffect, useMemo, useRef, useState, type RefObject } from "react";

import { type Word, WordCloud } from "@isoterik/react-word-cloud";

import { resolveFill, resolveRotate } from "../utils/fonts.utils";
import { MAX_FONT_SIZE, MIN_FONT_SIZE } from "../constants/font.contants";
import { getMinMax } from "../utils/math.utils";
import type { WordsFrequency } from "../types/api.types";
import styles from "./WordCloud.module.css";
import { useDimentions } from "../hooks/useDimentions";

interface WordsCloudProps {
  wordsFrequency: WordsFrequency;
}

export const WordsCloud = ({ wordsFrequency }: WordsCloudProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimentions(containerRef as RefObject<HTMLDivElement>);

  const words = useMemo(
    () =>
      Object.entries(wordsFrequency).map(([text, { value, color }]) => ({
        text,
        value,
        color,
      })),
    [wordsFrequency]
  );

  const [minValue, maxValue] = useMemo(() => {
    if (words.length === 0) return [0, 0];
    return getMinMax(words.map((word) => word.value));
  }, [words]);

  const resolveFontSize = useCallback(
    (word: Word): number => {
      if (word.value === maxValue) {
        return MAX_FONT_SIZE;
      } else if (word.value === minValue) {
        return MIN_FONT_SIZE;
      } else {
        return (
          MIN_FONT_SIZE +
          (MAX_FONT_SIZE - MIN_FONT_SIZE) * (word.value / maxValue)
        );
      }
    },
    [maxValue, minValue]
  );

  if (words.length === 0) return <div>No data found</div>;

  return (
    <div ref={containerRef} className={styles.container}>
      {dimensions.width > 0 && dimensions.height > 0 && (
        <WordCloud
          words={words}
          width={dimensions.width}
          height={dimensions.height}
          fontSize={resolveFontSize}
          rotate={resolveRotate}
          fill={(word) => resolveFill(word as Word & { color: string })}
          fontWeight="normal"
          fontStyle="normal"
          spiral="rectangular"
          transition="all .3s ease"
          padding={2}
          timeInterval={1}
          svgProps={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      )}
    </div>
  );
};
