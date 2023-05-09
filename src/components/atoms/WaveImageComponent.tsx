import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

import vertexShader from "../../shaders/flag/vertex.glsl";
import fragmentShader from "../../shaders/flag/fragment.glsl";

interface MyMaterial extends THREE.ShaderMaterial {
  uniforms: {
    uTime: { value: number };
    uRadius: { value: number };
  };
}

type WaveImageComponentProps = {
  image: string;
  persist?: boolean;
};
export default function WaveImageComponent({
  image,
  persist,
}: WaveImageComponentProps) {
  const IMG_SRC = image;

  const imageRef = useRef<THREE.Mesh>(null);
  const tex = useLoader(THREE.TextureLoader, IMG_SRC);
  const img = useLoader(THREE.ImageLoader, IMG_SRC);
  const PLANE_WIDTH = 6.0;
  const PLANE_HEIGHT = 4.0;

  const [hover, setHover] = useState(false);

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTexture: { value: tex },
      uTime: { value: 0 },
      uPlaneSize: { value: new THREE.Vector2(PLANE_WIDTH, PLANE_HEIGHT) },
      uImageSize: { value: new THREE.Vector2(img.width, img.height) },

      //旗にするなら
      uFrequency: { value: new THREE.Vector2(2, 1) },
      uColor: { value: new THREE.Color("orange") },

      //波型にするなら
      // uBigWavesElevation: { value: 0.1 },
      // uBigWavesFrequency: { value: new THREE.Vector2(1, 1) },
      // uBigWavesSpeed: { value: 1.1 },

      // uSmallWavesElevation: { value: 0.1 },
      // uSmallWavesFrequency: { value: 1 },
      // uSmallWavesSpeed: { value: 0.2 },
      // uSmallIterations: { value: 4 },

      // uDepthColor: { value: new THREE.Color("#ff0000") },
      // uSurfaceColor: { value: new THREE.Color("#0000ff") },
      // uColorOffset: { value: 0.08 },
      // uColorMultiplier: { value: 8 },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    transparent: true,
    opacity: 0.7,
    // wireframe: true,
  });

  //refじゃないと消える
  const lastElapsedTime = useRef(0);
  const lastAppliedTime = useRef(0);
  useFrame((state) => {
    if (imageRef.current) {
      //経過秒を取得
      const delta = state.clock.elapsedTime - lastElapsedTime.current;
      const material = (imageRef.current as THREE.Mesh).material as MyMaterial;

      if (hover || persist) {
        const applyTime = lastAppliedTime.current + delta;
        material.uniforms.uTime.value = applyTime;

        //最終更新時間を記録
        lastAppliedTime.current = applyTime;
      } else {
        //hoverがないときは最終更新時間を追加（しないと0に戻る）
        material.uniforms.uTime.value = lastAppliedTime.current;
      }

      // 経過時間を更新
      lastElapsedTime.current = state.clock.elapsedTime;

      //deltaを使うとマウスのアニメーションが干渉して変になる
      //   material.uniforms.uTime.value = delta;
    }
  });

  return (
    <mesh
      ref={imageRef}
      material={material}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <planeGeometry args={[PLANE_WIDTH, PLANE_HEIGHT, 64, 64]} />

      {/* なぜかこの書き方だとマウスのアニメーションが干渉して動かない */}
      {/* <shaderMaterial ... /> */}
    </mesh>
  );
}
