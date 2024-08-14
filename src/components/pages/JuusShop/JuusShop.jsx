import React from "react";
import { motion } from "framer-motion";

function JuusShop() {
  return (
    <motion.div
      className="h-screen bg-black grid place-items-center text-white text-5xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      JuusShop
    </motion.div>
  );
}

export default JuusShop;
