import { useRef } from "react";
import useMouse from "@react-hook/mouse-position";

export default function useMousePosition() {
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null && mouse.x) {
    mouseXPosition = mouse.x;
  }

  if (mouse.y !== null && mouse.y) {
    mouseYPosition = mouse.y;
  }

  return {
    ref,
    mouseXPosition,
    mouseYPosition,
  };
}
