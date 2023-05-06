import SectionLayout from "../layout/SectionLayout";
import BigMessage, { BigMessageLayout } from "../molecules/BigMessage";

export default function Vision() {
  const messageList = [
    "SHIFT LINKはリアルと",
    "リアルとバーチャル",
    "どちらの環境でも、",
    "テクノロジーと",
    "デザインによって",
    "それを体験する",
    "人々をつなげていき、",
    "未来の可能性へと",
    "シフトしていきます。",
  ];
  return (
    <SectionLayout classes={["relative", "my-20"]}>
      <div className="mb-10 mx-[5%] text-lg font-bold text-white flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="15"
          viewBox="0 0 6.08 10.49"
          className="inline-block mr-3"
        >
          <path
            d="M.35,.36L5.37,5.33,.35,10.13"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinejoin="miter"
          ></path>
        </svg>
        OUR FUTURE VISION
      </div>
      <BigMessage message={messageList} layout={BigMessageLayout.Left} />
    </SectionLayout>
  );
}
