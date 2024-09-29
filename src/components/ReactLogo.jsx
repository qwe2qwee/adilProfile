import { Float, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

const ReactLogo = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF("/models/coffee_beans_3d_model.glb");

  return (
    // Float adds an animated floating effect; tweak its parameters or remove if unnecessary
    <Float
      dispose={null}
      speed={2} // Control the float speed
      rotationIntensity={1} // Control rotation while floating
      floatIntensity={1.5} // Control the vertical float movement
    >
      <group {...props}>
        <mesh ref={targetRef} position={[-1, -2, 0]} scale={0.19}>
          <primitive object={scene} />
        </mesh>
      </group>
    </Float>
  );
};

// Preload the model for faster loading in other parts of the app
useGLTF.preload("/models/coffee_beans_3d_model.glb");

export default ReactLogo;
