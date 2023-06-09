import { motion } from "framer-motion";
import useMousePosition from "../hooks/useMousePosition";

type plusButtonProps = {
  open: boolean;
};

export default function PlusButton({ open }: plusButtonProps) {
  const animations = {
    bar1: {
      animate: { opacity: 1, rotate: open ? 0 : 90 },
    },
    bar2: {
      animate: { opacity: open ? 1 : 0, rotate: open ? -90 : 0 },
    },
  };

  const { ref, mouseXPosition, mouseYPosition } = useMousePosition();
  //0 以下の時はデフォルトの位置に戻す
  const plusPosition = {
    x: mouseXPosition <= 0 ? 0 : mouseXPosition - 50, //relative divの大きさの半分を引いておく
    y: mouseYPosition <= 0 ? 0 : mouseYPosition - 50,
  };

  return (
    <div
      className="relative cursor-pointer w-[8vw] h-[8vw] md:w-[100px] md:h-[100px] md:mb-3 flex items-center justify-center"
      ref={ref}
    >
      <motion.div
        className="absolute md:p-5"
        animate={{
          x: plusPosition.x,
          y: plusPosition.y,
          transition: {
            type: "spring",
            mass: 0.6,
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 60 60"
          style={{ rotate: "90deg" }}
        >
          <motion.line
            initial={{ translateY: 30 }}
            animate={animations.bar1.animate}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            strokeWidth={"2%"}
            x2="60"
            fill="none"
            stroke="#fff"
          />
          <motion.line
            initial={{ translateY: 30 }}
            animate={animations.bar2.animate}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            strokeWidth={"2%"}
            x2="60"
            fill="none"
            stroke="#fff"
          />
        </svg>
      </motion.div>
    </div>
  );
}
