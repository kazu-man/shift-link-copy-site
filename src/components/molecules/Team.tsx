import { ReactNode, useContext } from "react";
import { CursorType } from "../hooks/useCursorAnimation";
import { CursorContext } from "../../App";
import { motion } from "framer-motion";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import ScrollInViewBorder from "../atoms/ScrollInViewBorderComponent";

export type TeamsProps = {
  title: string | ReactNode;
  content: string;
  subTitle: string;
  borderBottom?: boolean;
};

export default function Team({
  title,
  content,
  subTitle,
  borderBottom,
}: TeamsProps) {
  const transformCursor = useContext(CursorContext);

  return (
    <div className="overflow-hidden">
      <ScrollInViewBorder />
      <div
        className={`w-full p-10 max-w-6xl m-auto cursor-pointer flex py-20`}
        onMouseEnter={() => transformCursor(CursorType.Small)}
        onMouseLeave={() => transformCursor(CursorType.Default)}
      >
        <div className="w-[30%] flex items-center">
          <div className="flex flex-col justify-between">
            <div className="text-[50px] font-bold pb-10">{title}</div>
            <div className="text-base">{subTitle}</div>
          </div>
        </div>
        <div className="w-[70%] text-2xl pl-10 pr-20">
          <p>{content}</p>
        </div>
      </div>
      {borderBottom && <ScrollInViewBorder />}
    </div>
  );
}
