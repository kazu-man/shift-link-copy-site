import { motion } from "framer-motion";

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

  return (
    <div className="relative cursor-pointer w-[60px] h-[60px] m-[30px] mb-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        className="absolute"
        style={{ rotate: "90deg" }}
      >
        <motion.line
          initial={{ translateY: 30 }}
          animate={animations.bar1.animate}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          strokeWidth={4}
          x2="60"
          fill="none"
          stroke="#fff"
          stroke-width="3"
        />
        <motion.line
          initial={{ translateY: 30 }}
          animate={animations.bar2.animate}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          strokeWidth={4}
          x2="60"
          fill="none"
          stroke="#fff"
          stroke-width="3"
        />
      </svg>
    </div>
  );
}
