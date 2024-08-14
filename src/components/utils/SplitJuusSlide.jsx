import React, { memo, useState } from "react";
import { Fade } from "react-awesome-reveal";

const SplitJuusSlide = memo(() => {

  return (
    <div className="relative font-anton">
      <div
        style={{
          backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Background%20Greenapple.png"})`,
        }}
        className={`relative overflow-hidden h-screen bg-cover bg-center xl:bg-bottom`}
      >
        <Fade delay={200} cascade triggerOnce={true}>
          <img
            loading="lazy"
            className="pointer-events-none select-none scale-105 xxs:scale-110 sm:scale-[.85] lg:scale-90 xl:scale-[.4] 4xl:scale-[.45] 6xl:scale-50 absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Juus%20bottle%20green%20apple%20wbg.png"
            alt=""
          />
          <div className="pointer-events-none select-none absolute flex flex-col justify-center items-end bottom-[15%] xxxs:bottom-[12%] xxs:bottom-[14%] lg:bottom-[9.67%] xl:bottom-[11%] 3xl:bottom-[7%] 6xl:bottom-[3%] left-[13.5%] xxxxs:left-[10%] xxxs:left-[19%] xxs:left-[12.5%] xsm:left-[16%] sm:left-[21%] lg:left-[24%] xl:left-[37.5%] 2xl:left-[38%] 3xl:left-[37.5%] 4xl:left-[38.1%] 5xl:left-[39%] 6xl:left-[38%] text-5xl xxxxs:text-6xl xxxs:text-5xl xxs:text-6xl lg:text-[84px] xl:text-5xl 3xl:text-7xl 6xl:text-8xl text-snow font-semibold tracking-wide">
            <h1>DELVE</h1>
            <h1>THE</h1>
          </div>
        </Fade>
      </div>
    </div>
  );
});
// scale-125 xs:scale-110 md:scale-100 xl:scale-75 2xl:scale-[.55] 3xl:scale-50 6xl:scale-[.6] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform
export default SplitJuusSlide;
