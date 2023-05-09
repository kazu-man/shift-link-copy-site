import { AnimatePresence, motion } from "framer-motion";
import BgHoverComponent from "../atoms/BgHoverComponent";

export default function Menu({
  open,
  menuClose,
  titles,
}: {
  open: boolean;
  menuClose: () => void;
  titles: string[];
}) {
  const stagger = 0.3;
  const animationDuration = 0.5;
  const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * (max + 1)) - Math.floor(max / 2);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.3,
              delay: 0.3,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              delay: 0.3,
            },
          }}
          className="h-screen w-screen bg-white z-[99] fixed"
        >
          <div className="text-black flex justify-between pt-10 md:pt-20 px-2 md:px-10 absolute top-0 w-full z-[99] text-xs md:text-base">
            <div className="font-bold grid place-content-center cursor-pointer overflow-hidden">
              <motion.div
                initial={{
                  y: "100%",
                }}
                animate={{
                  y: 0,
                  transition: { duration: animationDuration, delay: stagger },
                }}
                exit={{
                  y: "100%",
                  transition: {
                    duration: stagger,
                  },
                }}
                onClick={menuClose}
              >
                <a
                  href="#TOP"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  SHIFT LINK
                </a>
              </motion.div>
            </div>

            <motion.div
              className="md:hidden"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { duration: animationDuration, delay: stagger },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: stagger,
                },
              }}
            >
              <BgHoverComponent
                content={"CLOSE"}
                color={{
                  background: "black",
                  text: "white",
                }}
                deactivateHoverAnimation={true}
                clickFunc={menuClose}
              />
            </motion.div>
          </div>

          <div className="h-full w-full flex justify-center items-center flex-col">
            <div className="overflow-hidden">
              {titles.map((text, index) => {
                return (
                  <motion.div
                    initial={{
                      rotateZ: "-" + Math.abs(getRandomNumber(90)) + "deg",
                      rotateY: Math.abs(getRandomNumber(45)) + "deg",
                      rotateX: Math.abs(getRandomNumber(90)) + "deg",
                      rotate: getRandomNumber(90) + "deg",
                      y: "200%",
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      x: Math.abs(getRandomNumber(150)),
                      rotateZ: 0,
                      rotateX: 0,
                      rotateY: 0,
                      rotate: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                        delay: index / 5,
                      },
                    }}
                    onClick={menuClose}
                    key={"Menu_Rotate_" + text + "_" + index}
                    className="w-screen ml-10 text-[11vw] font-semibold uppercase cursor-pointer"
                  >
                    <a
                      href={`#${text}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {text}
                    </a>
                  </motion.div>
                );
              })}
            </div>
            <div className="overflow-hidden mt-10">
              <motion.div
                initial={{
                  y: "200%",
                }}
                animate={{
                  y: 0,
                  transition: {
                    duration: animationDuration,
                    delay: stagger,
                  },
                }}
                className="text-black"
              >
                © 2022 The Shift, Inc. All rights reserved.
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
