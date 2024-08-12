import React, { useEffect, useRef, useState } from "react";

function QueryForm() {
  const titleInputRef = useRef(null);
  const textareaRef = useRef(null);
  const emailInputRef = useRef(null);
  const [titleInputFocused, setTitleInputFocused] = useState(false);
  const [textareaFocused, setTextareaFocused] = useState(false);
  const [emailInputFocused, setEmailInputFocused] = useState(false);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (titleInputRef.current.value !== "") setTitleInputFocused(true);
    if (textareaRef.current.value !== "") setTextareaFocused(true);
    if (emailInputRef.current.value !== "") setEmailInputFocused(true);
  }, [subject, description, email]);

  const handleTitleInputFocus = () => {
    setTitleInputFocused(true);
  };
  const handleTitleInputBlur = () => {
    if (titleInputRef.current.value === "") setTitleInputFocused(false);
  };
  const handleTextareaFocus = () => {
    setTextareaFocused(true);
  };
  const handleTextareaBlur = () => {
    if (textareaRef.current.value === "") setTextareaFocused(false);
  };
  const handleEmailInputFocus = () => {
    setEmailInputFocused(true);
  };
  const handleEmailInputBlur = () => {
    if (emailInputRef.current.value === "") setEmailInputFocused(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (subject !== "" && email !== "" && description !== "") {
      const formData = {
        subject: subject,
        email: email,
        description: description,
      };

      try {
        const response = await fetch("http://localhost:5000/faqs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Handle successful response
          // console.log("Email sent successfully");
          alert("Query sent successfully!");
          setSubject("");
          setEmail("");
          setDescription("");
        } else {
          // Handle error response
          // console.error("Error sending email");
          alert("Error sending email.");
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
      className="h-[30rem] w-72 xxxxs:w-80 xxs:w-[22.5rem] lg:w-72 xl:w-96 2xl:w-80 3xl:w-96 4xl:w-[26.25rem] lg:relative lg:bottom-20 2xl:bottom-32 bg-[#164344] p-5 shadow-primary-shadow rounded-2xl my-10 mx-3 xxxxs:mx-6 xxs:mx-8 lg:mx-0 flex flex-col justify-center items-center"
    >
      <div className="my-3 h-9 relative w-11/12">
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          ref={titleInputRef}
          onClick={handleTitleInputFocus}
          onBlur={handleTitleInputBlur}
          className="text-rich-black rounded-3xl border-white border h-9 w-full outline-none px-4"
          name="query-subject"
          id="query-subject"
          type="text"
        />
        {!titleInputFocused && (
          <label
            className="absolute top-0 left-0 translate-y-1/4 translate-x-1/4 text-[#ff3333]"
            htmlFor="query-subject"
          >
            Ask Away
          </label>
        )}
      </div>
      <div className="my-3 w-11/12 flex flex-col items-center relative">
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          ref={textareaRef}
          onClick={handleTextareaFocus}
          onBlur={handleTextareaBlur}
          className="text-white bg-[#164344] rounded-2xl w-full border-white border outline-none p-4 h-64 min-h-64 max-h-64"
          name="query-description"
          id="query-description"
          cols=""
          rows="7"
        ></textarea>
        {!textareaFocused && (
          <>
            <div className="w-10/12 border-b border-white h-px absolute top-0 translate-y-12"></div>
            <div className="w-10/12 border-b border-white h-px absolute top-0 translate-y-24"></div>
            <div className="w-10/12 border-b border-white h-px absolute top-0 translate-y-36"></div>
            <div className="w-10/12 border-b border-white h-px absolute top-0 translate-y-48"></div>
            <div className="w-10/12 border-b border-white h-px absolute top-0 translate-y-60"></div>
          </>
        )}
      </div>
      <div className="my-3 relative h-11 w-11/12">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailInputRef}
          onClick={handleEmailInputFocus}
          onBlur={handleEmailInputBlur}
          className="text-white bg-[#164344] rounded-2xl h-full border-white border w-full outline-none p-4"
          type="email"
          name="sender-email"
          id="sender-email"
        />
        {!emailInputFocused && (
          <label
            className="text-white absolute top-0 left-0 translate-y-[40%] translate-x-4"
            htmlFor="sender-email"
          >
            EMAIL ADDRESS
          </label>
        )}
      </div>
      <div className="shadow-primary-shadow relative top-7 mt-4 bg-[#ff3333] rounded-xl w-32 h-12 flex justify-center items-center">
        <button
          onClick={handleSubmit}
          className="text-white text-3xl bg-[#ff3333] w-full rounded-xl"
        >
          SEND
        </button>
      </div>
    </form>
  );
}

export default QueryForm;
