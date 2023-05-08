import SectionLayout from "../layout/SectionLayout";
import BigMessage, { BigMessageLayout } from "../molecules/BigMessage";

export default function About() {
  const messageList = [
    "SHIFT LINKはリアルと",
    " バーチャル空間内に",
    "インターフェースを構築し",
    "あらゆる機器やデバイス、",
    "それを扱う人やサービスを",
    "つないでいきます。",
  ];
  return (
    <SectionLayout
      classes={["relative", "text-[6vw] md:text-[80px] mb-[50%] md:mb-[20%]"]}
    >
      <BigMessage message={messageList} layout={BigMessageLayout.Right} />
    </SectionLayout>
  );
}
