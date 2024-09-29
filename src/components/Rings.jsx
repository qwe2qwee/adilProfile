import { Float, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Rings = (props) => {
  const { scene } = useGLTF("/models/portafilter.glb");
  const rings = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
    });

    tl.to(rings.current.rotation, {
      y: hovered ? "+=2" : `+=${Math.PI * 2}`,
      x: hovered ? "+=2" : `-=${Math.PI * 2}`,
      duration: 2.5,
      stagger: {
        each: 0.15,
      },
    });

    // Cleanup GSAP animation when component unmounts
    return () => {
      tl.kill();
    };
  }, [hovered]); // Depend on hovered state

  return (
    <Float dispose={null}>
      <group {...props}>
        <mesh
          ref={rings}
          scale={8}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)} // Handle hover state properly
        >
          <primitive object={scene} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload("/models/portafilter.glb");

export default Rings;
