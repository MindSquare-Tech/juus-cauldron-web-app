import React, { memo, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Spinner from "./Spinner";

const JuusExplosionVideo = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleVideoLoading = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative 3xl:pr-16">
    <Fade  direction="up" delay={200} triggerOnce={true}>
      <video
        onLoadedData={handleVideoLoading}
        autoPlay
        loop
        muted
        playsInline
        className="h-72 lg:h-96 2xl:h-[480px] 3xl:h-[540px] 4xl:h-[640px] 5xl:h-[720px]"
        rel="preload"
        preload="auto"
      >
        <source
          src={
            "https://juusstorage.blob.core.windows.net/website/videos/home/homepage-explosion.mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {!isLoaded && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3">
          <Spinner />
        </div>
      )}
    </Fade>
    </div>
  );
}, []);

export default JuusExplosionVideo;
