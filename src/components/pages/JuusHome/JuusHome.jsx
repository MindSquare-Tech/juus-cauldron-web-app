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
        className={`mt-[72px] xl:mt-16 3xl:mt-8 flex flex-col justify-between`}
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
                <h1 className="text-[60px] lg:text-8xl 2xl:text-[120px] 4xl:text-9xl 6xl:text-[144px] mr-0.5 lg:mr-1.5">
                  FUTURE
                </h1>
                <div className="flex flex-col justify-start lg:justify-center -mt-0.5">
                  <h2 className="text-[28px] lg:text-[42px] 2xl:text-[50px] 4xl:text-[56px] 6xl:text-[62px]">
                    IS
                  </h2>
                  <h2 className="text-[28px] lg:text-[42px] 2xl:text-[50px] 4xl:text-[56px] 6xl:text-[62px] -mt-3.5 lg:-mt-4 4xl:-mt-5">
                    SUGAR
                  </h2>
                </div>
              </motion.div>
              <motion.div
                className="flex justify-start items-center ml-3 lg:ml-12 3xl:ml-24 4xl:ml-32 5xl:ml-36 6xl:ml-44 -mt-5 lg:-mt-0 3xl:mt-0.5"
              >
                <h1 className="text-[47px] lg:text-7xl 2xl:text-[108px] 4xl:text-8xl 6xl:text-9xl font-anton mr-0.5 lg:mr-1.5">
                  FREE
                </h1>
                <div className="flex flex-col text-[8px] xxxxs:text-[9px] lg:text-sm 4xl:text-base h-[60px] lg:h-[72px] 2xl:h-[100px] 4xl:h-24 5xl:h-[92px] 6xl:h-[120px] items-start justify-evenly lg:justify-between">
                  <h3>PRESENTING PAKISTAN'S</h3>
                  <h3>FIRST EVER ZERO SUGAR ZERO CALORIES LIQUID ENHANCER.</h3>
                  <h3>WITH 9 EXCITING FLAVORS JUUS IS QUICKLY BECOMING</h3>
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
          <Fade direction="down" duration={1000} delay={500}>
            <button className="select-none cursor-pointer flex items-center font-bold justify-between p-2 w-40 lg:w-56 xl:w-72 h-9 lg:h-11 text-snow text-[13px] border-2 rounded-3xl hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition">
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
