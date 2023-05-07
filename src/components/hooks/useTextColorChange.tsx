import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export type gradientColorType = {
  scrollTargetRef: React.MutableRefObject<null>;
  scrollYProgress: MotionValue<number>;
  gradientColor: MotionValue<string>;
  reversedGradientColor: MotionValue<string>;
};

export default function useTextColorChange(): gradientColorType {
  const scrollTargetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["start end", "end end"],
  });
  const gradientColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ffffff", "#000000"]
  );
  const reversedGradientColor = useTransform(
    scrollYProgress,
    [1, 0],
    ["#ffffff", "#000000"]
  );
  return {
    scrollTargetRef,
    scrollYProgress,
    gradientColor,
    reversedGradientColor,
  };
}
