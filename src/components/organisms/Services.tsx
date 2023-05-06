import SectionLayout from "../layout/SectionLayout";
import Service from "../molecules/Service";
import system1 from "/img/system1.jpg";
import system2 from "/img/system2.jpg";
import system3 from "/img/system3.jpg";
import system4 from "/img/system4.jpg";
import { ParagraphPosition } from "../atoms/TitleParagraphComponent";

export default function Services() {
  return (
    <SectionLayout>
      <Service
        title={["MULTIPLE", "ENVIRONMENTS"]}
        subTitle={["SHIFT LINKは様々なデジタル", "環境に柔軟に対応します。"]}
        paragraph={[
          "各種機器やAR/MR/VRデバイス、メタバース環境に対応し、",
          "リアルとバーチャルを繋ぐ柔軟なインターフェースを構築します。",
        ]}
        layout={ParagraphPosition.right}
        image={system1}
      />

      <Service
        title={["SIMULATION", "DESIGN SYSTEM"]}
        subTitle={["ブラウザ上で素早く閲覧可能な", "シミュレーションシステム"]}
        paragraph={[
          "デジタルサイネージなどリアル空間での映像コンテンツにおいて、",
          "タブレットやPC等の機器から素早くシミュレーションを行います。",
        ]}
        layout={ParagraphPosition.center}
        image={system2}
      />

      <Service
        title={["REMOTE", "CONTROL"]}
        subTitle={[
          "様々な機器を同時に接続し、",
          "世界中どこでも遠隔で繋げます。",
        ]}
        paragraph={[
          "最新のWeb標準技術を基準に開発し、各種プラットフォームとの接続や",
          "更新も簡単に遠隔で行えるシステムを構築していきます。",
        ]}
        layout={ParagraphPosition.center}
        image={system3}
      />

      <Service
        title={[""]}
        subTitle={["SYSTEM"]}
        paragraph={[
          "SHIFT LINKは特定の機器やプラットフォームに依存せず、多種",
          "多様な環境でも柔軟で安定的に動作するシステムを構築します。",
        ]}
        layout={ParagraphPosition.left}
        image={system4}
      />
    </SectionLayout>
  );
}
