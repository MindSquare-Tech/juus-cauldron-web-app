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
        className={`my-[66px] relative flex flex-col w-full ${
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
        <div className="flex text-white xl:mt-5">
          <div className="flex flex-col">
            <motion.div
              viewport={{ once: true }}
              transition={{
                type: "tween",
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex font-anton justify-start items-center ml-3 lg:ml-8 3xl:mb-0.5"
            >
              <h1 className="text-[60px] lg:text-8xl 2xl:text-[120px] 4xl:text-9xl 6xl:text-[144px] mr-0.5 lg:mr-1.5">
                FUTURE
              </h1>
              <div className="flex flex-col justify-start lg:justify-center -mt-0.5">
                <h2 className="text-[28px] lg:text-[42px] 2xl:text-[50px] 4xl:text-[56px] 6xl:text-[62px]">
                  IS
                </h2>
                <h2 className="text-[28px] lg:text-[42px] 2xl:text-[50px] 4xl:text-[56px] 6xl:text-[62px] -mt-3.5 lg:-mt-4 4xl:-mt-6">
                  SUGAR
                </h2>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                type: "tween",
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex justify-start items-center ml-3 lg:ml-8 -mt-5 lg:-mt-0 3xl:mt-0.5"
            >
              <h1 className="text-[47px] lg:text-7xl 2xl:text-[108px] 4xl:text-8xl 6xl:text-9xl font-anton mr-0.5 lg:mr-1.5">
                FREE
              </h1>
              <div className="flex flex-col text-[8px] xxxxs:text-[9px] lg:text-sm 4xl:text-base h-[80%] lg:h-full 2xl:h-[94%] items-start justify-evenly lg:justify-between">
                <h3>PRESENTING PAKISTAN'S</h3>
                <h3>FIRST EVER ZERO SUGAR ZERO CALORIES LIQUID ENHANCER.</h3>
                <h3>WITH 9 EXCITING FLAVORS JUUS IS QUICKLY BECOMING</h3>
              </div>
            </motion.div>
            <div>
              <img
                className="-mt-4 scale-x-105 relative z-20"
                src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/center%20color.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Product images and the text */}
        <div className="h-[66vh] flex flex-col justify-between mb-16 relative -mt-5 z-10">
          <div className="flex">
            <div>
              <img
                className="flex-1 h-40 w-[152px] scale-[1.4]"
                src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Cardamom%20bottle.png"
                alt="Cardamom Bottle"
              />
            </div>
            <div className="text-white pr-3 flex-1 flex flex-col text-right justify-start">
              <motion.h1
                viewport={{ once: true }}
                initial={{ x: "100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", delay: 0.1, duration: 0.5 }}
                className="font-anton text-[30px]"
              >
                CARDAMOM
              </motion.h1>
              <Fade delay={600} triggerOnce={true}>
                <h2 className="text-[12.5px]">GOES BEST WITH TEA</h2>
                <p className="text-[7.25px] xsm:text-[8px]">
                  A MATCH MADE IN HEAVEN, A FLAVOR FUSION THAT'S SIMPLY DIVINE
                  TO TASTE.
                </p>
                <p className="text-[7.25px] xsm:text-[8px]">
                  THE AROMATIC ZEST OF CARDAMOM ELEVATES TEA TO NEW HEIGHTS,
                  TOGETHER, THEY CREATES A DELIGHTFUL BREW THAT'S A TRUE
                  CULINARY DELIGHT."
                </p>
              </Fade>
            </div>
          </div>
          <div className="flex">
            <div className="text-white pl-3 flex-1 flex flex-col text-left justify-start">
              <motion.h1
                viewport={{ once: true }}
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", delay: 0.1, duration: 0.5 }}
                className="font-anton text-[30px]"
              >
                VANILLA
              </motion.h1>
              <Fade delay={600} triggerOnce={true}>
                <h2 className="text-[12.5px]">GOES BEST WITH COFFEE</h2>
                <p className="text-[7.25px] xsm:text-[8px]">
                  VANILLA'S SWEET, VELVETY SOFTNESS COMPLEMENTS COFFEE'S RICH,
                  BOLD FLAIR, A PERFECT PAIRING THAT AWAKENS SENSES AND BANISHES
                  ALL CARE.
                </p>
                <p className="text-[7.25px] xsm:text-[8px]">
                  THE CREAMY ESSENCE OF VANILLA HARMONIZES WITH COFFEE'S DEEP,
                  DARK TONE, TOGETHER, THEY CREATE A DELIGHTFUL BLEND THAT'S A
                  TRUE FLAVOR THRONE."
                </p>
              </Fade>
            </div>
            <div>
              <img
                className="flex-1 w-44 h-40 scale-[1.4]"
                src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/vanilla%20bottle%20(1).png"
                alt="Vanilla Bottle"
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <img
                className="flex-1 w-[170px] h-40 scale-[1.4]"
                src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/orignal%20bottle%20f.png"
                alt="Original Bottle"
              />
            </div>
            <div className="text-white pr-3 flex-1 flex flex-col text-right justify-end">
              <motion.h1
                viewport={{ once: true }}
                initial={{ x: "100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", delay: 0.1, duration: 0.5 }}
                className="font-anton text-[30px]"
              >
                ORIGINAL
              </motion.h1>
              <Fade delay={600} triggerOnce={true}>
                <h2 className="text-[12.5px]">SWEETENS EVERYTHING</h2>
                <p className="text-[7.25px] xsm:text-[8px]">
                  SWEETNESS WITHOUT THE GUILT, ZERO SUGAR, ZERO CALORIES, A
                  HEALTHY SIGN.
                </p>
                <p className="text-[7.25px] xsm:text-[8px]">
                  INDULGE IN THE SWEETNESS, WITHOUT ANY FLAVOR THE WEIGHT, A
                  SWEET DELIGHT, THAT'S HEALTHY AND GREAT!"
                </p>
              </Fade>
            </div>
          </div>
          {/* left and right placed wave */}
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
          <Fade direction="down" duration={1000} delay={500}>
            <button className="select-none cursor-pointer flex items-center justify-between p-2 w-40 lg:w-56 xl:w-72 h-7 lg:h-11 text-white text-sm lg border-2 rounded-xl hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition shadow-primary-shadow">
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
