import { useContext, useState } from "react";
import { CursorType } from "../hooks/useCursorAnimation";
import { CursorContext } from "../../App";

type borderMoveProps = {
  content: string;
};

export default function BorderMoveComponent({ content }: borderMoveProps) {
  const [hover, setHover] = useState(false);
  const transformCursor = useContext(CursorContext);

  return (
    <div
      className="align-middle inline-block mx-6 cursor-pointer overflow-hidden"
      onMouseEnter={() => {
        transformCursor(CursorType.Small);
        setHover(true);
      }}
      onMouseLeave={() => {
        transformCursor(CursorType.Default);
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
