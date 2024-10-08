import { motion } from "framer-motion";
import React from "react";

function PageFallback() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-screen w-full bg-black"
    >
      <div className="w-16 h-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
        <img
          loading="lazy"
          src="https://juusstorage.blob.core.windows.net/creatives/Homepage%20JC/juusCauldronLogo.png"
          alt="Juus Cauldron Logo"
        />
      </div>
    </motion.div>
  );
}

export default PageFallback;
