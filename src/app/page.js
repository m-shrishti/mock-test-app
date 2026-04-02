"use client";

import { useState } from "react";
import { questions } from "../data/question";

const VolumeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#105b9b]">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
  </svg>
);

export default function Home() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOptions([]);
    } else {
      alert("Test Finished!");
      setHasStarted(false);
      setCurrentQuestion(0);
    }
  };

  const toggleOption = (index) => {
    if (selectedOptions.includes(index)) {
      setSelectedOptions(selectedOptions.filter(i => i !== index));
    } else {
      setSelectedOptions([...selectedOptions, index]);
    }
  };

  if (!hasStarted) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <button
          onClick={() => setHasStarted(true)}
          className="bg-[#29C2D6] hover:bg-[#24aabf] text-white font-bold py-3 px-24 rounded-lg text-2xl shadow-sm transition-colors"
        >
          Begin Test
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex justify-center py-8">
      <div className="w-full max-w-5xl px-8 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-[17px] font-medium text-gray-800">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
        </div>

        {/* Question Box */}
        <div className="border border-gray-200 rounded-xl p-5 mb-6 flex items-start justify-between shadow-sm">
          <p className="text-[18px] text-gray-800 break-words pr-4 leading-relaxed font-normal">
            {question.question}
          </p>
          <button className="flex-shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors mt-0.5" aria-label="Listen to question">
            <VolumeIcon />
          </button>
        </div>

        {/* Instruction */}
        <p className="text-[15px] text-gray-800 mb-4">Check ALL that apply</p>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-auto">
          {question.options.map((option, index) => (
            <div
              key={index}
              onClick={() => toggleOption(index)}
              className="flex items-center justify-between px-4 py-3 bg-[#f2f4f6] rounded-lg cursor-pointer hover:bg-[#e2e5e8] transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-[22px] h-[22px] flex-shrink-0 border flex items-center justify-center bg-white ${selectedOptions.includes(index) ? 'border-gray-800' : 'border-gray-800'}`}>
                  {selectedOptions.includes(index) && (
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  )}
                </div>
                <span className="text-gray-800 text-[15px]">{option}</span>
              </div>
              <button className="p-1 hover:bg-gray-300 rounded-full transition-colors" aria-label="Listen to option">
                <VolumeIcon />
              </button>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-16 flex justify-end items-center">
          <button
            onClick={handleNext}
            className="bg-[#aaaaaa] hover:bg-gray-500 text-white font-medium py-2.5 px-10 rounded-lg text-sm transition-colors ml-4"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}