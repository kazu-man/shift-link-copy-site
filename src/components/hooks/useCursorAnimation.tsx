import { useState, ReactNode, useEffect } from "react";
import { MotionValue, motion } from "framer-motion";
import useMousePosition from "./useMousePosition";
import { gradientColorType } from "./useTextColorChange";

export enum CursorType {
  Default = "default",
  Clip = "clip",
  Small = "small",
  Image = "image",
  Video = "video",
  Visit = "visit",
  Contact = "contact",
}

type cursorVariantType = {
  [cursorType in CursorType]: {
    [key: string]:
      | string
      | number
      | { [key: string]: string | number }
      | MotionValue<string>;
  };
};

export type cursorActionType = {
  type: CursorType;
  title?: string[];
  wageImage?: ReactNode;
  clickFunc?: () => void;
};

export type cursorActionFuncType = (prop: cursorActionType) => void;

export default function useCursorCircle(color: gradientColorType) {
  const [cursorText, setCursorText] = useState<string[]>([]);
  const [cursorVariant, setCursorVariant] = useState(CursorType.Default);
  const [backgroundImage, setBackgroundImage] = useState<ReactNode>(null);
  const [onClickFunc, setOnClickFunc] = useState<{
    funcExist: boolean;
    func: () => void;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  }>({ funcExist: false, func: null! });

  //スクロールした際、一度デフォルトに戻す
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setCursorVariant(CursorType.Default);
      setCursorText([""]);
    });
  }, []);

  const { ref, mouseXPosition, mouseYPosition } = useMousePosition();

  const bgColor =
    cursorVariant === CursorType.Clip
      ? color.reversedGradientColor
      : color.gradientColor;

  const variants: cursorVariantType = {
    default: {
      opacity: 1,
      height: 30,
      width: 30,
      fontSize: "16px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderRadius: "100%",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    clip: {
      opacity: 1,
      borderWidth: "2px",
      borderStyle: "solid",
      borderRadius: "100%",
      color: "#000",
      height: 30,
      width: 30,
      fontSize: "18px",
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
      x: mouseXPosition + 10,
      y: mouseYPosition + 10,
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
      x: mouseXPosition,
      y: mouseYPosition,
      borderRadius: "100%",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    visit: {
      cursor: "pointer",
      opacity: 1,
      height: 150,
      width: 150,
      fontSize: "16px",
      x: mouseXPosition - 75,
      y: mouseYPosition - 75,
      borderRadius: "100%",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    contact: {
      cursor: "pointer",
      opacity: 1,
      height: 150,
      width: 150,
      fontSize: "16px",
      x: mouseXPosition - 75,
      y: mouseYPosition - 75,
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

  const transformCursor: cursorActionFuncType = ({
    type,
    title,
    wageImage,
    clickFunc,
  }: cursorActionType) => {
    setCursorVariant(type);
    setCursorText(title ? title : []);
    setBackgroundImage(wageImage ? wageImage : null);
    if (clickFunc) {
      setOnClickFunc({ funcExist: true, func: clickFunc });
    } else {
      setOnClickFunc({
        ...onClickFunc,
        funcExist: false,
      });
    }
  };

  return {
    transformCursor,
    ref,
    cursorCircle: (
      <div className="hidden md:block">
        <motion.div
          variants={variants}
          className="absolute z-50 flex-col items-center justify-center flex"
          animate={cursorVariant}
          transition={spring}
          onMouseEnter={() =>
            transformCursor({
              type: cursorVariant,
              title: cursorText,
              clickFunc: onClickFunc.func,
              wageImage: backgroundImage,
            })
          }
          onMouseMove={() =>
            transformCursor({
              type: cursorVariant,
              title: cursorText,
              clickFunc: onClickFunc.func,
              wageImage: backgroundImage,
            })
          }
          onClick={() => onClickFunc.funcExist && onClickFunc.func()}
          style={{
            backgroundColor: bgColor,
            borderColor: color.gradientColor,
            color: color.reversedGradientColor,
          }}
        >
          {cursorText &&
            cursorText.map((text, index) => {
              return (
                <div key={"cursorBg_" + index} className="font-bold text-xs">
                  {text}
                </div>
              );
            })}
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
      </div>
    ),
  };
}
