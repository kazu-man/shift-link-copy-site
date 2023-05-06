import { ParagraphPosition } from "../atoms/TitleParagraphComponent";
import SectionLayout from "../layout/SectionLayout";
import ShowCase from "../molecules/ShowCase";
import showCase1 from "/video/showcase1.mp4";
import showCase2 from "/video/showcase2.mp4";
import showCase3 from "/video/showcase3.mp4";

export default function ShowCases() {
  return (
    <SectionLayout classes={["px-0"]}>
      <ShowCase
        title={["SHOW CASE"]}
        subTitle={["MUSEUM", "EXPERIENCE"]}
        paragraph={[
          "日本航空のミュージアムにて、SHIFT LINKのシステム",
          "を運用しています。Webブラウザ経由で遠隔からアク",
          "セスし、更新が行えます。",
        ]}
        layout={ParagraphPosition.default}
        video={showCase1}
        videoTitle={"CASE STUDY1"}
      />
      <ShowCase
        title={[""]}
        subTitle={["AR GLASS", "EXPERIENCE"]}
        paragraph={[
          "ARグラスを利用した体験デモ。デジタルコンテンツは",
          "どこでも調整と更新が可能で、ARグラスを装着した新",
          "しい体験を演出します。",
        ]}
        layout={ParagraphPosition.default}
        video={showCase2}
        videoTitle={"CASE STUDY2"}
      />
      <ShowCase
        title={[""]}
        subTitle={["MEDIA FACADE", "SIMULATOR"]}
        paragraph={[
          "デジタルサイネージをシミュレートするためのWeb",
          "ベースのシステム。バーチャル上の渋谷の街で自由に",
          "映像コンテンツを放映し、任意の視点で映像コンテン",
          "ツを閲覧、変更、修正を行うことができます。",
        ]}
        layout={ParagraphPosition.default}
        video={showCase3}
        videoTitle={"CASE STUDY3"}
      />
    </SectionLayout>
  );
}
