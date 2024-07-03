import React, { memo } from "react";
import { Fade } from "react-awesome-reveal";

const JuusExplosionVideo = memo(() => {
  return (
    <Fade direction="up" delay={200} triggerOnce={true}>
    <video
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
          "https://juusstorage.blob.core.windows.net/creatives/Juus%20Home/explosionJuusBottles.webm"
        }
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    </Fade>
  );
}, []);

export default JuusExplosionVideo;
