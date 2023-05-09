import { useContext, useState } from "react";
import { CursorContext, ScrollGradientColorContext } from "../../App";
import BgHoverComponent from "../atoms/BgHoverComponent";
import BorderMoveComponent from "../atoms/BorderHoverComponent";
import { CursorType } from "../hooks/useCursorAnimation";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "./Menu";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuClose = () => {
    setMenuOpen(false);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {!menuOpen ? (
          <motion.div
            exit={{
              opacity: 0,
              transition: {
                duration: 0.8,
              },
            }}
            className="text-white flex justify-between pt-10 md:pt-20 px-2 md:px-10 fixed top-0 w-full z-[99] text-xs md:text-base"
            style={{ color: gradientColor }}
          >
            <div
              className="font-bold grid place-content-center cursor-pointer overflow-hidden"
              onMouseEnter={() => transformCursor({ type: CursorType.Clip })}
              onMouseMove={() => transformCursor({ type: CursorType.Clip })}
              onMouseLeave={() => transformCursor({ type: CursorType.Default })}
            >
              <motion.div
                initial={{
                  y: "100%",
                }}
                animate={{
                  y: 0,
                  transition: { duration: 0.5, delay: 0.3 },
                }}
                exit={{
                  y: "100%",
                  transition: {
                    duration: 0.3,
                  },
                }}
              >
                SHIFT LINK
              </motion.div>
            </div>

            <div className="hidden w-1/2 md:flex justify-between">
              {menus.map((el, index) => {
                if (el.circle) {
                  return (
                    <BgHoverComponent
                      key={"header_" + index}
                      content={el.title}
                    />
                  );
                }
                return (
                  <BorderMoveComponent
                    key={"header_" + index}
                    content={el.title}
                  />
                );
              })}
            </div>
            <div className="md:hidden">
              <BgHoverComponent content={"MENU"} clickFunc={openMenu} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <Menu
        open={menuOpen}
        menuClose={menuClose}
        titles={menus
          .filter((title) => !title.circle)
          .map((title) => title.title)}
      />
    </>
  );
}
