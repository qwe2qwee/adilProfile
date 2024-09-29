import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, useVideoTexture } from "@react-three/drei";
import { gsap } from "gsap";
import { LinearFilter } from "three";
import { a, useSpring } from "@react-spring/three";

const DemoComputer = (props) => {
  const group = useRef();
  const { scene } = useGLTF("/models/rob.glb");

  return (
    <mesh
      {...props}
      dispose={null}
      position={[1.2, 0.4, 9]}
      rotation={[0, -Math.PI / 2, 0]}
    >
      <primitive object={scene} />
    </mesh>
  );
};
export default DemoComputer;

useGLTF.preload("/models/rob.glb");
