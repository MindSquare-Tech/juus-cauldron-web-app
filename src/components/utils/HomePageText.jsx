import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

function HomePageText({ sliderValue, setSliderValue}) {
  const [previousSliderValue, setPreviousSliderValue] = useState(50);
  const [leftPosition, setLeftPosition] = useState(0);

  useEffect(() => {
    if (sliderValue === 50) {
      setLeftPosition(0);
      setPreviousSliderValue(sliderValue);
    }
    if (sliderValue >= 80) {
      setLeftPosition(0);
      setPreviousSliderValue(sliderValue);
    }
    else if (sliderValue <= 20) {
      setLeftPosition(0);
      setPreviousSliderValue(sliderValue);
    }
    if (sliderValue > 50 && sliderValue < 80) {
      if (sliderValue > previousSliderValue) {
        setLeftPosition((prev) => prev + 1);
      }
      else if (sliderValue < previousSliderValue) {
        setLeftPosition((prev) => prev - 1);
      }
      setPreviousSliderValue(sliderValue);
    }
    else if (sliderValue < 50 && sliderValue > 20) {
      if (sliderValue > previousSliderValue) {
        setLeftPosition((prev) => prev + 1);
      }
      else if (sliderValue < previousSliderValue) {
        setLeftPosition((prev) => prev - 1);
      }
      setPreviousSliderValue(sliderValue);
    }
    
  }, [sliderValue])

  return (
    <div 
     style={{left: `${leftPosition}px`}}
     className='absolute z-10 pointer-events-none h-screen w-full text-white font-anton'>
        {sliderValue > 20 && sliderValue < 80 && <Fade triggerOnce={true}>
        <div className='text-5xl'>
            <div className='text-end font-anton pointer-events-none select-none absolute flex flex-col justify-center items-end bottom-[17%] xxxs:bottom-[13%] xxs:bottom-[16%] lg:bottom-[12.67%] xl:bottom-[13%] 3xl:bottom-[12%] 4xl:bottom-[15%] 6xl:bottom-[8%] left-[14.75%] xxxxs:left-[10%] xxxs:left-[19%] xxs:left-[12.5%] xsm:left-[15.66%] sm:left-[21%] lg:left-[24%] xl:left-[37.5%] 2xl:left-[38%] 3xl:left-[39%] 4xl:left-[38.85%] 5xl:left-[39.5%] 6xl:left-[39.15%] text-5xl xxxxs:text-6xl xxxs:text-5xl xxs:text-6xl lg:text-[5.25rem] xl:text-5xl 3xl:text-[4rem] 4xl:text-[4.25rem] 6xl:text-[5.5rem] text-snow font-semibold tracking-wide'>
                <h1>DELVE</h1>
                <h1>THE</h1>
            </div>
            <div className='font-anton pointer-events-none select-none absolute flex flex-col justify-center items-start bottom-[14%] xxxs:bottom-[10.6%] xxs:bottom-[12.5%] xsm:bottom-[13.33%] lg:bottom-[9.67%] xl:bottom-[10%] 3xl:bottom-[9%] 4xl:bottom-[12%] 6xl:bottom-[5%] right-[8.25%] xxxxs:right-[2.25%] xxxs:right-[13%] xxs:right-[5.25%] xsm:right-[9.34%] sm:right-[15%] lg:right-[19%] xl:right-[35%] 2xl:right-[36%] 3xl:right-[36.75%] 4xl:right-[36.65%] 5xl:right-[37.5%] 6xl:right-[37%] text-5xl xxxxs:text-6xl xxxs:text-5xl xxs:text-6xl lg:text-[5.25rem] xl:text-5xl 3xl:text-[4rem] 4xl:text-[4.25rem] 6xl:text-[5.5rem] text-snow font-extrabold tracking-wide'>
                <h1>INTO</h1>
                <h1>FUTURE</h1>
            </div>
        </div>
        </Fade>}
        {sliderValue <= 20 && <motion.div
            initial={{ x: 900, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
                  <span className='font-jost'>DISCOVER MORE</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>}
          {sliderValue >= 80 && <motion.div
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
                  <span className='font-jost'>DISCOVER MORE</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>}
    </div>
  )
}

export default HomePageText