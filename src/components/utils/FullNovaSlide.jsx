import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const FullNovaSlide = memo(({isOpen, sliderValue, setSliderValue }) => {
  const handleRightHalfClick = () => {
    if (!isOpen) {
      setSliderValue(5);
    }
  }
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
          loading="lazy"
          className={`-rotate-[.4deg] pointer-events-none select-none ${
            sliderValue <= 20 ? "scale-x-[1.15] scale-y-[1.24]" : "scale-x-110 scale-y-[1.19]"
          } ${sliderValue <= 20 ? "xxs:scale-x-[1.2] xxs:scale-y-[1.3]" : "xxs:scale-x-[1.15] xxs:scale-y-[1.25]"} ${
            sliderValue <= 20 ? "sm:scale-90" : "sm:scale-[.85]"
          } ${sliderValue <= 20 ? "lg:scale-x-95 lg:scale-y-[1.03]" : "lg:scale-x-90 lg:scale-y-[.98]"} ${
            sliderValue <= 20 ? "xl:scale-x-[.45] xl:scale-y-[.4825]" : "xl:scale-x-[.4] xl:scale-y-[.4325]"
          } ${sliderValue <= 20 ? "4xl:scale-x-50 4xl:scale-y-[.525]" : "4xl:scale-x-[.45] 4xl:scale-y-[.475]"} ${
            sliderValue <= 20 ? " 6xl:scale-x-[.55]  6xl:scale-y-[.58]" : "6xl:scale-x-50 6xl:scale-y-[.53]"
          } absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-transform ${sliderValue <= 20 && "-translate-x-[53%] -translate-y-[52%]"}`}
          src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/full%20bottle%20nova.png"
          alt="Nova Bottle"
        /></Fade>
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
