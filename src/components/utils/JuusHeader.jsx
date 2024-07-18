import React, { useState, useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleIsOpen } from "../../redux/isOpenSlice.js";
import { Fade } from "react-awesome-reveal";
import SocialCapsule from "./SocialCapsule.jsx";
const NavLinks = lazy(() => import("./NavLinks.jsx"));
const SlidingMenu = lazy(() => import("../utils/SlidingMenu.jsx"));


function JuusHeader() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.isOpen);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scoialsBtnClicked, setScoialsBtnClicked] = useState(false);


  const handleHamburgerClick = () => {
    dispatch(toggleIsOpen());
  };

  const handleScroll = () => {
    if (window.scrollY <= 72) {
      setShowHeader(true);
    }
    else if (window.scrollY > lastScrollY) {
      // Scrolling down
      console.log(lastScrollY);
      setShowHeader(false);
    } else {
      // Scrolling up
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  return (
    <>
      <header
        className={`${
          showHeader ? "translate-y-0" : "-translate-y-full"
        } fixed z-40 w-full h-[72px] flex justify-between 6xl:justify-evenly items-center p-4 lg:px-12 3xl:px-24 4xl:px-32 5xl:px-36 border-b border-zinc-900 bg-black transition-transform duration-300 ease-in-out`}
      >
        {isOpen ? (
          <svg
            onClick={handleHamburgerClick}
            className="transform scale-y-[-1] lg:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="2em"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M17.414 16L26 7.414L24.586 6L16 14.586L7.414 6L6 7.414L14.586 16L6 24.586L7.414 26L16 17.414L24.586 26L26 24.586z"
            ></path>
          </svg>
        ) : (
          <svg
            onClick={handleHamburgerClick}
            className="transform scale-y-[-1] lg:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h8m-8 7h13M3 19h18"
            ></path>
          </svg>
        )}
        <div className="lg:flex lg:w-5/6 lg:items-center">
          <Link
            to={"/"}
            className="lg:pt-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:top-0 lg:left-0 lg:translate-x-0 lg:translate-y-0"
          >
            <img
              className="lg:mt-1 h-10 scale-[.85] cursor-pointer select-none lg:mr-0.5 xl:mr-9"
              src="https://juusstorage.blob.core.windows.net/website/images/general/juus-logo-white-transparent-bg.png"
              alt=""
            />
          </Link>
          {!isMobile && <NavLinks />}
        </div>
        <div className="flex">
        {isMobile ? (<svg
            className={`hover:scale-105 cursor-pointer transition-transform ${scoialsBtnClicked && "rotate-180"}`}
            onClick={() => setScoialsBtnClicked(!scoialsBtnClicked)}
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8-5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3-7v4m-5.3 6.8l2.8-2m7.8 2l-2.8-2"
            ></path>
          </svg>) : (<Fade direction="down" cascade damping={0.3}>
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
                target="_blank"
                href={"https://www.instagram.com/official.juus"}
              >
                <img
                  className="mx-10 h-5"
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
            </Fade>)}
          <SocialCapsule isSocialBtnClicked={scoialsBtnClicked} />
          
          {/* <svg
            className="mr-1.5"
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0"
            ></path>
          </svg>
          <svg
            className="ml-1.5"
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path
                fill="none"
                d="M19.5 22a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-10 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
              ></path>
              <path d="M5 4h17l-2 11H7zm0 0c-.167-.667-1-2-3-2m18 13H5.23c-1.784 0-2.73.781-2.73 2s.946 2 2.73 2H19.5"></path>
            </g>
          </svg> */}
        </div>
      </header>
      <SlidingMenu isOpen={isOpen} />
    </>
  );
}

export default JuusHeader;
