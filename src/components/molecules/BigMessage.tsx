import ScrollInViewComponent from "../atoms/ScrollInViewAppearBottomComponent";

type bigMessageProps = {
  message: string[];
  layout: BigMessageLayout;
};
export enum BigMessageLayout {
  Left = "justify-start",
  Right = "justify-end",
}

export default function BigMessage({ message, layout }: bigMessageProps) {
  const content = message.map((text, index) => {
    return (
      <ScrollInViewComponent
        key={"BigMessage_" + index + "_" + text}
        delay={(index / 3) * 0.3}
      >
        <div>{text}</div>
      </ScrollInViewComponent>
    );
  });

  return (
    <div className={`lg:flex lg:px-20 items-center ${layout}`}>
      <div className={`font-bold w-auto h-full ${layout}`}>{content}</div>
    </div>
  );
}
