import React, { memo, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import classNames from 'classnames';

const FullJuusSlide = memo(({ sliderValue, setSliderValue }) => {
  const scaleClass = classNames({
    'scale-[1.1]': sliderValue < 55,
    'scale-[1.12]': sliderValue >= 55 && sliderValue < 60,
    'scale-[1.14]': sliderValue >= 60 && sliderValue < 65,
    'scale-[1.16]': sliderValue >= 65 && sliderValue < 70,
    'scale-[1.18]': sliderValue >= 70 && sliderValue < 75,
    'scale-[1.2]': sliderValue >= 75 && sliderValue < 80,
    'scale-[1.22]': sliderValue >= 80
  });
  const juusImgRef = useRef(null);
  
  return (
    <div className="relative h-auto">
      <div
        style={{
          background: `radial-gradient(circle, rgba(247,248,203,1) 10%, rgba(50,162,26,1) 85%)`,
        }}
        onClick={() => setSliderValue(95)}
        className={` flex flex-col justify-evenly sm:justify-evenly lg:justify-around 2xl:justify-evenly items-center relative overflow-hidden h-screen bg-cover bg-center xl:bg-bottom`}
      >
        <Fade triggerOnce={true}>
          <img
            ref={juusImgRef}
            loading="lazy"
            className={`pointer-events-none absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 select-none transition-transform ${classNames('xxxs:scale-100', scaleClass, {
              'xxxs:scale-[1.02]': sliderValue >= 55 && sliderValue < 60,
              'xxxs:scale-[1.04]': sliderValue >= 60 && sliderValue < 65,
              'xxxs:scale-[1.06]': sliderValue >= 65 && sliderValue < 70,
              'xxxs:scale-[1.08]': sliderValue >= 70 && sliderValue < 75,
              'xxxs:scale-[1.1]': sliderValue >= 75 && sliderValue < 80,
              'xxxs:scale-[1.12]': sliderValue >= 80,
            }, {
              'lg:scale-[.7]': sliderValue < 55,
              'lg:scale-[.72]': sliderValue >= 55 && sliderValue < 60,
              'lg:scale-[.74]': sliderValue >= 60 && sliderValue < 65,
              'lg:scale-[.76]': sliderValue >= 65 && sliderValue < 70,
              'lg:scale-[.78]': sliderValue >= 70 && sliderValue < 75,
              'lg:scale-[.8]': sliderValue >= 75 && sliderValue < 80,
              'lg:scale-[.82]': sliderValue >= 80,
            }, {
              'xl:scale-[.35]': sliderValue < 55,
              'xl:scale-[.37]': sliderValue >= 55 && sliderValue < 60,
              'xl:scale-[.39]': sliderValue >= 60 && sliderValue < 65,
              'xl:scale-[.41]': sliderValue >= 65 && sliderValue < 70,
              'xl:scale-[.43]': sliderValue >= 70 && sliderValue < 75,
              'xl:scale-[.45]': sliderValue >= 75 && sliderValue < 80,
              'xl:scale-[.47]': sliderValue >= 80,
            }, {
              '3xl:scale-[.3]': sliderValue < 55,
              '3xl:scale-[.315]': sliderValue >= 55 && sliderValue < 60,
              '3xl:scale-[.33]': sliderValue >= 60 && sliderValue < 65,
              '3xl:scale-[.345]': sliderValue >= 65 && sliderValue < 70,
              '3xl:scale-[.36]': sliderValue >= 70 && sliderValue < 75,
              '3xl:scale-[.375]': sliderValue >= 75 && sliderValue < 80,
              '3xl:scale-[.39]': sliderValue >= 80,
            }, {
              '6xl:scale-[.4]': sliderValue < 55,
              '6xl:scale-[.415]': sliderValue >= 55 && sliderValue < 60,
              '6xl:scale-[.43]': sliderValue >= 60 && sliderValue < 65,
              '6xl:scale-[.445]': sliderValue >= 65 && sliderValue < 70,
              '6xl:scale-[.46]': sliderValue >= 70 && sliderValue < 75,
              '6xl:scale-[.475]': sliderValue >= 75 && sliderValue < 80,
              '6xl:scale-[.49]': sliderValue >= 80,
            })}`}
            src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/greenAppleBottleSmall.png"
            alt="Juus Bottle"
          />
        </Fade>
        {/* {sliderValue >= 80 ? (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-9/12 xl:w-1/2 3xl:w-[45%] 6xl:w-5/12 absolute flex flex-col bottom-[15%] xxxs:bottom-[8%] xxs:bottom-[14%] xsm:bottom-[9%] lg:bottom-[6%] xl:bottom-0 6xl:bottom-[1%] left-[4%] lg:left-[12%] xl:left-[25%] text-snow"
          >
            <div className="font-anton flex items-center">
              <h1 className="text-7xl xsm:text-[5.25rem] lg:text-[6.75rem] xl:text-[5.25rem] 3xl:text-8xl 4xl:text-[6.75rem] 6xl:text-[7.5rem]">
                JUUST
              </h1>
              <div className="ml-1 lg:ml-2 lg:-mt-2 xl:-mt-0 3xl:-mt-2 4xl:-mt-3 6xl:-mt-4 flex flex-col justify-between lg:justify-center items-start ">
                <h1 className="text-3xl xsm:text-[2.5rem] lg:text-[3.125rem] xl:text-[2.5rem] 3xl:text-[2.875rem] 4xl:text-[3.125rem] 6xl:text-[3.625rem] xsm:leading-none lg:leading-[1.15] xl:leading-none 3xl:leading-tight">
                  YOUR
                </h1>
                <h1 className="text-3xl xsm:text-[2.5rem] lg:text-[3.125rem] xl:text-[2.5rem] 3xl:text-[2.875rem] 4xl:text-[3.125rem] 6xl:text-[3.625rem]">
                  ULTIMATE
                </h1>
              </div>
            </div>
            <div className="flex items-center lg:justify-between">
              <h1 className="font-anton text-7xl xsm:text-[5.25rem] lg:text-[6.75rem] xl:text-[5.25rem] 3xl:text-8xl 4xl:text-[6.75rem] 6xl:text-[7.5rem]">
                DRINK
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
          //   <div className="font-anton pointer-events-none select-none absolute flex flex-col justify-center items-end bottom-[15%] xxxs:bottom-[12%] xxs:bottom-[14%] lg:bottom-[9.67%] xl:bottom-[11%] 3xl:bottom-[7%] 6xl:bottom-[3%] left-[13.5%] xxxxs:left-[10%] xxxs:left-[19%] xxs:left-[12.5%] xsm:left-[16%] sm:left-[21%] lg:left-[24%] xl:left-[37.5%] 2xl:left-[38%] 3xl:left-[37.5%] 4xl:left-[38.1%] 5xl:left-[39%] 6xl:left-[38%] text-5xl xxxxs:text-6xl xxxs:text-5xl xxs:text-6xl lg:text-[5.25rem] xl:text-5xl 3xl:text-7xl 6xl:text-8xl text-snow font-semibold tracking-wide">
          //     <h1>DELVE</h1>
          //     <h1>THE</h1>
          //   </div>
          // </Fade>
        )} */}
      </div>
    </div>
  );
});

export default FullJuusSlide;
