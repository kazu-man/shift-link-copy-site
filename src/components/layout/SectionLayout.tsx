import { ReactNode } from "react";

type sectionLayoutProps = {
  children: ReactNode;
  classes?: string[];
  pxNon?: boolean;
};

export default function SectionLayout({
  children,
  classes,
  pxNon,
}: sectionLayoutProps) {
  return (
    <section
      className={`h-full w-screen text-white overflow-hidden ${
        classes && classes.join(" ")
      } ${!pxNon ? " px-[5%]" : ""}`}
    >
      {children}
    </section>
  );
}
