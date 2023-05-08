import ScrollInViewComponent from "./ScrollInViewAppearBottomComponent";

type TitleParagraphComponentProps = {
  title: string[];
  paragraph: string[];
  layout?: string;
};

export enum ParagraphPosition {
  default = "",
  right = "justify-end",
  center = "justify-center",
  left = "justify-start",
}

export default function TitleParagraphComponent({
  title,
  paragraph,
  layout,
}: TitleParagraphComponentProps) {
  const titleDiv = title.map((text, index) => {
    return (
      <ScrollInViewComponent
        key={"titleParagraph_" + index}
        delay={(index / 2) * 0.1}
      >
        <div className="text-[5.5vw] md:text-[50px] font-bold">{text}</div>
      </ScrollInViewComponent>
    );
  });

  return (
    <div className={` m-auto w-full max-w-6xl flex ${layout}`}>
      <div>
        <div className="mb-3">{titleDiv}</div>
        <div>
          {paragraph.map((text, index) => {
            return (
              <ScrollInViewComponent
                key={"paragraph_" + index}
                delay={(index + 1) * 0.3}
              >
                <span className="text-md md:text-[25px] md:leading-loose">
                  {text}
                  <br />
                </span>
              </ScrollInViewComponent>
            );
          })}
        </div>
      </div>
    </div>
  );
}
