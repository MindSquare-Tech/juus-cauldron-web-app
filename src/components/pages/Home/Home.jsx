import React, { useState, useEffect, lazy } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Header = lazy(() => import("../../utils/Header.jsx"));
const FullJuusSlide = lazy(() => import("../../utils/FullJuusSlide.jsx"));
const FullNovaSlide = lazy(() => import("../../utils/FullNovaSlide.jsx"));
const HomePageText = lazy(() => import("../../utils/HomePageText.jsx"));
import "../../../index.css";
import "./Home.css";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [slideValue, setSlideValue] = useState(50);
  const [showFullJuusSlide, setShowFullJuusSlide] = useState(false);
  const [showFullNovaSlide, setShowFullNovaSlide] = useState(false);
  const navigator = useNavigate();

  const handleSliderDragEnd = () => {
    console.log("drag ended");
    if (slideValue > 20 && slideValue < 80) {
      setSlideValue(50);
    }
  };

  useEffect(() => {
    if (slideValue >= 80) {
      setShowFullJuusSlide(true);
      setShowFullNovaSlide(false);
    } else if (slideValue <= 20) {
      setShowFullJuusSlide(false);
      setShowFullNovaSlide(true);
    } else {
      setShowFullJuusSlide(false);
      setShowFullNovaSlide(false);
    }
  }, [slideValue]);

  useEffect(() => {
    let timer;
    if (showFullJuusSlide) {
      timer = setTimeout(() => {
        navigator("/juus");
      }, 1000);
    } else if (showFullNovaSlide) {
      timer = setTimeout(() => {
        navigator("/nova");
      }, 1000);
    }

    return () => clearTimeout(timer); // Cleanup timeout if dependencies change
  }, [showFullJuusSlide, showFullNovaSlide, navigator]);

  const handleSliderDrag = (e) => {
    console.log(slideValue);
    setSlideValue(e.target.value);
  };

  const clipPathStyle = {
    clipPath: `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`,
  };

  return (
    <motion.div
      className="overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <main
        className={`h-screen w-full relative overflow-hidden ${
          isOpen && "brightness-95"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <HomePageText sliderValue={slideValue} setSliderValue={setSlideValue} />
        <div className="w-full h-full absolute">
          <FullNovaSlide
            isOpen={isOpen}
            sliderValue={slideValue}
            setSliderValue={setSlideValue}
          />
        </div>
        <div
          className="w-full h-full absolute transition-[clip-path] duration-200 delay-0 ease-custom-ease"
          style={clipPathStyle}
        >
          <FullJuusSlide
            sliderValue={slideValue}
            setSliderValue={setSlideValue}
          />
        </div>
        <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <input
            value={slideValue}
            onChange={handleSliderDrag}
            onMouseUp={handleSliderDragEnd}
            onTouchEnd={handleSliderDragEnd}
            id="slider"
            className="h-0 appearance-none -ml-5 lg:-ml-[27px] outline-none bg-transparent"
            type="range"
            min={0}
            max={100}
            step={1}
          />
        </div>
      </main>
    </motion.div>
  );
}

export default Home;
