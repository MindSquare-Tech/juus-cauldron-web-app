import React, { lazy, memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
const JuusVideo = lazy(() => import("../../utils/JuusVideo.jsx"));
const Footer = lazy(() => import("../../utils/Footer.jsx"));
const JuusHeader = lazy(() => import("../../utils/JuusHeader.jsx"));
import { setIsOpen } from "../../../redux/isOpenSlice.js";
const JuusExplosionVideo = lazy(() => import("../../utils/JuusExplosionVideo.jsx"));

const JuusHome = memo(() => {
  const dispatch = useDispatch();
  const [showVideos, setShowVideos] = useState(false);

  useEffect(() => {
    setShowVideos(true);
  }, [])
  // const isOpen = useSelector(state => state.isOpen);

  return (
    <motion.div
      className="relative overflow-x-hidden bg-black scroll-smooth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="">
        <JuusHeader />
      </div>
      <main
        className={`mt-[4.5rem] xl:mt-16 3xl:mt-8 flex flex-col justify-between`}
        onClick={() => dispatch(setIsOpen(false))}
      >
        <div className="">
          {showVideos && <JuusVideo />}
          <div className="flex flex-col 2xl:flex-row 2xl:mt-10 text-white lg:justify-between xl:mt-5">
            <div className="flex flex-col">
              <Fade direction="left" cascade triggerOnce={true}>
              <motion.div
                className="flex font-anton justify-start items-center ml-3 lg:ml-12 3xl:ml-24 4xl:ml-32 5xl:ml-36 6xl:ml-44 3xl:mb-0.5 6xl:mt-20"
              >
                <h1 className="text-[3.75rem] lg:text-8xl 2xl:text-[7.5rem] 4xl:text-9xl 6xl:text-[9rem] mr-0.5 lg:mr-1.5">
                  JUUST
                </h1>
                <div className="flex flex-col justify-start lg:justify-center -mt-0.5">
                  <h2 className="text-[1.75rem] lg:text-[2.625rem] 2xl:text-[3.125rem] 4xl:text-[3.5rem] 6xl:text-[3.875rem]">
                    YOUR
                  </h2>
                  <h2 className="text-[1.75rem] lg:text-[2.625rem] 2xl:text-[3.125rem] 4xl:text-[3.5rem] 6xl:text-[3.875rem] -mt-3.5 lg:-mt-4 4xl:-mt-5">
                    ULTIMATE
                  </h2>
                </div>
              </motion.div>
              <motion.div
                className="flex justify-start items-center ml-3 lg:ml-12 3xl:ml-24 4xl:ml-32 5xl:ml-36 6xl:ml-44 -mt-5 lg:-mt-0 3xl:mt-0.5"
              >
                <h1 className="text-[2.635rem] xxxxs:text-[2.75rem] xxxs:text-[3.1rem] xxs:text-[3.25rem] lg:text-7xl 2xl:text-[6.75rem] 4xl:text-8xl 6xl:text-9xl font-anton mr-0.5 lg:mr-1.5">
                  DRINK
                </h1>
                <div className="flex flex-col h-[3.3rem] lg:h-[4.5rem] xl:h-[4.75rem] 2xl:h-[6.25rem] 3xl:h-[6.5rem] 4xl:h-24 5xl:h-[6rem] 6xl:h-[8rem] items-start justify-evenly lg:justify-between">
                  <h3 className="text-[0.48rem] xxxxs:text-[0.56rem] xxxs:text-[0.57rem] xxs:text-[0.59rem] xsm:text-[0.64rem] lg:text-[1.1rem] xl:text-[1.05rem] 3xl:text-[1.1rem] 4xl:text-[1.15rem] 5xl:text-[1.2rem] 6xl:text-[1.7rem]">PRESENTING PAKISTAN'S</h3>
                  <h3 className="text-[0.48rem] xxxxs:text-[0.56rem] xxxs:text-[0.57rem] xxs:text-[0.59rem] xsm:text-[0.64rem] lg:text-[1.1rem] xl:text-[1.05rem] 3xl:text-[1.1rem] 4xl:text-[1.15rem] 5xl:text-[1.2rem] 6xl:text-[1.7rem]">FIRST EVER ZERO SUGAR ZERO CALORIES LIQUID ENHANCER.</h3>
                  <h3 className="text-[0.48rem] xxxxs:text-[0.56rem] xxxs:text-[0.57rem] xxs:text-[0.59rem] xsm:text-[0.64rem] lg:text-[1.1rem] xl:text-[1.05rem] 3xl:text-[1.1rem] 4xl:text-[1.15rem] 5xl:text-[1.2rem] 6xl:text-[1.7rem]">WITH 9 EXCITING FLAVORS JUUS IS QUICKLY BECOMING</h3>
                </div>
              </motion.div>
              </Fade>
            </div>

            <div className="self-center relative">
              {showVideos && <JuusExplosionVideo />}
            </div>
          </div>
        </div>
        <Link
          className="my-20 sm:my-12 lg:my-16 xl:my-24 3xl:my-36 self-center"
          to={"https://juus.pk/pages/shop"}
        >
          <Fade direction="down" duration={500} delay={150}>
            <button className="select-none cursor-pointer flex items-center font-bold justify-between p-2 w-40 lg:w-56 xl:w-72 h-9 lg:h-11 text-snow text-[0.8125rem] border-2 rounded-3xl hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition xxxs:-mt-8 xsm:-mt-4 3xl:-mt-12 4xl:-mt-16 5xl:-mt-24 ">
              <span className="mx-auto">DISCOVER FLAVORS</span>
            </button>
          </Fade>
        </Link>
        <motion.img
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: 20, damping: 6 }}
          viewport={{ once: true }}
          className=""
          src="https://juusstorage.blob.core.windows.net/creatives/Juus%20Home/home%20page%20banner.jpg"
          alt=""
        />
      </main>
      <div>
        <Footer />
      </div>
    </motion.div>
  );
});

export default JuusHome;
