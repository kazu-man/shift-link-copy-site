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
  classes?: string;
  delay?: number;
};
export default function ScrollInViewComponent({
  children,
  styles,
  scrollConf,
  classes,
  delay,
}: ScrollInViewComponentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    ...scrollConf,
  });
  const defaultDelay = 0.3;
  const fadeUpStyle = {
    transform: isInView ? "none" : "translateY(30px)",
    opacity: isInView ? 1 : 0,
    transition: `all 1s ease-in-out ${delay ? delay : defaultDelay}s`,
  };

  return (
    <section
      ref={ref}
      style={styles ? styles : fadeUpStyle}
      className={classes}
    >
      {children}
    </section>
  );
}
