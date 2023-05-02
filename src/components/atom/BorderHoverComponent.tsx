import { useState } from "react";

type borderMoveProps = {
  content: string;
};

export default function BorderMoveComponent({ content }: borderMoveProps) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="align-middle inline-block mx-6 cursor-pointer overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
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
