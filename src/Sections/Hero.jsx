import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { HackerRoom } from "../components/HackerRoom";
import CanvasLoader from "../components/Loading";
import { Leva, useControls } from "leva";
import { calculateSizes, calculateSizes1 } from "../constants";
import { useMediaQuery } from "react-responsive";
import HeroCamera from "../components/HeroCamera";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import Button from "../components/Button";

const Hero = ({ language }) => {
  const controls = useControls("HackerRoom", {
    rotationX: { value: 2.5, min: -10, max: 10 },
    rotationZ: { value: 2.5, min: -10, max: 10 },
    rotationY: { value: 2.5, min: -10, max: 10 },
  });

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes1(isSmall, isMobile, isTablet);

  const heroTexts = {
    en: {
      greeting: "Hi, I'm Sayyed Adil.",
      tagline: "Crafting Coffee with Passion & Expertise",
      button: "Let's know your opinion",
    },
    ar: {
      greeting: "مرحبًا، أنا السيد عادل.",
      tagline: "تحضير القهوة بشغف وخبرة",
      button: "اترك تعليقك",
    },
    in: {
      greeting: "नमस्ते, मैं सैयद अदिल हूँ।",
      tagline: "जुनून और विशेषज्ञता के साथ कॉफी बनाना",
      button: "अपनी राय बताएं",
    },
  };

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <>
          <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
            {heroTexts[language].greeting}{" "}
            <span className="waving-hand">👋</span>
          </p>
          <p className="hero_tag text-gray_gradient text-center">
            {heroTexts[language].tagline}
          </p>
        </>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Leva hidden />

        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera
              makeDefault
              position={isMobile ? [0, 0, 8] : [0, 0, 15]}
            />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition} // Use calculated desk position
                rotation={[0, 6.1, 0]} // Apply the new rotation
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={3} />
            <directionalLight position={[10, 15, 30]} intensity={0.7} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name={`${heroTexts[language].button}`}
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
