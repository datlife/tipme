// my-component.tsx
"use client";

import React, { useState } from "react";
import styles from "../styles/styles.module.css"; // Adjust the path if needed

interface Option {
  id: string;
  text: string;
  emoji?: string; // Optional emoji for the option
}

const FeelingGood: React.FC = () => {

  const DEFAULT_TEXT = {
    Title: "Feeling tipsy 🥺🔥🫵"
  }
  const [selectedOption, setSelectedOption] = useState<Option["id"] | null>(
    null
  );
  const [title, setTitle] = useState<string>(DEFAULT_TEXT.Title); // Default title
  const [options, setOptions] = useState<Option[]>([
    { id: "a", text: "A 🫶🏻", emoji: "Cheek kiss" },
    { id: "b", text: "B 🔥", emoji: "A hug" },
    { id: "c", text: "C 🚀", emoji: "Good vibes and say cheeeseeee" },
  ]); // Pre-populated options

  const handleResetTitle = () => {
    setTitle(DEFAULT_TEXT.Title); // Reset to default title
  };
  const handleClick = (optionId: Option["id"]) => {
    setSelectedOption(optionId);
  };

  const handleOptionChange = (optionId: Option["id"], newText: string) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === optionId ? { ...option, text: newText } : option
      )
    );
  };

  return (
    <div className="feeling-good-container">
      <h1
        className="feeling-good-title"
        contentEditable={true}
        onInput={(e) => setTitle((e.target as HTMLHeadingElement).textContent || '')}
      >
        {title}
      </h1>
      {/* Editable title */}
      <div className="flippy-boxes">
        {options.map((option) => (
          <div
            key={option.id}
            className={`flippy-box ${
              selectedOption === option.id ? "Selected" : ""
            }`}
            onClick={() => handleClick(option.id)}
          >
            <div className="flippy-inner">
              <div className="flippy-front">
                <p
                  contentEditable={true}
                  onInput={(e) => handleOptionChange(option.id, (e.target as HTMLParagraphElement).textContent || '')}
                >
                  {option.text}
                </p>
              </div>
              <div className="flippy-back">
                <p>{option.emoji}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleResetTitle}>Reset Title</button>

    </div>
  );
};

export default FeelingGood;
