import { motion } from "framer-motion";
import SectionLayout from "../layout/SectionLayout";
import { useContext } from "react";
import { CursorContext, ScrollGradientColorContext } from "../../App";
import { CursorType } from "../hooks/useCursorAnimation";

export default function Contact() {
  const { scrollTargetRef, scrollYProgress, gradientColor } = useContext(
    ScrollGradientColorContext
  );
  const transformCursor = useContext(CursorContext);

  return (
    <SectionLayout classes={["px-[0px]", "w-screen"]}>
      <motion.div
        className="bg-white text-black"
        style={{ opacity: scrollYProgress, color: gradientColor }}
      >
        <div className="h-screen"></div>
        <div
          ref={scrollTargetRef}
          className="h-screen flex items-center justify-center"
        >
          <div className="w-auto h-2/3 leading-tight flex flex-col justify-center">
            <div>
              <p>WE ARE ALWAYS SEEKING COLLABORATORS</p>
              <p>TO CREATE NEW INNOVATIONS WITH</p>
            </div>
            <div
              className="py-10"
              onMouseEnter={() =>
                transformCursor({
                  type: CursorType.Contact,
                  title: ["EMAIL US"],
                })
              }
              onMouseLeave={() => transformCursor({ type: CursorType.Default })}
            >
              <div className="text-[140px] font-bold">CONNECT</div>
              <span
                className="text-[140px] font-bold clipped-text flex items-center"
                style={{
                  WebkitTextStrokeColor: "black",
                  WebkitTextStrokeWidth: "2px",
                }}
              >
                WITH US
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="138.599"
                  height="89.896"
                  viewBox="0 0 138.6 89.9"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  className="inline-block"
                >
                  <g>
                    <path d="M0,44.68H137.89"></path>
                    <path d="M93.3,.35l44.59,44.6-44.59,44.59"></path>
                  </g>
                </svg>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>© 2022 The Shift, Inc. All rights reserved.</div>
              <div>INSTAGRAM</div>
              <div>TWITTER</div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionLayout>
  );
}
