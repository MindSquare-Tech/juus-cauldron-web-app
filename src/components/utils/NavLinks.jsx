import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <Fade direction="up" className="" cascade damping={0.15}>
      <Link to={"/"}>
        <h1 className="my-4 lg:my-5 select-none text-snow text-lg lg:text-sm cursor-pointer lg:pt-1.5 lg:px-3.5 hover:underline-offset-4 active:underline hover:underline">
          Home
        </h1>
      </Link>
      <Link to={"/juus"}>
        <h1 className="my-4 lg:my-5 select-none text-snow text-lg lg:text-sm cursor-pointer lg:pt-1.5 lg:px-3.5 hover:underline-offset-4 active:underline hover:underline">
          Juus
        </h1>
      </Link>
      <Link to={"/nova"}>
        <h1 className="my-4 lg:my-5 select-none text-snow text-lg lg:text-sm cursor-pointer lg:pt-1.5 lg:px-3.5 hover:underline-offset-4 active:underline hover:underline">
          Nova
        </h1>
      </Link>
      <Link to={"/about"}>
        <h1 className="my-4 lg:my-5 select-none text-snow text-lg lg:text-sm cursor-pointer lg:pt-1.5 lg:px-3.5 hover:underline-offset-4 active:underline hover:underline">
          About Us
        </h1>
      </Link>
      <Link to={"https://juus.pk/pages/shop"}>
        <h1 className="my-4 lg:my-5 select-none text-snow text-lg lg:text-sm cursor-pointer lg:pt-1.5 lg:px-3.5 hover:underline-offset-4 active:underline hover:underline">
          Shop
        </h1>
      </Link>
      <Link to={"/faqs"}>
        <h1 className="my-4 lg:my-5 select-none text-snow text-lg lg:text-sm cursor-pointer lg:pt-1.5 lg:px-3.5 hover:underline-offset-4 active:underline hover:underline">
          FAQs
        </h1>
      </Link>
      <Link to={"/contact"}>
        <h1 className="my-4 lg:my-5 select-none text-snow text-lg lg:text-sm cursor-pointer lg:pt-1.5 lg:px-3.5 hover:underline-offset-4 active:underline hover:underline">
          Contact Us
        </h1>
      </Link>
    </Fade>
  );
}

export default NavLinks;
