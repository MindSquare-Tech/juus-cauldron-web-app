import React, { Suspense, useState, useRef, lazy, memo, useEffect } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import PageFallback from "../../utils/PageFallback.jsx";
const SplitJuusSlide = lazy(() => import("../../utils/SplitJuusSlide.jsx"));
const SplitNovaSlide = lazy(() => import("../../utils/SplitNovaSlide.jsx"));
const FullJuusSlide = lazy(() => import("../../utils/FullJuusSlide.jsx"));
const FullNovaSlide = lazy(() => import("../../utils/FullNovaSlide.jsx"));
const Header = lazy(() => import("../../utils/Header.jsx"));

const Home = memo(() => {
  let isSliderLocked = false;
  const sliderRef = useRef(null);
  const sliderHandleRef = useRef(null);
  const sliderImgWrapperRef = useRef(null);
  const [showSlideA, setShowSlideA] = useState(false);
  const [showSlideB, setShowSlideB] = useState(false);

  useEffect(() => {
    const preventSwipe = (e) => {
      e.preventDefault();
    };

    window.addEventListener('touchstart', preventSwipe, { passive: false });
    window.addEventListener('touchmove', preventSwipe, { passive: false });
    window.addEventListener('touchend', preventSwipe, { passive: false });

    return () => {
      window.removeEventListener('touchstart', preventSwipe);
      window.removeEventListener('touchmove', preventSwipe);
      window.removeEventListener('touchend', preventSwipe);
    };
  }, []);

  const checkWidth = () => {
    if (sliderImgWrapperRef.current) {
      const elementWidth = sliderImgWrapperRef.current.offsetWidth;
      const parentWidth = sliderImgWrapperRef.current.parentElement.offsetWidth;
      const widthPercentage = (elementWidth / parentWidth) * 100;

      if (widthPercentage <= 20) {
        setShowSlideA(true);
        setShowSlideB(false);
      } else if (widthPercentage >= 80) {
        setShowSlideA(false);
        setShowSlideB(true);
      } else {
        setShowSlideA(false);
        setShowSlideB(false);
      }
    }
  };

  function sliderMouseMove(event) {
    checkWidth();
    if (isSliderLocked) return;
    // console.log(event);
    const sliderLeftX = sliderRef.current.offsetLeft;
    const sliderWidth = sliderRef.current.clientWidth;
    const sliderHandleWidth = sliderHandleRef.current.clientWidth;

    let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
    if (mouseX < 0) mouseX = 0;
    else if (mouseX > sliderWidth) mouseX = sliderWidth;

    sliderImgWrapperRef.current.style.width = `${(
      (1 - mouseX / sliderWidth) *
      100
    ).toFixed(4)}%`;
    sliderHandleRef.current.style.left = `calc(${(
      (mouseX / sliderWidth) *
      100
    ).toFixed(4)}% - ${sliderHandleWidth / 2}px)`;
  }

  function sliderMouseDown(event) {
    checkWidth();
    if (isSliderLocked) isSliderLocked = false;
    sliderMouseMove(event);
  }

  function sliderMouseUp() {
    if (!isSliderLocked) isSliderLocked = true;
  }

  function sliderMouseLeave() {
    if (isSliderLocked) isSliderLocked = false;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <div className="w-full h-screen flex items-center justify-center">
        <div
          ref={sliderRef}
          // onMouseMove={sliderMouseMove}
          onTouchMove={sliderMouseMove}
          // onMouseDown={sliderMouseDown}

          onTouchStart={sliderMouseDown}
          onMouseUp={sliderMouseUp}
          onTouchEnd={sliderMouseUp}
          id="image-comparison-slider"
          className="relative overflow-hidden"
        >
          <div className="slide block h-auto object-cover">
            {showSlideA ? (
              <Suspense fallback={<PageFallback />}>
                <FullJuusSlide />
              </Suspense>
            ) : (
              <Suspense fallback={<PageFallback />}>
                <SplitJuusSlide />
              </Suspense>
            )}
          </div>
          <div
            ref={sliderImgWrapperRef}
            className="img-wrapper absolute top-0 right-0 w-1/2 h-full overflow-hidden"
          >
            <div className="slide absolute top-0 right-0 h-full object-cover">
              {showSlideB ? (
                <Suspense fallback={<PageFallback />}>
                  <FullNovaSlide />
                </Suspense>
              ) : (
                <Suspense fallback={<PageFallback />}>
                  <SplitNovaSlide />
                </Suspense>
              )}
            </div>
          </div>
          <div
            ref={sliderHandleRef}
            className="handle absolute top-0 h-full flex flex-col justify-center items-center z-20"
            onMouseEnter={sliderMouseLeave}
          >
            <div className="handle-line w-0.5 grow bg-white"></div>
            <motion.div animate={{x: [5, 0, -5, 0, 5]}} transition={{repeat: Infinity}} className="handle-circle text-white shadow-primary-shadow bg-yellow-400 rounded-[50%] flex items-center justify-evenly">
              <svg
                className={``}
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="white"
                  d="M2.786 11.318c-1.048-.567-1.048-2.07 0-2.638l11.998-6.5A1.5 1.5 0 0 1 17 3.5v12.999a1.5 1.5 0 0 1-2.215 1.319zm.476-1.758a.5.5 0 0 0 0 .879l11.998 6.5a.5.5 0 0 0 .739-.44v-13a.5.5 0 0 0-.739-.439z"
                ></path>
              </svg>
              <svg
                className={``}
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="white"
                  d="M17.215 11.318c1.047-.567 1.047-2.07 0-2.638L5.216 2.18A1.5 1.5 0 0 0 3.002 3.5v12.999a1.5 1.5 0 0 0 2.214 1.319zm-.476-1.758a.5.5 0 0 1 0 .879l-11.999 6.5a.5.5 0 0 1-.738-.44v-13a.5.5 0 0 1 .738-.439z"
                ></path>
              </svg>
            </motion.div>
            <div className="handle-line w-0.5 grow bg-white"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});
// onMouseDown={sliderMouseDown}
export default Home;
