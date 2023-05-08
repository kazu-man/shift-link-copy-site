import { useContext } from "react";
import { CursorContext, ScrollGradientColorContext } from "../../App";
import BgHoverComponent from "../atoms/BgHoverComponent";
import BorderMoveComponent from "../atoms/BorderHoverComponent";
import { CursorType } from "../hooks/useCursorAnimation";
import { motion } from "framer-motion";

export default function Header() {
  const menus = [
    { title: "SERVICES" },
    { title: "TEAMS" },
    { title: "OUR VISION" },
    { title: "CONTACT" },
    { title: "EN", circle: true },
  ];

  const transformCursor = useContext(CursorContext);
  const { gradientColor } = useContext(ScrollGradientColorContext);

  return (
    <motion.div
      className="text-white flex justify-between pt-10 md:pt-20 px-2 md:px-10 fixed top-0 w-full z-[99] text-xs md:text-base"
      style={{ color: gradientColor }}
    >
      <div
        className="font-bold grid place-content-center cursor-pointer"
        onMouseEnter={() => transformCursor({ type: CursorType.Clip })}
        onMouseMove={() => transformCursor({ type: CursorType.Clip })}
        onMouseLeave={() => transformCursor({ type: CursorType.Default })}
      >
        SHIFT LINK
      </div>

      <div className="hidden w-1/2 md:flex justify-between">
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
    </motion.div>
  );
}
