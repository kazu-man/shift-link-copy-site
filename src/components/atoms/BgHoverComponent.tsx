import { useContext, useState } from "react";
import { CursorType } from "../hooks/useCursorAnimation";
import { CursorContext, ScrollGradientColorContext } from "../../App";
import { motion } from "framer-motion";

type bgHoverProps = {
  content: string;
};

export default function BgHoverComponent({ content }: bgHoverProps) {
  const [hover, setHover] = useState(false);
  const transformCursor = useContext(CursorContext);
  const { gradientColor, reversedGradientColor } = useContext(
    ScrollGradientColorContext
  );

  return (
    <motion.div
      className={`align-middle inline-block mx-6 cursor-pointer py-0 px-4 rounded-2xl border-2 relative my-0 overflow-hidden border-white border-separate`}
      onMouseEnter={() => {
        transformCursor({ type: CursorType.Small });
        setHover(true);
      }}
      onMouseMove={() => {
        transformCursor({ type: CursorType.Small });
        setHover(true);
      }}
      onMouseLeave={() => {
        transformCursor({ type: CursorType.Default });
        setHover(false);
      }}
      style={{ borderColor: gradientColor }}
    >
      {content}
      <motion.div
        className={`transform transition duration-200 absolute left-0 -top-0.5 w-full  cursor-pointer mt-0 py-0 px-3.5 border-2 my-0 bg-white border-white ${
          !hover && "translate-y-full"
        }`}
        style={{ background: gradientColor, borderColor: gradientColor }}
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
