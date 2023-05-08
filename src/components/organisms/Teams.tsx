import RotateAppearComponent from "../atoms/RotateAppearComponent";
import ScrollInViewComponent from "../atoms/ScrollInViewAppearBottomComponent";
import SectionLayout from "../layout/SectionLayout";
import Team, { TeamsProps } from "../molecules/Team";

export default function Teams() {
  const teams: TeamsProps[] = [
    {
      title: "THE SHIFT",
      subTitle: "Producing & Creative/Art Direction",
      content:
        "The Shiftは東京を拠点としたクリエイティブコレクティブです。新しい視点やデザイン課題解決を提供します。SHIFT LINKの企画、プロデュース、運営、アートディレクション、デザインを担当。",
      url: "https://theshift.tokyo/",
    },
    {
      title: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 180 40.73"
          fill="#FFF"
          stroke="none"
          className="w-1/2 md:w-full"
        >
          <path d="M167.79,18.76l-13.81,14.33c-.58,.58-1.09,.26-.9-.58l3.21-13.49c.26-1.03,.58-1.28,1.54-1.28h9.44c.77,0,.96,.51,.51,1.03m6.49-2.06l3.79-16.7h-4.75l-3.08,13.3h-17.35l-6.49,27.43h5.91l18.25-18.57,4.3,18.57h5.14l-5.72-24.03Zm-24.99,1.41v-4.82h-17.92l-6.17,27.43h5.2l4.88-21.78c.13-.51,.45-.84,.96-.84h13.04Zm-47.27,17.99c-.77,0-1.22-.45-1.22-1.28v-15.61c0-.84,.45-1.28,1.22-1.28h15.16c.84,0,1.22,.45,1.22,1.28v15.61c0,.84-.39,1.28-1.22,1.28h-15.16Zm-5.78,4.63h26.73V13.3h-26.73v27.43Zm-4.18-22.81v-4.63h-22.16v27.43h22.16v-4.63h-16.38c-.84,0-1.22-.45-1.22-1.28v-15.61c0-.84,.39-1.28,1.22-1.28h16.38Zm-25.05,.19v-4.82h-17.92l-6.17,27.43h5.2l4.88-21.78c.13-.51,.45-.84,.96-.84h13.04Zm-31.16,22.61h4.82V13.3h-4.82v27.43Zm-14.45-21.97l-13.81,14.33c-.58,.58-1.09,.26-.9-.58l3.21-13.49c.26-1.03,.58-1.28,1.54-1.28h9.44c.77,0,.96,.51,.51,1.03m12.21,21.97l-6.62-27.43H6.49L0,40.73H5.91L24.16,22.16l4.3,18.57h5.14Z"></path>
        </svg>
      ),
      subTitle: "Hardware & Software Development",
      content:
        "aircordはデジタルコンテンツのシステムデザインや開発、テクニカルプロデュース・ディレクションを行うクリエイティブスタジオです。SHIFT LINKのテクニカルディレクション、開発全般を担当。",
      url: "https://aircord.co.jp/",
      borderBottom: true,
    },
  ];

  return (
    <SectionLayout>
      <div className="relative m-auto my-36 w-full overflow-hidden md:px-10">
        <div className="max-w-6xl">
          <RotateAppearComponent>TEAMS</RotateAppearComponent>
        </div>
        <ScrollInViewComponent>
          <div className="pt-10 pb-16 md:pb-36 text-sm md:text-2xl">
            We'll continue to pursue new possibilities in <br />
            both technology and design.
          </div>
        </ScrollInViewComponent>

        {teams.map((team, index) => {
          return <Team key={"teams_" + index} {...team} />;
        })}
      </div>
    </SectionLayout>
  );
}
