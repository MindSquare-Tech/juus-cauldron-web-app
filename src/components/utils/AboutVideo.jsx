import React, { useState, useEffect, useRef, memo } from "react";
import Spinner from "./Spinner";

const AboutVideo = memo(() => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

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
  return (
    <div className="relative">
      <video
        onLoadedData={handleVideoLoading}
        preload="auto"
        rel="preload"
        ref={videoRef}
        loop
        muted
        playsInline
        onClick={togglePlay}
        className="select-none w-full aspect-video xl:h-full 3xl:aspect-auto"
      >
        <source
          src={
            "https://juusstorage.blob.core.windows.net/creatives/About%20Us/about%20us%20video.mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {!isLoaded && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Spinner />
        </div>
      )}
    </div>
  );
});

export default AboutVideo;
