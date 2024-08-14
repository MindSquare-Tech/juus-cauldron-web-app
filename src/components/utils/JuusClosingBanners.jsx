import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spinner from "./Spinner";

const JuusClosingBanners = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoLoading, setVideoLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const imageAndVideo = [
    {
      type: "image",
      src: "https://juusstorage.blob.core.windows.net/creatives/Juus%20Home/home%20page%20banner.jpg",
    },
    {
      type: "video",
      src: "https://juusstorage.blob.core.windows.net/website/videos/home/squish-ad-juus-compressed.mp4",
    },
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(togglePlay, []);

  const handleMuteIconClick = () => {
    setIsMuted(!isMuted);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageAndVideo.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageAndVideo.length - 1 : prevIndex - 1
    );
  };

  const handleVideoLoaded = () => {
    setVideoLoading(false);
  };

  return (
    <div className="relative w-full max-w-[calc(100vh*16/9)] aspect-[16/9] mx-auto overflow-hidden bg-black">
      <AnimatePresence>
        {imageAndVideo.map((item, index) => {
          if (index !== currentIndex) return null;

          return (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt="carousel item"
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="object-contain">
                  {videoLoading && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <Spinner />
                    </div>
                  )}
                  <video
                    rel="preload"
                    preload="auto"
                    muted={isMuted}
                    ref={videoRef}
                    onClick={togglePlay}
                    loop
                    playsInline
                    src={item.src}
                    className={`w-full h-full object-contain ${
                      videoLoading ? "hidden" : ""
                    }`}
                    onLoadedData={handleVideoLoaded}
                  />
                  {isMuted ? (
                    <svg
                      onClick={handleMuteIconClick}
                      className="absolute bottom-2 3xl:bottom-4 6xl:bottom-6 right-2 3xl:right-4 6xl:right-6 w-5 h-5 lg:w-7 lg:h-7 cursor-pointer fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M12 4L9.91 6.09L12 8.18M4.27 3L3 4.27L7.73 9H3v6h4l5 5v-6.73l4.25 4.26c-.67.51-1.42.93-2.25 1.17v2.07c1.38-.32 2.63-.95 3.68-1.81L19.73 21L21 19.73l-9-9M19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.9 8.9 0 0 0 21 12c0-4.28-3-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71m-2.5 0c0-1.77-1-3.29-2.5-4.03v2.21l2.45 2.45c.05-.2.05-.42.05-.63"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={handleMuteIconClick}
                      className="absolute bottom-2 3xl:bottom-4 6xl:bottom-6 right-2 3xl:right-4 6xl:right-6 w-5 h-5 lg:w-7 lg:h-7 cursor-pointer fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77s-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9z"
                      />
                    </svg>
                  )}
                </div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Left Arrow */}
      {currentIndex === 1 && (
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="2em"
            viewBox="0 0 2048 2048"
          >
            <path
              fill="white"
              d="M1443 2045L421 1024L1443 3l90 90l-930 931l930 931z"
            ></path>
          </svg>
        </button>
      )}

      {/* Right Arrow */}
      {currentIndex === 0 && (
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="2em"
            viewBox="0 0 2048 2048"
          >
            <path
              fill="white"
              d="m515 1955l930-931L515 93l90-90l1022 1021L605 2045z"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default JuusClosingBanners;
