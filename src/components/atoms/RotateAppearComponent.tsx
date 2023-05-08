import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

type sectionLayoutProps = {
  classes?: string[];
  children: ReactNode;
};

export default function RotateAppearComponent({
  classes,
  children,
}: sectionLayoutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  return (
    <div ref={ref} className="text-title md:text-[90px] font-bold block">
      {isInView && (
        <div
          className={`animate-rotateAppear origin-bottom-left inline-block ${
            classes && classes.join(" ")
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
