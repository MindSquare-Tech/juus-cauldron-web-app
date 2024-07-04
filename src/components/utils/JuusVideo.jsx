import React, { useState, useRef, useEffect, memo } from "react";
import Spinner from "./Spinner";

const JuusVideo = memo(() => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const renderCount = useRef(0);
  renderCount.current += 1;

  useEffect(() => {
    console.log(`Video rendered ${renderCount.current} times`);
  });

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(togglePlay, []);

  const handleVideoLoading = () => {
    setIsLoaded(true);
  };

  const handleMuteIconClick = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative">
      <video
        onLoadedData={handleVideoLoading}
        rel="preload"
        preload="auto"
        muted={isMuted}
        ref={videoRef}
        onClick={togglePlay}
        loop
        playsInline
        className="select-none w-full aspect-video xl:h-full 3xl:h-screen 4xl:aspect-auto"
      >
        <source
          src={
            isMobile
              ? "https://juusstorage.blob.core.windows.net/website/videos/home/juus-fit-ad-mobile-compressed.mp4"
              : "https://juusstorage.blob.core.windows.net/website/videos/home/juus-fit-ad-desktop-compressed.mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {isMuted ? (
        <svg
          onClick={handleMuteIconClick}
          className="absolute bottom-2 3xl:bottom-40 right-2  w-5 h-5 lg:w-7 lg:h-7 cursor-pointer fill-current text-white"
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
          className="absolute bottom-2 3xl:bottom-40 right-2 42 w-5 h-5 lg:w-7 lg:h-7 cursor-pointer fill-current text-white"
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
      {!isLoaded && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Spinner />
        </div>
      )}
    </div>
  );
}, []);

export default JuusVideo;
