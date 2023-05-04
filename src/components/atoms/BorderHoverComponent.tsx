import { useState } from "react";
import { CursorType, cursorAction } from "../hooks/useCursorAnimation";

type borderMoveProps = {
  content: string;
  cursorAction: cursorAction;
};

export default function BorderMoveComponent({
  content,
  cursorAction,
}: borderMoveProps) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="align-middle inline-block mx-6 cursor-pointer overflow-hidden"
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
      <span
        className={` transform transition duration-200 block border border-white ${
          !hover && "-translate-x-full"
        }`}
      ></span>
    </div>
  );
}
