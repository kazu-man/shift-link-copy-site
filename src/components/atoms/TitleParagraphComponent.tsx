import ScrollInViewComponent from "./ScrollInViewAppearBottomComponent";

type TitleParagraphComponentProps = {
  title: string[];
  paragraph: string[];
  classes?: string;
};

export enum ParagraphPosition {
  default = "",
  right = "absolute right-10 bottom-10",
  center = "absolute translate-x-1/2 bottom-10",
  left = "absolute left-10 bottom-10",
}

export default function TitleParagraphComponent({
  title,
  paragraph,
  classes,
}: TitleParagraphComponentProps) {
  const titleDiv = title.map((text, index) => {
    return (
      <ScrollInViewComponent
        key={"titleParagraph_" + index}
        delay={(index + 1) * 0.1}
      >
        <div className="text-[50px] font-bold">{text}</div>
      </ScrollInViewComponent>
    );
  });

  return (
    <div className={classes}>
      {titleDiv}
      <div className="text-lg">
        {paragraph.map((text, index) => {
          return (
            <ScrollInViewComponent
              key={"paragraph_" + index}
              delay={(index + 1) * 0.3}
            >
              <span>
                {text}
                <br />
              </span>
            </ScrollInViewComponent>
          );
        })}
      </div>
    </div>
  );
}
