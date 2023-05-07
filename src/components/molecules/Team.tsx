import { ReactNode, useContext } from "react";
import { CursorType } from "../hooks/useCursorAnimation";
import { CursorContext } from "../../App";
import ScrollInViewBorder from "../atoms/ScrollInViewBorderComponent";

export type TeamsProps = {
  title: string | ReactNode;
  content: string;
  subTitle: string;
  borderBottom?: boolean;
  url: string;
};

export default function Team({
  title,
  content,
  subTitle,
  borderBottom,
  url,
}: TeamsProps) {
  const transformCursor = useContext(CursorContext);
  const visitUrl = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="overflow-hidden">
      <ScrollInViewBorder />
      <div
        className={`w-full p-10 max-w-6xl m-auto cursor-pointer flex py-20`}
        onMouseEnter={() =>
          transformCursor({
            type: CursorType.Visit,
            title: ["VISIT", "WEBSITE"],
            clickFunc: visitUrl,
          })
        }
        onMouseLeave={() => transformCursor({ type: CursorType.Default })}
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
