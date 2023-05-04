import { ReactNode } from "react";

type sectionLayoutProps = {
  classes?: string[];
  children: ReactNode;
};

export default function RotateAppearComponent({
  classes,
  children,
}: sectionLayoutProps) {
  return (
    <div
      className={`animate-rotateAppear origin-bottom-left inline-block ${
        classes && classes.join(" ")
      }`}
    >
      {children}
    </div>
  );
}
