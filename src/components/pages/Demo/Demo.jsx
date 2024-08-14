import React from "react";

function Demo() {
  return (
    <div className="relative">
      <video autoPlay loop className="h-96">
        <source
          src={"https://cdn.shopify.com/videos/c/o/v/5d59641c05854d96bae3f4fd3d09a3e6.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Demo;
