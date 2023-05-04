import { useState } from "react";
import { CursorType, cursorAction } from "../hooks/useCursorAnimation";

type bgHoverProps = {
  content: string;
  cursorAction: cursorAction;
};

export default function BgHoverComponent({
  content,
  cursorAction,
}: bgHoverProps) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`align-middle inline-block mx-6 cursor-pointer py-0 px-4 rounded-2xl border-2 relative my-0 overflow-hidden border-white border-separate`}
      onMouseEnter={() => {
        cursorAction.transformCursor(CursorType.Small);
        setHover(true);
      }}
      onMouseLeave={() => {
        cursorAction.transformCursor(CursorType.Default);
        setHover(false);
      }}
    >
      {content}
      <div
        className={`transform transition duration-200 absolute left-0 -top-0.5 w-full  cursor-pointer mt-0 py-0 px-3.5 border-2 my-0 bg-white border-white ${
          !hover && "translate-y-full"
        }`}
      >
        <div
          className={`transform transition ${
            hover ? "duration-500 opacity-100 text-black" : "opacity-0"
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
