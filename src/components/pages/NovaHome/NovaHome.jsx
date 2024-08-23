import React, { lazy, memo, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
const NovaHeader = lazy(() => import("../../utils/NovaHeader"));
const Footerv3 = lazy(() => import("../../utils/Footerv3.jsx"));

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
            loading="lazy"
            className="6xl:w-full"
            src="https://juusstorage.blob.core.windows.net/creatives/Nova Home/nova main banner.jpg"
            alt=""
          />
        </div>
        <div className="flex mb-12 xxs:mb-16 lg:mb-32 3xl:mb-44 5xl:mb-52 6xl:mb-60 text-white xl:mt-5">
          <div className="flex flex-col lg:mt-5 px-3 lg:px-12 xl:pr-28 3xl:pr-96 4xl:pr-[35rem] 3xl:pl-24 4xl:pl-32">
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
              className="flex font-anton mt-2.5"
            >
              <h1 className="text-[3.75rem] lg:text-[5.75rem] 6xl:text-[7rem] leading-none mr-1 6xl:mr-2">
                FUTURE
              </h1>
              <div className="flex flex-col xxxxs:relative xxxxs:translate-y-0.5 xsm:translate-y-0 lg:translate-y-1">
                <h1 className="text-[1.875rem] lg:text-[2.875rem] 6xl:text-[3.25rem] leading-none">
                  IS
                </h1>
                <h1 className="text-[1.875rem] lg:text-[2.875rem] 6xl:text-[3.25rem] leading-none">
                  SUGAR
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
                FREE
              </h1>
              <div className="flex flex-col">
                <p className="text-[0.48rem] xxxxs:text-[0.55rem] xxxs:text-[0.59rem] xxs:text-[0.62rem] xsm:text-[0.67rem] lg:text-[1rem] 6xl:text-[1.5rem] italic">
                  Unveil the allure of Nova: the quintessential liquid sweetener
                  for you.
                </p>
                <p className="text-[0.48rem] xxxxs:text-[0.55rem] xxxs:text-[0.59rem] xxs:text-[0.62rem] xsm:text-[0.67rem] lg:text-[1rem] 6xl:text-[1.5rem] italic">
                  With three mesmerizing flavors and absolutely zero sugar or
                  calories,
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
              <p className="text-[0.48rem] xxxxs:text-[0.55rem] xxxs:text-[0.59rem] xxs:text-[0.62rem] xsm:text-[0.67rem] lg:text-[1rem] 6xl:text-[1.5rem]">
                Nova transforms every cup into a magical experience. Indulge in
                sweetness without a hint of guilt and make every moment
                extraordinary!
              </p>
            </motion.div>
          </div>
        </div>
        {/* Product images and the text */}
        <div className="flex flex-col justify-between mb-16 relative 3xl:mt-12 z-10">
          <div className="flex w-full">
            <div className="relative z-50 w-3/5 xsm:w-[45%] lg:w-1/2">
              <motion.img
                loading="lazy"
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
                className="select-text font-anton text-[1.875rem] lg:text-[3.75rem] 3xl:text-[6.25rem] 6xl:text-[8rem]"
              >
                CARDAMOM
              </motion.h1>
              <Fade delay={600} triggerOnce={true}>
                <h2 className="select-text text-[0.78125rem] lg:text-[1.5rem] 3xl:text-[2.23em]  4xl:text-[2.7rem] 6xl:text-[3.7em] ">
                  GOES BEST WITH TEA
                </h2>
                <p className="select-text text-[0.65rem] xxxs:text-[0.7rem] xsm:text-[0.75rem] lg:text-[1rem] 3xl:text-[1.65rem] 4xl:text-[1.9rem] 6xl:text-[2.2rem]">
                  A match made in heaven, a flavor fusion that's simply divine
                  to taste.
                </p>
                <p className="select-text text-[0.65rem] xxxs:text-[0.7rem] xsm:text-[0.75rem] lg:text-[1rem] 3xl:text-[1.65rem] 4xl:text-[1.9rem] 6xl:text-[2.2rem]">
                  The aromatic zest of cardamom elevates tea to new heights,
                  together, they create a delightful brew that's a true culinary
                  delight."
                </p>
              </Fade>
            </div>
          </div>
          <div className="flex my-20 lg:my-10 4xl:my-0 w-full">
            <div className="w-1/2 text-white pl-4 xxxxs:pl-5 xxs:pl-6 xsm:pl-7 lg:pl-16 xl:pl-20 3xl:pl-28 4xl:pl-32 6xl:pl-40 flex-1 flex flex-col text-left justify-start">
              <motion.h1
                viewport={{ once: true }}
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "tween", delay: 0.2, duration: 0.5 }}
                className="select-text font-anton text-[1.875rem] lg:text-[3.75rem] 3xl:text-[6.25rem] 6xl:text-[8rem]"
              >
                VANILLA
              </motion.h1>
              <Fade delay={600} triggerOnce={true}>
                <h2 className="select-text text-[0.78125rem] lg:text-[1.5rem] 3xl:text-[2.3rem] 4xl:text-[2.7rem]  6xl:text-[3.7rem]">
                  GOES BEST WITH COFFEE
                </h2>
                <p className="select-text text-[0.65rem] xsm:text-[0.75rem] xxxs:text-[0.7rem] lg:text-[1rem] 3xl:text-[1.65rem] 4xl:text-[1.9rem] 6xl:text-[2.2rem]">
                  Vanilla's sweet, velvety softness complements coffee's rich,
                  bold flair, a perfect pairing that awakens senses and banishes
                  all care. The creamy essence of vanilla harmonizes with
                  coffee's deep, dark tone, together, they create a delightful
                  blend that's a true flavor throne."
                </p>
              </Fade>
            </div>
            <div className="w-1/2 -z-10 xsm:w-[45%] lg:w-1/2">
              <motion.img
                loading="lazy"
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
                    (window.innerWidth > 429 && 1.2) ||
                    (window.innerWidth > 409 && 1.2) ||
                    (window.innerWidth > 389 && 1.15) ||
                    1.15,
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
                loading="lazy"
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
                    (window.innerWidth > 429 && 1.2) ||
                    (window.innerWidth > 409 && 1.2) ||
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
                className="select-text font-anton text-[1.875rem] lg:text-[3.75rem] 3xl:text-[6.25rem] 6xl:text-[8rem]"
              >
                ORIGINAL
              </motion.h1>
              <Fade delay={600} triggerOnce={true}>
                <h2 className="select-text text-[0.78125rem] lg:text-[1.5rem] 3xl:text-[2.3rem] 4xl:text-[2.7rem]  6xl:text-[3.7rem]">
                  SWEETENS EVERYTHING
                </h2>
                <p className="select-text text-[0.65rem] xxxs:text-[0.7rem] xsm:text-[0.75rem] lg:text-[1rem] 3xl:text-[1.65rem] 4xl:text-[1.9rem] 6xl:text-[2.2rem]">
                  "Sweetness without the guilt, zero sugar, zero calories, a
                  healthy sign.
                </p>
                <p className="select-text text-[0.65rem] xxxs:text-[0.7rem] xsm:text-[0.75rem] lg:text-[1rem] 3xl:text-[1.65rem] 4xl:text-[1.9rem] 6xl:text-[2.2rem]">
                  Indulge in the sweetness, without any flavor the weight, a
                  sweet delight, that's healthy and great!"
                </p>
              </Fade>
            </div>
          </div>
          {/* upper doodle and right and left placed wave */}

          <img
            loading="lazy"
            className="absolute top-0 -translate-y-2/3 scale-x-105 z-20"
            src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/center%20color.png"
            alt=""
          />

          <img
            loading="lazy"
            className="absolute z-0 opacity-40 -rotate-90 top-0 left-0 -translate-x-[40%]"
            src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Doodle%20art.png"
            alt="Upper doodle"
          />
          <img
            loading="lazy"
            className="absolute rotate-[88deg] scale-y-125 translate-x-1/2 -right-2"
            src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/center%20color.png"
            alt=""
          />
          <img
            loading="lazy"
            className="absolute -rotate-[95deg] scale-y-150 top-[40%] -translate-x-1/2 -left-3.5"
            src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/center%20color.png"
            alt=""
          />
          <img
            loading="lazy"
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
            loading="lazy"
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
            loading="lazy"
            className={`-z-50 opacity-40`}
            src="https://juusstorage.blob.core.windows.net/creatives/Nova%20Home/Doodle%20art.png"
            alt=""
          />
        </div>
        <Link
          className="self-center mt-36 lg:mt-60"
          to={"https://shop.juus.pk/"}
        >
          <Fade direction="down" duration={500} delay={150}>
            <button className="select-none cursor-pointer flex items-center justify-between p-2 w-40 lg:w-56 xl:w-72 h-7 lg:h-11 text-white text-sm lg border-2 rounded-xl hover:bg-snow hover:text-rich-black hover:shadow-primary-shadow hover:shadow-snow transition shadow-primary-shadow relative z-20">
              <span className="mx-auto">DISCOVER FLAVORS</span>
            </button>
          </Fade>
        </Link>
      </main>
      <div>
        <Footerv3 theme="nova" />
      </div>
    </motion.div>
  );
});

export default NovaHome;
