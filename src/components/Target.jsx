import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";

const Target = (props) => {
  const targetref = useRef();
  const { scene } = useGLTF("/models/coffee_cup.glb");

  useEffect(() => {
    const tl = gsap.to(targetref.current.position, {
      y: targetref.current.position.y + 0.5, // Move target up by 0.5 units
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut", // Adds smooth easing for better animation
    });

    // Cleanup GSAP animation when the component unmounts
    return () => {
      tl.kill();
    };
  }, []); // Empty dependency array to run the animation only on mount

  return (
    <mesh {...props} ref={targetref} scale={0.4}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
