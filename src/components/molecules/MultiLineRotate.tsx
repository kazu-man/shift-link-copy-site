import RotateAppearComponent from "../atoms/RotateAppearComponent";

export default function MultiLineRotate({ titles }: { titles: string[] }) {
  return (
    <>
      {titles.map((text, index) => {
        return (
          <RotateAppearComponent key={"Rotate_" + text + "_" + index}>
            {text}
          </RotateAppearComponent>
        );
      })}
    </>
  );
}
