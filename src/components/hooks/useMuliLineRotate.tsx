import RotateAppearComponent from "../atoms/RotateAppearComponent";
import ScrollInViewComponent from "../atoms/ScrollInViewComponent";

export default function useMultiLineRotate(titles: string[]) {
  const rotateTitle = titles.map((text, index) => {
    return (
      <ScrollInViewComponent
        key={"service_" + index}
        classes="text-[90px] font-bold inline-block"
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
