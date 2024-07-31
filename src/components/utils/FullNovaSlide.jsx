import React, { memo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const initialScales = {
  base: 1.1,
  xxxs: 1,
  lg: 0.7,
  xl: 0.35,
  "3xl": 0.3,
  "6xl": 0.4,
};

const getInitialScale = () => {
  const width = window.innerWidth;
  if (width >= 1920) return initialScales["6xl"];
  if (width >= 1280) return initialScales["3xl"];
  if (width >= 900) return initialScales.xl;
  if (width >= 768) return initialScales.lg;
  if (width >= 375) return initialScales.xxxs;
  return initialScales.base;
};

const FullNovaSlide = memo(({ isOpen, sliderValue, setSliderValue }) => {
  const novaImgRef = useRef(null);
  const [imgScale, setImgScale] = useState(() => getInitialScale());
  const [previousSliderValue, setPreviousSliderValue] = useState(sliderValue);

  useEffect(() => {
    if (sliderValue === 50) {
      setImgScale(getInitialScale());
    }
    if (sliderValue < 50 && sliderValue >= 20) {
      if (sliderValue < previousSliderValue) {
        // Increment the scale
        setImgScale((prevImgScale) => prevImgScale + 0.002);
      } else if (sliderValue > previousSliderValue) {
        // Decrement the scale
        setImgScale(prevImgScale => Math.max(prevImgScale - 0.002, getInitialScale()))
      }
      // Update the previous slider value
      setPreviousSliderValue(sliderValue);
    }
  }, [sliderValue]);

  const handleRightHalfClick = () => {
    if (!isOpen) {
      setSliderValue(5);
    }
  };
  return (
    <div className="relative h-auto">
      <div
        style={{
          backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Nova%20background.png"})`,
        }}
        onClick={handleRightHalfClick}
        className={`flex flex-col justify-evenly sm:justify-evenly lg:justify-around 2xl:justify-evenly items-center relative overflow-hidden h-screen bg-cover bg-center xl:bg-top`}
      >
        <Fade triggerOnce={true}>
          <img
            ref={novaImgRef}
            style={{
              position: "absolute",
              transform: `scale(${imgScale}) translate(-50%, -50%)`,
              top: "46.5%",
              left: "55%",
            }}
            loading="lazy"
            className={`pointer-events-none select-none transition-transform`}
            src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/orignal%20bottle%20new%2014x14.png"
            alt="Nova Bottle"
          />
        </Fade>
        {sliderValue <= 20 ? (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 9 }}
            className="w-full lg:w-9/12 xl:w-1/2 3xl:w-[45%] 6xl:w-5/12 absolute flex flex-col bottom-[15%] xxxs:bottom-[8%] xxs:bottom-[14%] xsm:bottom-[9%] lg:bottom-[6%] xl:bottom-0 6xl:bottom-[1%] left-[4%] lg:left-[12%] xl:left-[25%] text-snow"
          >
            <div className="font-anton flex items-center">
              <h1 className="text-7xl xsm:text-[5.25rem] lg:text-[6.75rem] xl:text-[5.25rem] 3xl:text-8xl 4xl:text-[6.75rem] 6xl:text-[7.5rem]">
                FUTURE
              </h1>
              <div className="ml-1 lg:ml-2 lg:-mt-2 xl:-mt-0 3xl:-mt-2 4xl:-mt-3 6xl:-mt-4 flex flex-col justify-between lg:justify-center items-start ">
                <h1 className="text-3xl xsm:text-[2.5rem] lg:text-[3.125rem] xl:text-[2.5rem] 3xl:text-[2.875rem] 4xl:text-[3.125rem] 6xl:text-[3.625rem] xsm:leading-none lg:leading-[1.15] xl:leading-none 3xl:leading-tight">
                  IS
                </h1>
                <h1 className="text-3xl xsm:text-[2.5rem] lg:text-[3.125rem] xl:text-[2.5rem] 3xl:text-[2.875rem] 4xl:text-[3.125rem] 6xl:text-[3.625rem]">
                  SUGAR
                </h1>
              </div>
            </div>
            <div className="flex items-center lg:justify-between">
              <h1 className="font-anton text-7xl xsm:text-[5.25rem] lg:text-[6.75rem] xl:text-[5.25rem] 3xl:text-8xl 4xl:text-[6.75rem] 6xl:text-[7.5rem]">
                FREE
              </h1>
              <Link to={"/juus"}>
                <motion.button
                  animate={{ x: [0, 5, -5, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className={`hover:text-black hover:bg-snow shadow-primary-shadow mx-5 h-[1.625rem] w-28 text-xs px-1.5 border-2 rounded-3xl flex items-center justify-center`}
                >
                  <span>DISCOVER MORE</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ) : (
          <></>
          // <Fade triggerOnce={true} delay={300}>
          //   <div className="font-anton pointer-events-none select-none absolute flex flex-col justify-center items-start bottom-[12%] xxxs:bottom-[9.6%] xxs:bottom-[10.5%] lg:bottom-[6.67%] xl:bottom-[8%] 3xl:bottom-[4%] 6xl:bottom-0 right-[7%] xxxxs:right-[2.25%] xxxs:right-[13%] xxs:right-[5.25%] xsm:right-[9.67%] sm:right-[15%] lg:right-[19%] xl:right-[35%] 2xl:right-[36%] 3xl:right-[35%] 4xl:right-[35.75%] 5xl:right-[36.75%] 6xl:right-[35.67%] text-5xl xxxxs:text-6xl xxxs:text-5xl xxs:text-6xl lg:text-[5.25rem] xl:text-5xl 3xl:text-7xl 6xl:text-8xl text-snow font-extrabold tracking-wide">
          //     <h1>INTO</h1>
          //     <h1>FUTURE</h1>
          //   </div>
          // </Fade>
        )}
      </div>
    </div>
  );
});

export default FullNovaSlide;
