import { useContext, useState } from "react";
import PlusButton from "../atoms/PlusButton";
import { motion } from "framer-motion";
import { CursorType } from "../hooks/useCursorAnimation";
import { CursorContext } from "../../App";
import WaveImageComponent from "../atoms/WaveImageComponent";
import { Canvas } from "@react-three/fiber";

export type toggleProps = {
  title: string;
  content: string;
  image: string;
};

export default function ToggleComponent({
  title,
  content,
  image,
}: toggleProps) {
  const [open, setOpen] = useState(false);
  const transformCursor = useContext(CursorContext);

  return (
    <div
      className="w-full py-5 px-10 max-w-6xl m-auto cursor-pointer"
      onMouseEnter={() =>
        transformCursor({
          type: CursorType.Image,
          wageImage: (
            <Canvas style={{ background: "transparent" }}>
              <WaveImageComponent image={image} persist={true} />
            </Canvas>
          ),
        })
      }
      onMouseMove={() =>
        transformCursor({
          type: CursorType.Image,
          wageImage: (
            <Canvas style={{ background: "transparent" }}>
              <WaveImageComponent image={image} persist={true} />
            </Canvas>
          ),
        })
      }
      onMouseLeave={() => transformCursor({ type: CursorType.Default })}
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between pb-10">
        <div className="font-bold text-[40px] flex items-center">{title}</div>
        <PlusButton open={open} />
      </div>
      <motion.div
        animate={{ height: !open ? 0 : "fit-content" }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className={`w-full overflow-hidden border-b-2 ${!open ? "h-0" : ""}`}
      >
        <p className="w-1/2 pb-20 text-xl">{content}</p>
      </motion.div>
    </div>
  );
}
