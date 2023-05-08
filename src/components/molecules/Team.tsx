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
        className={`w-full md:p-10 m-auto cursor-pointer flex py-10 md:py-20 flex-col md:flex-row`}
        onMouseEnter={() =>
          transformCursor({
            type: CursorType.Visit,
            title: ["VISIT", "WEBSITE"],
            clickFunc: visitUrl,
          })
        }
        onMouseMove={() =>
          transformCursor({
            type: CursorType.Visit,
            title: ["VISIT", "WEBSITE"],
            clickFunc: visitUrl,
          })
        }
        onMouseLeave={() => transformCursor({ type: CursorType.Default })}
      >
        <div className="md:w-[30%] flex items-center">
          <div className="flex flex-col justify-between">
            <div className="text-title md:text-[50px] font-bold pb-10">
              {title}
            </div>
            <div className="text-base">{subTitle}</div>
            <div
              className="text-base underline md:hidden"
              onClick={() => visitUrl()}
            >
              Website
            </div>
          </div>
        </div>
        <div className="md:w-[70%] md:text-2xl mt-10 md:mt-0 md:pl-10 md:pr-20 flex items-center justify-center">
          {content}
          <p></p>
        </div>
      </div>
      {borderBottom && <ScrollInViewBorder />}
    </div>
  );
}
