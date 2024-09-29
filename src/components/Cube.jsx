import { useGLTF, Float } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Cube(props) {
  const { scene } = useGLTF("/models/coffee_bag.glb");
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
    });

    tl.to(cubeRef.current.rotation, {
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
          ref={cubeRef}
          position={[-1, -2, 0]}
          scale={0.3}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)} // Handle hover state properly
        >
          <primitive object={scene} />
        </mesh>
      </group>
    </Float>
  );
}

useGLTF.preload("/models/coffee_bag.glb");

export default Cube;
