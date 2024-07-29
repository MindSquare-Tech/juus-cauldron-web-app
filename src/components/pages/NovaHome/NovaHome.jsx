import React, { lazy, memo, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
const Footer = lazy(() => import("../../utils/Footer"));
const NovaHeader = lazy(() => import("../../utils/NovaHeader"));

const NovaHome = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="relative overflow-x-hidden bg-nova-primary scroll-smooth lg:h-auto overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <NovaHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <main
        className={`my-[4.125rem] relative flex flex-col w-full ${
          isOpen && "brightness-95"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="">
          <img
            className="6xl:w-full"
            src="https://juusstorage.blob.core.windows.net/creatives/Nova Home/nova main banner.jpg"
            alt=""
          />
        </div>
        <div className="flex mb-12 xxs:mb-16 lg:mb-32 3xl:mb-44 5xl:mb-52 6xl:mb-60 text-white xl:mt-5">
          <div className="flex flex-col">
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
              className="flex font-anton justify-start items-center ml-3 lg:ml-8 3xl:ml-16 4xl:ml-24 5xl:ml-28 lg:mt-5 3xl:mb-0.5"
            >
              <h1 className="text-[3.75rem] lg:text-8xl 2xl:text-[7.5rem] 4xl:text-9xl 6xl:text-[9rem] mr-0.5 lg:mr-1.5">
                FUTURE
              </h1>
              <div className="flex flex-col justify-start lg:justify-center -mt-0.5">
                <h2 className="text-[1.75rem] lg:text-[2.626rem] 2xl:text-[3.125rem] 4xl:text-[3.5rem] 6xl:text-[3.875rem]">
                  IS
                </h2>
                <h2 className="text-[1.75rem] lg:text-[2.626rem] 2xl:text-[3.125rem] 4xl:text-[3.5rem] 6xl:text-[3.875rem] -mt-3.5 lg:-mt-4 4xl:-mt-6">
                  SUGAR
                </h2>
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
              className="flex justify-start items-center ml-3 lg:ml-8 3xl:ml-16 4xl:ml-24 5xl:ml-28 -mt-5 lg:-mt-0 3xl:mt-3"
            >
              <h1 className="text-[3rem] xsm:text-[3.45rem] lg:text-[5.5rem] 2xl:text-[6.75rem] 3xl:text-[7rem] 4xl:text-[7.2rem] 6xl:text-9xl font-anton mr-0.5 lg:mr-1.5 lg:-mt-5">
                FREE
              </h1>
              <div className="flex flex-col h-[75%] 2xl:h-[94%] 3xl:h-[90%] 4xl:h-full items-start justify-evenly lg:justify-between 3xl:justify-evenly lg:-mt-5">
                <h3 className="text-[0.52rem] xxxxs:text-[0.59rem] xxxs:text-[0.62rem] xxs:text-[0.65rem] xsm:text-[0.71rem] lg:text-[1.25rem] 3xl:text-[1.45rem] 4xl:text-[1.5rem]">PRESENTING PAKISTAN'S</h3>
                <h3 className="text-[0.52rem] xxxxs:text-[0.59rem] xxxs:text-[0.62rem] xxs:text-[0.65rem] xsm:text-[0.71rem] lg:text-[1.25rem] 3xl:text-[1.45rem] 4xl:text-[1.5rem]">FIRST EVER ZERO SUGAR ZERO CALORIES LIQUID ENHANCER.</h3>
                <h3 className="text-[0.52rem] xxxxs:text-[0.59rem] xxxs:text-[0.62rem] xxs:text-[0.65rem] xsm:text-[0.71rem] lg:text-[1.25rem] 3xl:text-[1.45rem] 4xl:text-[1.5rem]">WITH 9 EXCITING FLAVORS JUUS IS QUICKLY BECOMING</h3>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Product images and the text */}
        <div className="flex flex-col justify-between mb-16 relative -mt-5 3xl:mt-12 z-10">
          <div className="flex w-full">
            <div className="relative z-50 w-3/5 xsm:w-[45%] lg:w-1/2">
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale:
                    (window.innerWidth > 1919 && 0.7) ||
                    (window.innerWidth > 1535 && 0.8) ||
                    (window.innerWidth > 1439 && 0.85) ||
                    (window.innerWidth > 1279 && 0.85) ||
                    (window.innerWidth > 899 && 0.95) ||
                    (window.innerWidth > 767 && 1.05) ||
                    (window.innerWidth > 429 && 1.25) ||
                    (window.innerWidth > 409 && 1.25) ||
                    1.05,
                }}
                transition={{ type: "tween", delay: 1.1, duration: 0.5 }}
                className="flex-1 z-50 relative"
                src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Cardamom%20bottle.png"
                alt="Cardamom Bottle"
              />
            </div>
            <div className="text-white pr-4 xxxxs:pr-5 xxs:pr-6 xsm:pr-7 lg:pr-14 xl:pr-16 3xl:pr-24 4xl:pr-28 6xl:pr-36 flex-1 flex flex-col text-right justify-start w-1/2">
              <motion.h1
                viewport={{ once: true }}
                initial={{ x: "100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", delay: 0.2, duration: 0.5 }}
                className="font-anton text-[1.875rem] lg:text-[3.75rem] 3xl:text-[6.25rem] 6xl:text-[8rem]"
              >
                CARDAMOM
              </motion.h1>
              <Fade delay={600} triggerOnce={true}>
                <h2 className="text-[0.78125rem] lg:text-[1.5rem] 3xl:text-[2.23em]  4xl:text-[2.7rem] 6xl:text-[3.7em] ">
                  GOES BEST WITH TEA
                </h2>
                <p className="text-[0.55rem] xxxxs:text-[0.6rem] xsm:text-[0.65rem] lg:text-[1rem] 3xl:text-[1.65rem] 4xl:text-[1.9rem] 6xl:text-[2.2rem]">
                  A MATCH MADE IN HEAVEN, A FLAVOR FUSION THAT'S SIMPLY DIVINE
                  TO TASTE.
                </p>
                <p className="text-[0.55rem] xxxxs:text-[0.6rem] xsm:text-[0.65rem] lg:text-[1rem] 3xl:text-[1.65rem] 4xl:text-[1.9rem] 6xl:text-[2.2rem]">
                  THE AROMATIC ZEST OF CARDAMOM ELEVATES TEA TO NEW HEIGHTS,
                  TOGETHER, THEY CREATES A DELIGHTFUL BREW THAT'S A TRUE
                  CULINARY DELIGHT."
                </p>
              </Fade>
            </div>
          </div>
          <div className="flex my-20 lg:my-10 4xl:my-0 w-full">
            <div className="text-white pl-4 xxxxs:pl-5 xxs:pl-6 xsm:pl-7 lg:pl-16 xl:pl-20 3xl:pl-28 4xl:pl-32 6xl:pl-40 flex-1 flex flex-col text-left justify-start">
              <motion.h1
                viewport={{ once: true }}
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", delay: 0.2, duration: 0.5 }}
                className="font-anton text-[1.875rem] lg:text-[3.75rem] 3xl:text-[6.25rem] 6xl:text-[8rem]"
              >
                VANILLA
              </motion.h1>
              <Fade delay={600} triggerOnce={true}>
                <h2 className="text-[0.78125rem] lg:text-[1.5rem] 3xl:text-[2.3rem] 4xl:text-[2.7rem]  6xl:text-[3.7rem]">
                  GOES BEST WITH COFFEE
                </h2>
                <p className="text-[0.55rem] xxxxs:text-[0.6rem] xsm:text-[0.65rem] lg:text-[1rem] 3xl:text-[1.65rem] 4xl:text-[1.9rem] 6xl:text-[2.2rem]">
                  VANILLA'S SWEET, VELVETY SOFTNESS COMPLEMENTS COFFEE'S RICH,
                  BOLD FLAIR, A PERFECT PAIRING THAT AWAKENS SENSES AND BANISHES
                  ALL CARE.
                </p>
                <p className="text-[0.55rem] xxxxs:text-[0.6rem] xsm:text-[0.65rem] lg:text-[1rem] 3xl:text-[1.65rem] 4xl:text-[1.9rem] 6xl:text-[2.2rem]">
                  THE CREAMY ESSENCE OF VANILLA HARMONIZES WITH COFFEE'S DEEP,
                  DARK TONE, TOGETHER, THEY CREATE A DELIGHTFUL BLEND THAT'S A
                  TRUE FLAVOR THRONE."
                </p>
              </Fade>
            </div>
            <div className="w-3/5 xsm:w-[45%] lg:w-1/2">
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, x: "100%" }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale:
                    (window.innerWidth > 1919 && 0.65) ||
                    (window.innerWidth > 1535 && 0.75) ||
                    (window.innerWidth > 1439 && 0.8) ||
                    (window.innerWidth > 1279 && 0.8) ||
                    (window.innerWidth > 899 && 0.9) ||
                    (window.innerWidth > 767 && 1) ||
                    (window.innerWidth > 429 && 1.15) ||
                    (window.innerWidth > 389 && 1.05) ||
                    0.95,
                }}
                transition={{ type: "tween", delay: 1.1, duration: 0.5 }}
                className="flex-1 pr-3"
                src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/final%20vnl%20(1).png"
                alt="Vanilla Bottle"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-3/5 xsm:w-[45%] lg:w-1/2">
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale:
                    (window.innerWidth > 1919 && 0.65) ||
                    (window.innerWidth > 1535 && 0.75) ||
                    (window.innerWidth > 1439 && 0.8) ||
                    (window.innerWidth > 1279 && 0.8) ||
                    (window.innerWidth > 899 && 0.9) ||
                    (window.innerWidth > 767 && 1) ||
                    (window.innerWidth > 429 && 1.15) ||
                    (window.innerWidth > 389 && 1.05) ||
                    0.95,
                }}
                transition={{ type: "tween", delay: 1.1, duration: 0.5 }}
                className="flex-1 pl-3 xxxxs:pl-4"
                src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/final%20org.png"
                alt="Original Bottle"
              />
            </div>
            <div className="text-white pr-3 lg:pr-8 xl:pr-16 3xl:pr-16 4xl:pr-24 5xl:pr-28 6xl:pr-32 flex-1 flex flex-col text-right justify-end lg:justify-center">
              <motion.h1
                viewport={{ once: true }}
                initial={{ x: "100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", delay: 0.2, duration: 0.5 }}
                className="font-anton text-[1.875rem] lg:text-[3.75rem] 3xl:text-[6.25rem] 6xl:text-[8rem]"
              >
                ORIGINAL
              </motion.h1>
              <Fade delay={600} triggerOnce={true}>
                <h2 className="text-[0.78125rem] lg:text-[1.5rem] 3xl:text-[2.3rem] 4xl:text-[2.7rem]  6xl:text-[3.7rem]">
                  SWEETENS EVERYTHING
                </h2>
                <p className="text-[0.55rem] xxxxs:text-[0.6rem] xsm:text-[0.65rem] lg:text-[1rem] 3xl:text-[1.65rem] 4xl:text-[1.9rem] 6xl:text-[2.2rem]">
                  SWEETNESS WITHOUT THE GUILT, ZERO SUGAR, ZERO CALORIES, A
                  HEALTHY SIGN.
                </p>
                <p className="text-[0.55rem] xxxxs:text-[0.6rem] xsm:text-[0.65rem] lg:text-[1rem] 3xl:text-[1.65rem] 4xl:text-[1.9rem] 6xl:text-[2.2rem]">
                  INDULGE IN THE SWEETNESS, WITHOUT ANY FLAVOR THE WEIGHT, A
                  SWEET DELIGHT, THAT'S HEALTHY AND GREAT!"
                </p>
              </Fade>
            </div>
          </div>
          {/* upper doodle and right and left placed wave */}

          <img
            className="absolute top-0 -translate-y-2/3 scale-x-105 z-20"
            src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/center%20color.png"
            alt=""
          />

          <img
            className="absolute z-0 opacity-40 -rotate-90 top-0 left-0 -translate-x-[40%]"
            src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Doodle%20art.png"
            alt="Upper doodle"
          />
          <img
            className="absolute rotate-[88deg] scale-y-125 translate-x-1/2 -right-2"
            src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/center%20color.png"
            alt=""
          />
          <img
            className="absolute -rotate-[95deg] scale-y-150 top-[40%] -translate-x-1/2 -left-3.5"
            src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/center%20color.png"
            alt=""
          />
          <img
            className="pointer-events-none absolute -bottom-60 translate-y-3/4 xxxxs:translate-y-[70.5%] xxxs:translate-y-[69%] xxs:translate-y-[67.5%] xsm:translate-y-[65.3%] lg:translate-y-[69.7%] xl:translate-y-[63.75%] 3xl:translate-y-[51%] 4xl:translate-y-[50.25%] 5xl:translate-y-[49.1%] 6xl:translate-y-[44%]"
            src="https://juusstorage.blob.core.windows.net/creatives/Nova Home/brush.png"
            alt="ending gradient"
          />
        </div>
        {/* <Fade direction="up" delay={1000} triggerOnce={true}> */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 33, damping: 6 }}
          viewport={{ once: true }}
        >
          <img
            className="relative z-50 mt-10 3xl:mt-0 6xl:-mt-10 xl:scale-[.85] 3xl:scale-75 4xl:scale-[.7] 6xl:scale-[.6]"
            src="https://juusstorage.blob.core.windows.net/creatives/Nova Home/calories.png"
            alt=""
          />
        </motion.div>
        {/* </Fade> */}
        <div
          className={`${
            isOpen ? "hidden" : "absolute"
          } pointer-events-none rotate-90 -bottom-5 -right-32`}
        >
          <img
            className={`-z-50 opacity-40`}
            src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Doodle%20art.png"
            alt=""
          />
        </div>
        <Link
          className="self-center mt-36 lg:mt-60"
          to={"https://juus.pk/pages/shop"}
        >
          <Fade direction="down" duration={500} delay={150}>
            <button className="select-none cursor-pointer flex items-center justify-between p-2 w-40 lg:w-56 xl:w-72 h-7 lg:h-11 text-white text-sm lg border-2 rounded-xl hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition shadow-primary-shadow relative z-20">
              <span className="mx-auto">DISCOVER FLAVORS</span>
            </button>
          </Fade>
        </Link>
      </main>
      <div>
        <Footer theme="nova" />
      </div>
    </motion.div>
  );
});

export default NovaHome;
