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
    <div className="mb-32 md:mb-64">
      <div className="flex justify-center relative m-auto my-20 w-full h-[350px] md:h-screen max-w-6xl">
        <div className="mx-auto absolute w-full h-full top-20 left-0 ">
          <Canvas
            style={{ background: "transparent" }}
            camera={{
              fov: 50,
            }}
          >
            <WaveImageComponent image={image} />
          </Canvas>
        </div>
        <div className="md:w-3/4 w-full absolute md:-left-20">
          {rotateTitle}
        </div>
      </div>
      <TitleParagraphComponent
        title={subTitle}
        layout={layout}
        paragraph={paragraph}
      ></TitleParagraphComponent>
    </div>
  );
}
