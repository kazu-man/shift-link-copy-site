import { ReactNode } from "react";

type sectionLayoutProps = {
  children: ReactNode;
  classes?: string[];
  pxNon?: boolean;
  sectionId?: string;
};

export default function SectionLayout({
  children,
  classes,
  pxNon,
  sectionId,
}: sectionLayoutProps) {
  return (
    <section
      className={`h-full w-screen text-white overflow-hidden ${
        classes && classes.join(" ")
      } ${!pxNon ? " px-[5%]" : ""}`}
      id={sectionId}
    >
      {children}
    </section>
  );
}
