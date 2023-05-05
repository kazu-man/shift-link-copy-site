import SectionLayout from "../SectionLayout";
import ToggleComponent, { toggleProps } from "../atoms/ToggleComponent";

export default function ToggleAbout() {
  const items: toggleProps[] = [
    {
      title: "SHIFT LINK CONTROLLER",
      content:
        "デバイスやセンサーなど外部からの入力を、独自インターフェースを介しネットワーク経由で送受信する事が可能なSHIFT LINKコントローラー。現在各種施設で使用されています。",
      image: "",
    },
    {
      title: "DEVELOPMENT ENVIRONMENTS",
      content:
        "シームレスな連携・更新を素早く行うことが可能で、各プラットフォームや環境における制御を行う事が出来る、Web標準技術やUnity、Unreal Engine 5等のゲームエンジンを用いた実装を行います。",
      image: "",
    },
    {
      title: "DEVICES",
      content:
        "ディスプレイやタッチパネル、センサー類から、AR/MR/VRデバイスへの展開など、様々なデバイスに柔軟に対応します。",
      image: "",
    },
  ];

  const itemsDom = items.map((item, index) => {
    return <ToggleComponent key={"toggle_" + index} {...item} />;
  });

  return <SectionLayout>{itemsDom}</SectionLayout>;
}
