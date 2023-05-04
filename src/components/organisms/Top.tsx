import { useEffect, useState } from "react";
import SectionLayout from "../SectionLayout";
import RotateAppearComponent from "../atoms/RotateAppearComponent";

export default function Top() {
  const movingText = ["FUTURE", "EXPERIENCE", "METAVERSE"];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((index) => {
        if (movingText.length - 1 <= index) {
          return 0;
        }
        return index + 1;
      });
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [movingText.length]);

  return (
    <SectionLayout classes={["flex", "justify-center", "items-center"]}>
      <div className="w-2/3 h-2/4 whitespace-nowrap flex items-center relative">
        <div className="text-[120px] font-bold overflow-visible ">
          <RotateAppearComponent>CONNECT</RotateAppearComponent>
          <br />
          <div className="overflow-hidden inline-block leading-none">
            <RotateAppearComponent classes={["pr-16"]}>
              THE
            </RotateAppearComponent>
            <RotateAppearComponent>
              {movingText.map((_text, index) => {
                return index === textIndex ? (
                  <span
                    className={`inline-block clipped-text animate-moveTopText translate-y-full`}
                  >
                    {movingText[index]}
                  </span>
                ) : null;
              })}
            </RotateAppearComponent>
          </div>
        </div>
        <div className="absolute  bottom-0 right-0 text-sm pt-10">
          <p>
            Shift LINK aims to connect today’s people <br />
            to tomorrow's experiences through
            <br />
            design and innovation
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
