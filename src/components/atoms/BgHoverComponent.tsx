import { useContext, useState } from "react";
import { CursorType } from "../hooks/useCursorAnimation";
import { motion } from "framer-motion";
import { CursorContext, ScrollGradientColorContext } from "../pages/MainPage";

type bgHoverProps = {
  content: string;
  deactivateHoverAnimation?: boolean;
  color?: {
    background: string;
    text: string;
  };
  clickFunc?: () => void;
};

export default function BgHoverComponent({
  content,
  color,
  deactivateHoverAnimation,
  clickFunc,
}: bgHoverProps) {
  const [hover, setHover] = useState(false);
  const transformCursor = useContext(CursorContext);
  const { gradientColor, reversedGradientColor } = useContext(
    ScrollGradientColorContext
  );

  return (
    <motion.div
      className={`align-middle inline-block cursor-pointer py-0 px-4 rounded-2xl border-2 relative my-0 overflow-hidden border-white border-separate`}
      onMouseEnter={() => {
        transformCursor({ type: CursorType.Small });
        !deactivateHoverAnimation && setHover(true);
      }}
      onMouseMove={() => {
        transformCursor({ type: CursorType.Small });
        !deactivateHoverAnimation && setHover(true);
      }}
      onMouseLeave={() => {
        transformCursor({ type: CursorType.Default });
        !deactivateHoverAnimation && setHover(false);
      }}
      onClick={clickFunc}
      style={{
        borderColor: color ? color.background : gradientColor,
        background: color && color.background,
        color: color && color.text,
      }}
    >
      {content}
      <motion.div
        className={`transform transition duration-200 absolute left-0 -top-0.5 w-full  cursor-pointer mt-0 py-0 px-3.5 border-2 my-0 bg-white border-white ${
          !hover && "translate-y-full"
        }`}
        style={{
          background: gradientColor,
          borderColor: gradientColor,
        }}
      >
        <motion.div
          className={`transform transition ${
            hover ? "duration-500 opacity-100 text-black" : "opacity-0"
          }`}
          style={{ color: reversedGradientColor }}
        >
          {content}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
