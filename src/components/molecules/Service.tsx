import { Canvas } from "@react-three/fiber";
import TitleParagraphComponent, {
  ParagraphPosition,
} from "../atoms/TitleParagraphComponent";
import WaveImageComponent from "../atoms/WaveImageComponent";
import useMultiLineRotate from "../hooks/useMuliLineRotate";

type serviceProps = {
  title: string[];
  subTitle: string[];
  paragraph: string[];
  layout: ParagraphPosition;
  image: string;
};

export default function Service({
  title,
  subTitle,
  paragraph,
  layout,
  image,
}: serviceProps) {
  const { rotateTitle } = useMultiLineRotate(title);

  return (
    <div className="flex justify-center relative m-auto my-36 w-full h-screen max-w-6xl overflow-hidden">
      <div className="mx-auto absolute w-full h-full top-0 left-0">
        <Canvas style={{ background: "transparent" }}>
          <WaveImageComponent image={image} />
        </Canvas>
      </div>
      <div className="w-3/4 ">
        {rotateTitle}
        <TitleParagraphComponent
          title={subTitle}
          classes={layout}
          paragraph={paragraph}
        ></TitleParagraphComponent>
      </div>
    </div>
  );
}
