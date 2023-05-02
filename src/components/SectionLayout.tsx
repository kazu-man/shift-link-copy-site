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
      className={`h-screen w-screen text-white ${classes && classes.join(" ")}`}
    >
      {children}
    </section>
  );
}
