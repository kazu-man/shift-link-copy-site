import RotateAppearComponent from "../atoms/RotateAppearComponent";
import ScrollInViewComponent from "../atoms/ScrollInViewAppearBottomComponent";

export default function useMultiLineRotate(titles: string[]) {
  const rotateTitle = titles.map((text, index) => {
    return (
      <ScrollInViewComponent
        key={"service_" + index}
        classes="text-title md:text-[90px] font-bold block"
        delay={(index + 1) * 0.3}
      >
        <RotateAppearComponent>{text}</RotateAppearComponent>
        <br />
      </ScrollInViewComponent>
    );
  });
  return {
    rotateTitle,
  };
}
