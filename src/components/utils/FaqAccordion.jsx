import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

function FaqAccordion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      className="mx-3 xxxxs:mx-6 xxs:mx-8 rounded-lg shadow-primary-shadow"
    >
      <div
        onClick={() => setShowAnswer(!showAnswer)}
        className="mt-4 xxs:mt-6 h-12 flex items-center cursor-pointer bg-white"
      >
        <li className="px-3 text-sm xxs:text-base select-text">{question}</li>
      </div>
      {showAnswer && (
        <Fade triggerOnce={true}
          className="p-3 rounded-lg bg-[#34b2b2]"
        >
          <p className="text-sm xxs:text-base select-text">{answer}</p>
        </Fade>
      )}
    </div>
  );
}

export default FaqAccordion;
