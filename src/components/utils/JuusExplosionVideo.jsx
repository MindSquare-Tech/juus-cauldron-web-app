import { motion } from "framer-motion";
import React, { memo } from "react";

const JuusExplosionVideo = memo(() => {
  return (
    <motion.video
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ type: "tween", duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
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
    </motion.video>
  );
}, []);

export default JuusExplosionVideo;
