import { useEffect, useState } from "react";
import ScrollInViewComponent from "../atoms/ScrollInViewComponent";

type bigMessageProps = {
  message: string[];
  layout: BigMessageLayout;
};
export enum BigMessageLayout {
  Left = "left-[5%]",
  Right = "right-[5%]",
}

export default function BigMessage({ message, layout }: bigMessageProps) {
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    //少し長めに取っておく
    setSectionHeight(message.length * 100);
  }, [message.length, setSectionHeight]);

  const content = message.map((text, index) => {
    return (
      <ScrollInViewComponent
        key={"BigMessage_" + index + "_" + text}
        scrollConf={{ margin: "200px 0px" }}
      >
        <span>{text}</span>
      </ScrollInViewComponent>
    );
  });

  return (
    <div className={`relative `} style={{ height: sectionHeight + "px" }}>
      <div
        className={`text-[60px] font-bold w-auto h-full absolute top-10 ${layout}`}
      >
        {content}
      </div>
    </div>
  );
}
