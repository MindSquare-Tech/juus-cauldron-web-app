import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Footerv3({ theme }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { pathname } = useLocation();

  const backgroundStyle =
    theme === "nova"
      ? "linear-gradient(-45deg, rgba(182,170,67,0.8) 0%, rgba(164,212,100,1) 33%)"
      : pathname === "/contact" || pathname === "/about"
      ? "linear-gradient(-45deg, rgba(222,224,226,0.1) 0%, rgba(0,0,0,1) 4%)"
      : "linear-gradient(-45deg, rgba(222,224,226,0.2) 0%, rgba(0,0,0,1) 20%)";

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth < 768)
    );
    return () => {
      window.removeEventListener("resize", () =>
        setIsMobile(window.innerWidth < 768)
      );
    };
  }, [window.innerWidth]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer
      style={{
        background: backgroundStyle,
      }}
      className={`text-white w-full h-52 lg:h-auto overflow-hidden ${
        theme === "nova" ? "bg-nova-secondary" : "bg-black"
      }`}
    >
      <div className="grid place-items-center px-3 pt-5">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 0.8,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
        >
          <h1 className="font-bold text-center text-xl">Follow Us</h1>
          <div className="flex justify-start items-start mt-3">
            <a
              target="_blank"
              href={"https://www.facebook.com/profile.php?id=61550934897741"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill={`${theme === "nova" ? "#FFFFFF" : "#FFFFFF"}`}
                  d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"
                ></path>
              </svg>
            </a>
            <a
              className="xsm:px-1"
              target="_blank"
              href={"https://www.instagram.com/official.juus"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill={`${theme === "nova" ? "#FFFFFF" : "#FFFFFF"}`}
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                ></path>
              </svg>
            </a>
            <a
              className="xsm:px-1"
              target="_blank"
              href="https://www.youtube.com/@JuusPakistan"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill={`${theme === "nova" ? "#FFFFFF" : "#FFFFFF"}`}
                  d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                ></path>
              </svg>
            </a>
            <a href="https://wa.me/923111155887" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill={`${theme === "nova" ? "#FFFFFF" : "#FFFFFF"}`}
                  d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"
                ></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
      <div
        className={`mx-3 mt-7 lg:mt-5 xxxxs:mt-7 lg:mx-auto border-b w-11/12 lg:w-10/12 xl:w-11/12 3xl:w-10/12 4xl:w-9/12 5xl:w-10/12 ${
          theme === "nova" ? "border-white" : "border-[#dfe3e6]"
        }`}
      ></div>
      <div className="flex flex-col items-center justify-center">
        <svg
          onClick={handleScrollToTop}
          className="my-2 lg:mt-3 xl:mt-5 hover:cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="1.5em"
          viewBox="0 0 1024 1024"
        >
          <path
            fill={`${theme === "nova" ? "#FFFFFF" : "#dee0e2"}`}
            d="M518.5 360.3a7.95 7.95 0 0 0-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7z"
          ></path>
          <path
            fill={`${theme === "nova" ? "#FFFFFF" : "#dee0e2"}`}
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372"
          ></path>
        </svg>
        <p
          className={`text-xs ${
            theme === "nova" ? "#FFFFFF" : "#dee0e2"
          } pb-3 `}
        >
          GO BACK ON TOP
        </p>
      </div>
    </footer>
  );
}

export default Footerv3;
