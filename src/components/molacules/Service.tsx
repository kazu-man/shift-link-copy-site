import { Canvas } from "@react-three/fiber";
import SectionLayout from "../SectionLayout";
import RotateAppearComponent from "../atoms/RotateAppearComponent";
import ScrollInViewComponent from "../atoms/ScrollInViewComponent";
import TitleParagraphComponent from "../atoms/TitleParagraphComponent";
import WaveImageComponent from "../atoms/WaveImageComponent";
import { div } from "three/examples/jsm/nodes/Nodes.js";

type serviceProps = {
  title: string[];
  subTitle: string[];
  paragraph: string[];
  layout: ParagraphPosition;
  image: string;
};

export enum ParagraphPosition {
  right = "absolute right-10 bottom-10",
  center = "absolute translate-x-1/2 bottom-10",
  left = "absolute left-10 bottom-10",
}

export default function Service({
  title,
  subTitle,
  paragraph,
  layout,
  image,
}: serviceProps) {
  const titleDiv = title.map((text, index) => {
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

  return (
    <div className="flex justify-center relative m-auto my-36 w-full h-full max-w-6xl">
      <div className="mx-auto absolute w-full h-full top-0 left-0">
        <Canvas style={{ background: "transparent" }}>
          <WaveImageComponent image={image} />
        </Canvas>
      </div>
      <div className="w-3/4 ">
        {titleDiv}
        <TitleParagraphComponent
          title={subTitle}
          classes={layout}
          paragraph={paragraph}
        ></TitleParagraphComponent>
      </div>
    </div>
  );
}
