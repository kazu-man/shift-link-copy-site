import { AnimatePresence, motion } from "framer-motion";

type LoadingProps = {
  loading: boolean;
};
export default function Loading({ loading }: LoadingProps) {
  return (
    <>
      <AnimatePresence>
        {loading ? (
          <motion.div
            exit={{
              opacity: 0,
              transition: {
                duration: 1,
              },
            }}
            className="w-screen h-screen flex justify-center items-center bg-black z-[9999] fixed top-0"
          >
            <div className="overflow-hidden">
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
                  y: "-100%",
                }}
                className="text-white text-[20px] font-bold"
              >
                SHIFT LINK
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
