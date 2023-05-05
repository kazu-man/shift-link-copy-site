import { ReactNode } from "react";
import ScrollInViewComponent from "./ScrollInViewComponent";

type TitleParagraphComponentProps = {
  title: string[];
  paragraph: string[];
  classes?: string;
};
export default function TitleParagraphComponent({
  title,
  paragraph,
  classes,
}: TitleParagraphComponentProps) {
  const titleDiv = title.map((text, index) => {
    return (
      <ScrollInViewComponent
        key={"titleParagraph_" + index}
        delay={(index + 1) * 0.3}
      >
        <div className="text-[50px] font-bold">{text}</div>
      </ScrollInViewComponent>
    );
  });

  return (
    <div className={classes}>
      {titleDiv}
      <ScrollInViewComponent delay={0.8}>
        <div className="text-lg">
          {paragraph.map((text) => {
            return (
              <>
                {text}
                <br />
              </>
            );
          })}
        </div>
      </ScrollInViewComponent>
    </div>
  );
}
