import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, useLocation } from "react-router-dom";

function Footer({ theme }) {
  const [isEmailFieldFocused, setIsEmailFieldFocused] = useState(false);
  const emailRef = useRef(null);

  const handleFocus = () => {
    setIsEmailFieldFocused(true);
  };
  const handleBlur = () => {
    if (emailRef.current.value === "") setIsEmailFieldFocused(false);
  };

  return (
    <footer
      className={`w-full h-[17.5rem] lg:h-72 ${
        theme === "nova" ? "bg-nova-secondary" : "bg-black"
      }`}
    >
      <div
        className={`text-snow border-b ${
          theme === "nova" ? "border-snow" : "border-zinc-900"
        } w-full h-5/6 flex flex-col justify-evenly`}
      >
        <Fade triggerOnce={true} direction="up">
          <p className="text-center text-sm">Subscribe to our emails</p>
          <div className={`relative flex items-center justify-center`}>
            {!isEmailFieldFocused && (
              <label
                className={`absolute left-[15%] lg:left-[27%] xl:left-[32%] 3xl:left-[35%] 4xl:left-[38%]`}
                htmlFor="email"
              >
                Email
              </label>
            )}
            <input
              ref={emailRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`outline-none appearance-none ${
                theme === "nova" ? "bg-nova-secondary" : "bg-black"
              } border border-snow h-11 px-3 w-4/5 lg:w-1/2 xl:w-2/5 3xl:w-1/3 4xl:w-1/4`}
              style={{ backgroundColor: `#${theme}` }}
              id="email"
              type="email"
              name="email"
            />
            <svg
              className="inline-block absolute right-[12%] lg:right-[26%] xl:right-[31%] 3xl:right-[34%] 4xl:right-[38%] cursor-pointer hover:scale-105 active:scale-95"
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
                strokeWidth={1}
                d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5"
              ></path>
            </svg>
          </div>
          <div className="flex items-center justify-center h-5">
            <a target="_blank" href={"https://www.facebook.com/profile.php?id=61550934897741"}>
              <img
                className="h-5"
                src="https://juusstorage.blob.core.windows.net/website/images/general/facebook-white.png"
                alt="facebook logo"
              />
            </a>
            <a target="_blank" href={"https://www.instagram.com/official.juus"}>
              <img
                className="h-5 mx-10"
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
          </div>
        </Fade>
      </div>

      <div className="flex justify-center items-center h-1/6">
        <p
          className={`text-[0.6875rem]  ${
            theme === "nova" ? "text-white" : "text-zinc-400"
          }`}
        >
          © 2024,{" "}
          <Link
            className="hover:text-snow hover:underline-offset-4 hover:underline active:underline"
            to={"/"}
          >
            Juus.pk{" "}
          </Link>
          Powered by <small> </small>
          <a
            className="hover:text-snow hover:underline-offset-4 hover:underline active:underline"
            target="_blank"
            href={"https://www.mindsquare.dev/"}
          >
            Mindsquare
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
