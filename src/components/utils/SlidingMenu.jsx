import { AnimatePresence, motion } from "framer-motion";
import React, { lazy } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
const NavLinks = lazy(() => import("./NavLinks.jsx"));

function SlidingMenu({ theme, isOpen }) {
  return (
    <AnimatePresence>
      <motion.div
        style={{ top: `${window.scrollY}px` }}
        className={`absolute left-0 z-[35] w-[90%] overflow-hidden shadow-primary-shadow`}
        animate={{
          x: isOpen ? 0 : "-100%",
          transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        initial={{
          x: "-100%",
        }}
      >
        <div
          className={`${
            theme ? "bg-nova-secondary" : "bg-black"
          } h-screen w-full overflow-hidden flex flex-col justify-between py-28 pl-10`}
        >
          <div className="w-24">
            <NavLinks />
          </div>
          <div className="flex">
            <Fade direction="down" cascade damping={0.3}>
              <Link
                to={"https://www.facebook.com/profile.php?id=61550934897741"}
              >
                <img
                  className="h-5"
                  src="https://juusstorage.blob.core.windows.net/website/images/general/facebook-white.png"
                  alt="facebook logo"
                />
              </Link>
              <Link to={"https://www.instagram.com/official.juus"}>
                <img
                  className="mx-10 h-5"
                  src="https://juusstorage.blob.core.windows.net/website/images/general/insta-white.png"
                  alt="instagram logo"
                />
              </Link>
              <Link to={"https://www.youtube.com/@JuusPakistan"}>
                <img
                  className="h-5 scale-150"
                  src="https://juusstorage.blob.core.windows.net/website/images/general/mdi--youtube.png"
                  alt="youtube logo"
                />
              </Link>
            </Fade>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SlidingMenu;
