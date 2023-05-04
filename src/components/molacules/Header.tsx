import BgHoverComponent from "../atoms/BgHoverComponent";
import BorderMoveComponent from "../atoms/BorderHoverComponent";

export default function Header() {
  const menus = [
    { title: "SERVICES" },
    { title: "TEAMS" },
    { title: "OUR VISION" },
    { title: "CONTACT" },
    { title: "EN", circle: true },
  ];
  return (
    <div className="text-white flex justify-between py-20 px-10 fixed top-0 w-full">
      <div className="font-bold grid place-content-center">SHIFT LINK</div>

      <div className="hidden md:block">
        {menus.map((el) => {
          if (el.circle) {
            return <BgHoverComponent content={el.title} />;
          }
          return <BorderMoveComponent content={el.title} />;
        })}
      </div>
      <div className="md:hidden">
        <BgHoverComponent content={"MENU"} />
      </div>
    </div>
  );
}
