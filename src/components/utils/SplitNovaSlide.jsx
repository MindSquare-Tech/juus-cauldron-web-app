import React, { memo } from "react";
import { Fade } from "react-awesome-reveal";

const SplitNovaSlide = memo(() => {
  return (
    <div className="relative font-anton">
      <div
        style={{
          backgroundImage: `url(${"https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/Nova%20background.png"})`,
        }}
        className={`relative overflow-hidden h-screen bg-cover bg-center xl:bg-top`}
      >
        <Fade delay={200} cascade triggerOnce={true}>
          <img
            loading="lazy"
            className="-rotate-[0.75deg] pointer-events-none select-none scale-x-105 xxs:scale-x-110 scale-y-[1.13] xxs:scale-y-[1.195] sm:scale-[.85] lg:scale-x-[.9] lg:scale-y-[.97] xl:scale-x-[.4] xl:scale-y-[.435] 4xl:scale-x-[.45] 4xl:scale-y-[.475] 6xl:scale-x-[.5] 6xl:scale-y-[.53] absolute top-[45.15%] left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
            src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/full%20bottle%20nova.png"
            alt=""
          />
          <div className="pointer-events-none select-none absolute flex flex-col justify-center items-start bottom-[12%] xxxs:bottom-[9.6%] xxs:bottom-[10.5%] lg:bottom-[6.67%] xl:bottom-[8%] 3xl:bottom-[4%] 6xl:bottom-0 right-[7%] xxxxs:right-[2.25%] xxxs:right-[13%] xxs:right-[5.25%] xsm:right-[9.67%] sm:right-[15%] lg:right-[19%] xl:right-[35%] 2xl:right-[36%] 3xl:right-[35%] 4xl:right-[35.75%] 5xl:right-[36.75%] 6xl:right-[35.67%] text-5xl xxxxs:text-6xl xxxs:text-5xl xxs:text-6xl lg:text-[84px] xl:text-5xl 3xl:text-7xl 6xl:text-8xl text-snow font-extrabold tracking-wide">
            <h1>INTO</h1>
            <h1>FUTURE</h1>
          </div>
        </Fade>
      </div>
    </div>
  );
});
// scale-125 xs:scale-110 md:scale-100 xl:scale-75 2xl:scale-[.55] 3xl:scale-50 6xl:scale-[.6] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform
export default SplitNovaSlide;
