import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./useMousePosition";

export enum CursorType {
  Default = "default",
  Clip = "clip",
  Small = "small",
  Image = "image",
  Video = "video",
}
type cursorVariantType = {
  [cursorType in CursorType]: {
    [key: string]: string | number | { [key: string]: string | number };
  };
};
export type cursorAction = {
  [key: string]: (type: CursorType, title?: string) => void;
};

export type cursorActionFuncType = (
  type: CursorType,
  title?: string,
  wageImage?: ReactNode
) => void;

export default function useCursorCircle() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState(CursorType.Default);
  const [backgroundImage, setBackgroundImage] = useState<ReactNode>(null);

  const { ref, mouseXPosition, mouseYPosition } = useMousePosition();

  const variants: cursorVariantType = {
    default: {
      opacity: 1,
      height: 30,
      width: 30,
      fontSize: "16px",
      border: "2px white solid",
      backgroundColor: "#ffffff",
      x: mouseXPosition,
      y: mouseYPosition,
      borderRadius: "100%",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    clip: {
      opacity: 1,
      border: "2px white solid",
      color: "#000",
      height: 30,
      width: 30,
      fontSize: "18px",
      borderRadius: "100%",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    small: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#ffffff",
      x: mouseXPosition,
      y: mouseYPosition,
      borderRadius: "100%",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    image: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#ffffff",
      x: mouseXPosition,
      y: mouseYPosition,
      borderRadius: "100%",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    video: {
      cursor: "none",
      opacity: 1,
      height: 150,
      width: 150,
      fontSize: "16px",
      backgroundColor: "#ffffff",
      x: mouseXPosition,
      y: mouseYPosition,
      borderRadius: "100%",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  const transformCursor: cursorActionFuncType = (
    name: CursorType,
    title?: string,
    wageImage?: ReactNode
  ) => {
    setCursorVariant(name);
    setCursorText(title ? title : "");
    setBackgroundImage(wageImage ? wageImage : null);
  };

  return {
    transformCursor,
    ref,
    cursorCircle: (
      <>
        <motion.div
          variants={variants}
          className="absolute z-50 flex items-center justify-center"
          animate={cursorVariant}
          transition={spring}
          onMouseEnter={() => transformCursor(cursorVariant, cursorText)}
        >
          <span className="font-bold text-xs">{cursorText}</span>
        </motion.div>
        <motion.div
          animate={{
            opacity: cursorVariant === CursorType.Image ? 1 : 0,
            height: 500,
            width: 500,
            fontSize: "16px",
            x: mouseXPosition - 250,
            y: mouseYPosition - 250,
            transition: {
              type: "spring",
              mass: 0.6,
            },
          }}
          className="absolute  z-[-1]"
          transition={spring}
        >
          {backgroundImage}
        </motion.div>
      </>
    ),
  };
}
