import { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";

type ScrollInViewComponentProps = {
  children: ReactNode;
  styles?: {
    [key: string]: string;
  };
  scrollConf?: {
    [key: string]: string;
  };
};
export default function ScrollInViewComponent({
  children,
  styles,
  scrollConf,
}: ScrollInViewComponentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    ...scrollConf,
  });
  const fadeUpStyle = {
    transform: isInView ? "none" : "translateY(30px)",
    opacity: isInView ? 1 : 0,
    transition: "all 1s ease-in 0.3s",
  };

  return (
    <section ref={ref} style={styles ? styles : fadeUpStyle}>
      {children}
    </section>
  );
}
