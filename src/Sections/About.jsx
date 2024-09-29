import React, { useState } from "react";
import Button from "../components/Button";
import Globe from "react-globe.gl";
import { translations } from "../constants";

const About = ({ language }) => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("syedaadil18792@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  // Switch between Arabic and English

  return (
    <section id="about" className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">{translations[language].intro}</p>
              <p className="grid-subtext">
                {translations[language].experience}
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid11.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">
                {translations[language].skillsTitle}
              </p>
              <p className="grid-subtext">
                {translations[language].skillsDesc}
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 9.145,
                    lng: 40.4897,
                    text: "Ethiopia: Coffee Origin",
                    color: "white",
                    size: 15,
                  },
                  {
                    lat: -4.0383,
                    lng: 37.9062,
                    text: "Kenya: Coffee Region",
                    color: "white",
                    size: 15,
                  },
                  {
                    lat: -23.5505,
                    lng: -46.6333,
                    text: "Brazil: Major Coffee Producer",
                    color: "white",
                    size: 15,
                  },
                  {
                    lat: 40.0,
                    lng: -100.0,
                    text: "Rijeka, Croatia",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                {translations[language].flexibility}
              </p>
              <p className="grid-subtext">{translations[language].location}</p>

              <Button
                name={translations[language].contact}
                isBeam
                containerClass="w-full mt-10"
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">
                {translations[language].passionTitle}
              </p>
              <p className="grid-subtext">
                {translations[language].passionDesc}
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">
                {translations[language].contact}
              </p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  syedaadil18792@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
