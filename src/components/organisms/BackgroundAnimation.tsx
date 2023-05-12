import { Canvas } from "@react-three/fiber";
import BgEffect from "../molecules/BgEffect";
import { useMemo } from "react";

export default function BackgroundAnimation() {
  const animation = useMemo(() => {
    return (
      <div className="w-screen h-screen fixed z-[-999]">
        <Canvas
          dpr={2}
          camera={{
            near: 5.0,
            fov: 20,
            far: 10,
          }}
        >
          <color attach="background" args={["black"]} />
          {/* <OrbitControls makeDefault /> */}
          <BgEffect
            amplify={0.5}
            rotation={[Math.PI / 2.2, Math.PI / 20, 0]}
            depthColor="#0000ff"
            surfaceColor="#f09050"
            moveSpeed={0.0001}
          />
          <BgEffect
            amplify={0.7}
            position={[0, 0, -3]}
            rotation={[-Math.PI / 2.2, Math.PI / 5, 0]}
            depthColor="#00f500"
            surfaceColor="#9500ff"
          />
        </Canvas>
      </div>
    );
  }, []);

  return animation;
}
