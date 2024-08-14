import React, { lazy, memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setIsOpen } from "../../../redux/isOpenSlice.js";
const JuusHeader = lazy(() => import("../../utils/JuusHeader.jsx"));
const JuusVideo = lazy(() => import("../../utils/JuusVideo.jsx"));
const JuusExplosionVideo = lazy(() =>
  import("../../utils/JuusExplosionVideo.jsx")
);
const JuusClosingBanners = lazy(() =>
  import("../../utils/JuusClosingBanners.jsx")
);
const Footerv3 = lazy(() => import("../../utils/Footerv3.jsx"));

const JuusHome = memo(() => {
  const dispatch = useDispatch();
  const [showVideos, setShowVideos] = useState(false);

  useEffect(() => {
    setShowVideos(true);
  }, []);
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
            <div className="flex flex-col px-3 lg:px-12 3xl:pl-24 4xl:pl-32 5xl:pl-36 3xl:pr-0 3xl:w-1/2">
              <motion.div
                viewport={{ once: true }}
                transition={{
                  type: "tween",
                  delay: 0.3,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="flex font-anton"
              >
                <h1 className="text-[3.75rem] lg:text-[5.75rem] 6xl:text-[7rem] leading-none mr-1 6xl:mr-2">
                  JUUST
                </h1>
                <div className="flex flex-col xxxxs:relative xxxxs:translate-y-0.5 xsm:translate-y-0 lg:translate-y-1">
                  <h1 className="text-[1.875rem] lg:text-[2.875rem] 6xl:text-[3.25rem] leading-none">
                    YOUR
                  </h1>
                  <h1 className="text-[1.875rem] lg:text-[2.875rem] 6xl:text-[3.25rem] leading-none">
                    ULTIMATE
                  </h1>
                </div>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                transition={{
                  delay: 0.8,
                  type: "tween",
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="flex w-full items-center mt-1"
              >
                <h1 className="font-anton text-[2.55rem] lg:text-[4rem] 6xl:text-[5rem] leading-none mr-2 6xl:mr-3">
                  DRINK
                </h1>
                <div className="flex flex-col">
                  <p className="text-[0.6rem] xxxxs:text-[0.69rem] xxxs:text-[0.72rem] xxs:text-[0.75rem] xsm:text-[0.8125rem] lg:text-[1rem] 6xl:text-[1.5rem] italic">
                    Step into a world of indulgence with Juus, Pakistan’s
                  </p>
                  <p className="text-[0.6rem] xxxxs:text-[0.69rem] xxxs:text-[0.72rem] xxs:text-[0.75rem] xsm:text-[0.8125rem] lg:text-[1rem] 6xl:text-[1.5rem] italic">
                    premier Zero Sugar, Zero Calorie liquid enhancer!
                  </p>
                </div>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                transition={{
                  delay: 1.6,
                  duration: 0.5,
                  ease: [0.37, 0, 0.63, 1],
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-3 3xl:mt-5"
              >
                <p className="text-[0.6rem] xxxxs:text-[0.69rem] xxxs:text-[0.72rem] xxs:text-[0.75rem] xsm:text-[0.8125rem] lg:text-[1rem] 6xl:text-[1.5rem]">
                  Available in 9 exquisite flavors in a chic, pocket-sized
                  bottle, each serving delivers a burst of delight. Juus is your
                  ultimate companion for a glamorous, guilt-free flavor
                  experience wherever you go!
                </p>
              </motion.div>
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
        <JuusClosingBanners />
        {/* <motion.img
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: 20, damping: 6 }}
          viewport={{ once: true }}
          className=""
          src="https://juusstorage.blob.core.windows.net/creatives/Juus%20Home/home%20page%20banner.jpg"
          alt=""
        /> */}
      </main>
      <div>
        <Footerv3 />
      </div>
    </motion.div>
  );
});

export default JuusHome;
