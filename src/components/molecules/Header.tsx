import { useContext } from "react";
import { CursorContext } from "../../App";
import BgHoverComponent from "../atoms/BgHoverComponent";
import BorderMoveComponent from "../atoms/BorderHoverComponent";
import { CursorType } from "../hooks/useCursorAnimation";

export default function Header() {
  const menus = [
    { title: "SERVICES" },
    { title: "TEAMS" },
    { title: "OUR VISION" },
    { title: "CONTACT" },
    { title: "EN", circle: true },
  ];

  const transformCursor = useContext(CursorContext);

  return (
    <div className="text-white flex justify-between py-20 px-10 fixed top-0 w-full z-[99]">
      <div
        className="font-bold grid place-content-center cursor-pointer"
        onMouseEnter={() => transformCursor(CursorType.Clip)}
        onMouseLeave={() => transformCursor(CursorType.Default)}
      >
        SHIFT LINK
      </div>

      <div className="hidden md:block">
        {menus.map((el, index) => {
          if (el.circle) {
            return (
              <BgHoverComponent key={"header_" + index} content={el.title} />
            );
          }
          return (
            <BorderMoveComponent key={"header_" + index} content={el.title} />
          );
        })}
      </div>
      <div className="md:hidden">
        <BgHoverComponent content={"MENU"} />
      </div>
    </div>
  );
}
