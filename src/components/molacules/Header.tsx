import BgHoverComponent from "../atoms/BgHoverComponent";
import BorderMoveComponent from "../atoms/BorderHoverComponent";
import { CursorType, cursorAction } from "../hooks/useCursorAnimation";

type headerProps = {
  cursorAction: cursorAction;
};

export default function Header({ cursorAction }: headerProps) {
  const menus = [
    { title: "SERVICES" },
    { title: "TEAMS" },
    { title: "OUR VISION" },
    { title: "CONTACT" },
    { title: "EN", circle: true },
  ];

  return (
    <div className="text-white flex justify-between py-20 px-10 fixed top-0 w-full z-[99]">
      <div
        className="font-bold grid place-content-center cursor-pointer"
        onMouseEnter={() => cursorAction.transformCursor(CursorType.Clip)}
        onMouseLeave={() => cursorAction.transformCursor(CursorType.Default)}
      >
        SHIFT LINK
      </div>

      <div className="hidden md:block">
        {menus.map((el, index) => {
          if (el.circle) {
            return (
              <BgHoverComponent
                key={"header_" + index}
                content={el.title}
                cursorAction={cursorAction}
              />
            );
          }
          return (
            <BorderMoveComponent
              key={"header_" + index}
              content={el.title}
              cursorAction={cursorAction}
            />
          );
        })}
      </div>
      <div className="md:hidden">
        <BgHoverComponent content={"MENU"} cursorAction={cursorAction} />
      </div>
    </div>
  );
}
