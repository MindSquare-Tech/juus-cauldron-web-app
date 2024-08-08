import React, { lazy, memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
const JuusVideo = lazy(() => import("../../utils/JuusVideo.jsx"));
const Footer = lazy(() => import("../../utils/Footer.jsx"));
const JuusHeader = lazy(() => import("../../utils/JuusHeader.jsx"));
import { setIsOpen } from "../../../redux/isOpenSlice.js";
import Footerv2 from "../../utils/Footerv2.jsx";
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
          <div className="flex flex-col 3xl:w-full 2xl:flex-row 2xl:mt-10 text-white lg:justify-between xl:mt-5">
            <div className="flex flex-col 3xl:w-full">
              <Fade direction="left" cascade triggerOnce={true}>
              <motion.div
                className="flex font-anton justify-start items-center ml-3 lg:ml-12 3xl:ml-24 4xl:ml-32 5xl:ml-36 6xl:ml-44"
              >
                <h1 className="select-text text-6xl lg:text-8xl xl:text-9xl mr-1 xxs:mr-1.5">
                  JUUST
                </h1>
                <div className="flex flex-col justify-center">
                  <h2 className="select-text text-[1.75rem] lg:text-[2.5rem] xl:text-[3.4rem] -mb-1.5">
                    YOUR
                  </h2>
                  <h2 className="select-text text-[1.75rem] lg:text-[2.5rem] xl:text-[3.4rem] -mt-1.5 xl:-mt-3">
                    ULTIMATE
                  </h2>
                </div>
              </motion.div>
              <motion.div
                className="flex justify-start items-center ml-3 lg:ml-12 3xl:ml-24 4xl:ml-32 5xl:ml-36 6xl:ml-44 -mt-2 xl:-mt-7 3xl:-mt-5"
              >
                <h1 className="select-text text-[2.55rem] xxxxs:text-[2.75rem] xsm:text-[2.85rem] lg:text-[5rem] xl:text-[6.5rem] font-anton mr-1 xxs:mr-1.5 lg:mr-3">
                  DRINK
                </h1>
                <div className="flex flex-col justify-between xl:justify-center h-[2.65rem] xxxxs:h-[2.85rem] xxs:h-[2.9rem] xsm:h-[3rem] lg:h-[4.5rem] xl:h-20 text-[0.5rem] xxxxs:text-[0.55rem] xxxs:text-[0.59rem] xxs:text-[0.62rem] xsm:text-[0.65rem] lg:text-[1.125rem] xl:text-[1.4rem] 5xl:text-[1.5rem] lg:-mt-2 xl:-mt-0">
                  <h3 className="select-text">Step into a world of indulgence with Juus, Pakistan’s premier Zero Sugar, Zero Calorie liquid enhancer!</h3>
                  <h3 className="select-text 3xl:my-1 5xl:my-0"> Available in 9 exquisite flavors in a chic, pocket-sized bottle, each serving delivers a burst of delight.</h3>
                  <h3 className="select-text">Juus is your ultimate companion for a glamorous, guilt-free flavor experience wherever you go!</h3>
                </div>
              </motion.div>
              </Fade>
            </div>

            <div className="self-center relative 3xl:w-2/5">
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
        <Footerv2 />
      </div>
    </motion.div>
  );
});

export default JuusHome;
