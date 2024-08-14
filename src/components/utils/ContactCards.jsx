import React from "react";
import { Fade } from "react-awesome-reveal";

function ContactCards() {
  return (
    <Fade direction="up" cascade>
      <section className="flex flex-col 3xl:flex-row items-center 3xl:justify-around my-6 lg:mx-16 4xl:mx-56">
        <div className="hover:scale-105 transition-transform bg-zinc-100 w-11/12 my-1 h-40 6xl:h-44 px-5 py-5 3xl:mx-5 4xl:mx-3 ">
          <h1 className="select-text font-semibold text-[1.0625rem]">
            Juus Cauldron Ltd.
          </h1>
          <br />
          <p className="select-text text-zinc-500 text-[0.9375rem]">
            141/1 Westwood Colony
            <br /> Main Raiwind Road
            <br />
            Lahore, Pakistan
          </p>
        </div>
        <div className="hover:scale-105 transition-transform bg-zinc-100 w-11/12 my-1 h-40 6xl:h-44 px-5 py-5 3xl:mx-5 4xl:mx-3 ">
          <h1 className="font-semibold text-[1.0625rem]">
            For Queries Contact
          </h1>
          <br />
          <p className="select-text text-zinc-500 text-[0.9375rem]">
            Phone number:{" "}
            <a
              className="select-text underline underline-offset-4"
              href="tel:923111155887"
            >
              0311 115 5887
            </a>
          </p>
          <p className="select-text text-zinc-500 text-[0.9375rem]">
            Email:{" "}
            <a
              className="select-text underline underline-offset-4"
              href="mailto:contact@juus.pk"
            >
              contact@juus.pk
            </a>
          </p>
        </div>
        <div className="hover:scale-105 transition-transform bg-zinc-100 w-11/12 my-1 h-40 6xl:h-44 px-5 py-5 3xl:mx-5 4xl:mx-3 ">
          <h1 className="select-text font-semibold text-[1.0625rem]">
            Opening Hours:
          </h1>
          <br />
          <p className="select-text text-zinc-500 text-[0.9375rem]">
            Monday – Thursday: 10am – 6pm
            <br />
            Friday – Saturday: 10am – 2pm
            <br />
            Sunday: Closed.
          </p>
        </div>
      </section>
    </Fade>
  );
}

export default ContactCards;
