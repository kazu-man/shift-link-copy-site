import { motion } from "framer-motion";
import SectionLayout from "../layout/SectionLayout";
import { useContext } from "react";
import { CursorContext, ScrollGradientColorContext } from "../../App";
import { CursorType } from "../hooks/useCursorAnimation";
import ScrollInViewComponent from "../atoms/ScrollInViewAppearBottomComponent";

export default function Contact() {
  const { scrollTargetRef, scrollYProgress, gradientColor } = useContext(
    ScrollGradientColorContext
  );
  const transformCursor = useContext(CursorContext);

  return (
    <SectionLayout classes={["w-screen"]} pxNon={true}>
      <motion.div
        className="bg-white text-black"
        style={{ opacity: scrollYProgress, color: gradientColor }}
      >
        <div className="h-screen"></div>
        <div
          ref={scrollTargetRef}
          className="h-screen flex items-center justify-center"
        >
          <div className="pl-16 pr-5 md:px-0 w-auto h-2/3 leading-tight flex flex-col justify-center">
            <div className="md:w-1/2 text-xs md:text-sm">
              <ScrollInViewComponent>
                <p>
                  WE ARE ALWAYS SEEKING COLLABORATORS TO CREATE NEW INNOVATIONS
                  WITH
                </p>
              </ScrollInViewComponent>
            </div>
            <div
              className="py-10"
              onMouseEnter={() =>
                transformCursor({
                  type: CursorType.Contact,
                  title: ["EMAIL US"],
                })
              }
              onMouseMove={() =>
                transformCursor({
                  type: CursorType.Contact,
                  title: ["EMAIL US"],
                })
              }
              onMouseLeave={() => transformCursor({ type: CursorType.Default })}
            >
              <div className="text-mainTitle md:text-[140px] font-bold">
                CONNECT
              </div>
              <span
                className="text-mainTitle md:text-[140px] font-bold clipped-text flex items-center"
                style={{
                  WebkitTextStrokeColor: "black",
                  WebkitTextStrokeWidth: "1px",
                }}
              >
                WITH US
                <div className="w-[10vw] h-[10vw] md:w-[138.599px] md:h-[89.896px] inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 138.6 89.9"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  >
                    <g>
                      <path d="M0,44.68H137.89"></path>
                      <path d="M93.3,.35l44.59,44.6-44.59,44.59"></path>
                    </g>
                  </svg>
                </div>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs md:text-sm">
                © 2022 The Shift, Inc. All rights reserved.
              </div>
              <div className="hidden md:block">INSTAGRAM</div>
              <div className="hidden md:block">TWITTER</div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionLayout>
  );
}
