import SectionLayout from "../SectionLayout";
import ScrollInViewComponent from "../atoms/ScrollInViewComponent";

export default function About() {
  const textList = [
    "SHIFT LINKはリアルと",
    " バーチャル空間内に",
    "インターフェースを構築し",
    "あらゆる機器やデバイス、",
    "それを扱う人やサービスを",
    "つないでいきます。",
  ];

  const content = textList.map((text, index) => {
    return (
      <ScrollInViewComponent
        key={"about_" + index}
        scrollConf={{ margin: "200px 0px" }}
      >
        {text}
      </ScrollInViewComponent>
    );
  });

  return (
    <SectionLayout classes={["relative"]}>
      <div className="text-[62px] font-bold absolute top-[25%] right-20">
        {content}
      </div>
    </SectionLayout>
  );
}
