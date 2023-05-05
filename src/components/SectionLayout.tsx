import { ReactNode } from "react";

type sectionLayoutProps = {
  children: ReactNode;
  classes?: string[];
};

export default function SectionLayout({
  children,
  classes,
}: sectionLayoutProps) {
  return (
    <section
      className={`h-full w-screen text-white overflow-hidden px-[5%] ${
        classes && classes.join(" ")
      }`}
    >
      {children}
    </section>
  );
}
