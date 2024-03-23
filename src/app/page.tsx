// my-component.tsx
"use client";

import React, { useState } from "react";
import styles from "../styles/styles.module.css"; // Adjust the path if needed

interface Option {
  id: string;
  front: string;
  back: string; // Optional emoji for the option
}

const FeelingGood: React.FC = () => {

  const DEFAULT_TEXT = {
    Title: "Feeling tipsy 🥺"
  }
  const [selectedOption, setSelectedOption] = useState<Option["id"] | null>(
    null
  );
  const [title, setTitle] = useState<string>(DEFAULT_TEXT.Title); // Default title
  const [options, setOptions] = useState<Option[]>([
    { id: "a", front: "A 🫶🏻", back: "Cheek kiss" },
    { id: "b", front: "B 🔥", back: "A hug" },
    { id: "c", front: "C 🚀", back: "Have a good time for me!" },
  ]); // Pre-populated options

  const handleResetTitle = () => {
    setTitle(DEFAULT_TEXT.Title); // Reset to default title
  };

  const handleClick = (optionId: Option["id"]) => {
    setSelectedOption((prevSelectedOption) => 
      prevSelectedOption === optionId ? null : optionId
    );
  };
  

  const handleOptionChange = (optionId: Option["id"], newText: string, isFront: boolean) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === optionId ? { ...option, ...(isFront ? { front: newText } : { back: newText }) } : option
      )
    );
  };

  return (
    <div className="feeling-good-container">
      <h1
        className="feeling-good-title  text-5xl margin-top-2xl"
        contentEditable={true}
        onClick={(e) => setTitle((e.target as HTMLHeadingElement).textContent || '')}
      >
        {title}
      </h1>
      {/* Editable title */}
      <div className="flippy-boxes">
        {options.map((option) => (
          <button
            key={option.id}
            className={`flippy-box text-center bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ${
              selectedOption === option.id ? "selected" : ""
            }`}
            onClick={() => handleClick(option.id)}
          >
            <div className="flippy-inner">
              <div className="flippy-front">
                <p
                  contentEditable={true}
                  onClick={(e) => handleOptionChange(option.id, (e.target as HTMLParagraphElement).textContent || '', true)}
                >
                  {option.front}
                </p>
              </div>
              <div className="flippy-back">
                <p>{option.back}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
      <button className="" onClick={handleResetTitle}>Reset</button>
      <button className="" onClick={handleResetTitle}>Save change</button>
    </div>
  );
};

export default FeelingGood;
