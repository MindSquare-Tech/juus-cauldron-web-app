import React, { useState } from "react";

function ContactForm() {
  const [isNameInputFocused, setIsNameInputFocused] = useState(false);
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);
  const [isPhoneNumberInputFocused, setIsPhoneNumberInputFocused] =
    useState(false);
  const [isCommentInputFocused, setIsCommentInputFocused] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && phoneNumber !== "" && comment !== "") {
      const formData = {
        name,
        email,
        phoneNumber,
        comment,
      };

      try {
        const response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Handle successful response
          // console.log("Email sent successfully");
          setName("");
          setEmail("");
          setPhoneNumber("");
          setComment("");
          alert("Query sent successfully!");
        } else {
          // Handle error response
          // console.error("Error sending email");
          alert("Error sending email.1");
        }
      } catch (error) {
        // Handle network error
        // console.error("Network error:", error);
        alert("Error sending email", error);
      }
    } else {
      // console.error("Please fill in all fields");
      alert("Please fill in all fields.");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-16 lg:mx-24 3xl:mx-64 4xl:mx-80 5xl:mx-96 6xl:mx-[33.75rem]"
    >
      <div className="my-4 3xl:my-6 flex justify-center items-center relative">
        <label
          className={`${
            isNameInputFocused ? "-translate-y-3.5 text-[0.625rem]" : ""
          } transition-transform absolute left-7 lg:left-12 text-sm text-zinc-500`}
          htmlFor="name"
        >
          Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setIsNameInputFocused(true)}
          onBlur={(e) => {
            if (e.target.value === "") setIsNameInputFocused(false);
          }}
          className={`border outline-none appearance-none ${
            isNameInputFocused ? "outline-black" : "border-zinc-600"
          } h-12 w-11/12 px-3.5 text-[0.9375rem]`}
          name="name"
          id="name"
          type="text"
        />
      </div>
      <div className="my-4 3xl:my-6 flex justify-center items-center relative">
        <label
          className={`${
            isEmailInputFocused ? "-translate-y-3.5 text-[0.625rem]" : ""
          } transition-transform absolute left-7 lg:left-12 text-sm text-zinc-500`}
          htmlFor="email"
        >
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setIsEmailInputFocused(true)}
          onBlur={(e) => {
            if (e.target.value === "") setIsEmailInputFocused(false);
          }}
          className={`border outline-none appearance-none ${
            isEmailInputFocused ? "outline-black" : "border-zinc-600"
          } h-12 w-11/12 px-3.5 text-[0.9375rem]`}
          name="email"
          id="email"
          type="text"
        />
      </div>
      <div className="my-4 3xl:my-6 flex justify-center items-center relative">
        <label
          className={`${
            isPhoneNumberInputFocused ? "-translate-y-3.5 text-[0.625rem]" : ""
          } transition-transform absolute left-7 lg:left-12 text-sm text-zinc-500`}
          htmlFor="phone"
        >
          Phone No.
        </label>
        <input
          onChange={(e) => setPhoneNumber(e.target.value)}
          onFocus={() => setIsPhoneNumberInputFocused(true)}
          onBlur={(e) => {
            if (e.target.value === "") setIsPhoneNumberInputFocused(false);
          }}
          className={`border outline-none appearance-none ${
            isPhoneNumberInputFocused ? "outline-black" : "border-zinc-600"
          } h-12 w-11/12 px-3.5 text-[0.9375rem]`}
          name="phone"
          id="phone"
          type="text"
        />
      </div>
      <div className="my-4 3xl:my-6 flex justify-center items-center relative">
        <label
          className={`${
            isCommentInputFocused ? "-translate-y-3.5 text-[0.625rem]" : ""
          } transition-transform absolute top-3 left-7 lg:left-12 text-sm text-zinc-500`}
          htmlFor="comment"
        >
          Comment
        </label>
        <textarea
          onChange={(e) => setComment(e.target.value)}
          onFocus={() => setIsCommentInputFocused(true)}
          onBlur={(e) => {
            if (e.target.value === "") setIsCommentInputFocused(false);
          }}
          cols=""
          rows="7"
          className={`border outline-none appearance-none ${
            isCommentInputFocused ? "outline-black" : "border-zinc-600"
          } h-32 min-h-32 max-h-44 w-11/12 px-3.5 py-2.5 text-[0.9375rem]`}
          name="comment"
          id="comment"
          type="text"
        ></textarea>
      </div>
      <div className="hover:scale-105 transition-transform active:scale-95 flex justify-center w-28 h-11 shadow-primary-shadow rounded-lg mx-3 lg:mx-5 xl:mx-7 3xl:mx-9 4xl:mx-8 5xl:mx-7 6xl:mx-8 mt-7 3xl:mt-10 mb-10 3xl:mb-14 bg-black ">
        <button
          onClick={handleSubmit}
          className="text-snow text-sm h-full w-full"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
