import { useEffect, useState } from "react";
import SectionLayout from "../layout/SectionLayout";
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
    <SectionLayout
      sectionId="TOP"
      classes={[
        "flex",
        "justify-center",
        "items-center",
        "overflow-hidden",
        "h-screen",
      ]}
    >
      <div className="w-full md:w-2/3 h-2/4 whitespace-nowrap flex items-center relative">
        <div className="text-mainTitle md:text-[140px] font-bold overflow-visible ">
          <RotateAppearComponent>CONNECT</RotateAppearComponent>

          <div className="leading-none flex justify-center flex-col md:flex-row">
            <RotateAppearComponent classes={["pr-16", "mb-2"]}>
              THE
            </RotateAppearComponent>
            <div className="overflow-hidden inline-block">
              <RotateAppearComponent>
                {movingText.map((_text, index) => {
                  return index === textIndex ? (
                    <span
                      key={"top_" + index}
                      className={`inline-block clipped-text animate-moveTopText translate-y-full`}
                      style={{ WebkitTextStrokeWidth: "1px" }}
                    >
                      {movingText[index]}
                    </span>
                  ) : null;
                })}
              </RotateAppearComponent>
            </div>
          </div>
        </div>
        <div className="absolute md-down:top-0 md:bottom-0 md:right-0 text-sm pt-3">
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
