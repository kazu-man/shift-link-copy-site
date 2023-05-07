import { useContext, useState } from "react";
import { CursorType } from "../hooks/useCursorAnimation";
import { CursorContext, ScrollGradientColorContext } from "../../App";
import { motion } from "framer-motion";

type borderMoveProps = {
  content: string;
};

export default function BorderMoveComponent({ content }: borderMoveProps) {
  const [hover, setHover] = useState(false);
  const transformCursor = useContext(CursorContext);
  const { gradientColor } = useContext(ScrollGradientColorContext);
  
  return (
    <div
      className="align-middle inline-block mx-6 cursor-pointer overflow-hidden"
      onMouseEnter={() => {
        transformCursor({ type: CursorType.Small });
        setHover(true);
      }}
      onMouseLeave={() => {
        transformCursor({ type: CursorType.Default });
        setHover(false);
      }}
    >
      {content}
      <motion.span
        className={` transform transition duration-200 block border border-white ${
          !hover && "-translate-x-full"
        }`}
        style={{ borderColor: gradientColor }}
      ></motion.span>
    </div>
  );
}
