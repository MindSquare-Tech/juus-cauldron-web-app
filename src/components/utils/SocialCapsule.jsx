import { motion } from "framer-motion";
import React from "react";
import { Fade } from "react-awesome-reveal";

function SocialCapsule({ isSocialBtnClicked }) {
  return (
    <motion.div
      animate={{
        y: isSocialBtnClicked ? 0 : "-150%",
        opacity: isSocialBtnClicked ? 1 : 0,
      }}
      className="absolute right-0 top-[4.5rem] flex flex-col justify-evenly items-center h-44 w-14 bg-slider rounded-b-full"
    >
      <Fade direction="down" cascade damping={0.3}>
        <a
          target="_blank"
          href={"https://www.facebook.com/profile.php?id=61550934897741"}
        >
          <img
            className="h-5"
            src="https://juusstorage.blob.core.windows.net/website/images/general/facebook-white.png"
            alt="facebook logo"
          />
        </a>
        <a
          className=""
          target="_blank"
          href={"https://www.instagram.com/official.juus"}
        >
          <img
            className="h-5"
            src="https://juusstorage.blob.core.windows.net/website/images/general/insta-white.png"
            alt="instagram logo"
          />
        </a>
        <a target="_blank" href="https://www.youtube.com/@JuusPakistan">
          <img
            className="h-5 scale-150"
            src="https://juusstorage.blob.core.windows.net/website/images/general/mdi--youtube.png"
            alt="youtube logo"
          />
        </a>
      </Fade>
    </motion.div>
  );
}

export default SocialCapsule;
