import { useState, useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";

export enum CursorType {
  Default = "default",
  Clip = "clip",
  Small = "small",
}
type cursorVariantType = {
  [cursorType in CursorType]: {
    [key: string]: string | number | { [key: string]: string | number };
  };
};
export type cursorAction = {
  [key: string]: (type: CursorType, title?: string) => void;
};

export default function useCursorCircle() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null && mouse.pageX) {
    mouseXPosition = mouse.pageX;
  }

  if (mouse.y !== null && mouse.pageY) {
    mouseYPosition = mouse.pageY;
  }

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
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  function transformCursor(name: CursorType, title?: string) {
    setCursorVariant(name);
    if (title) setCursorText(title);
  }

  return {
    transformCursor,
    ref,
    cursorCircle: (
      <motion.div
        variants={variants}
        className=" absolute"
        animate={cursorVariant}
        transition={spring}
      >
        <span className="cursorText">{cursorText}</span>
      </motion.div>
    ),
  };
}
