"use client";
import { useSelector, useDispatch } from "react-redux";
import { startTimer, tick } from "../store/timerSlice";

import { useState, useEffect } from "react";
import { questions } from "../data/question";
import { useRouter } from "next/navigation";

import VolumeIcon from "./components/VolumeIcon";
import StartScreen from "./components/StartScreen";
import Header from "./components/Header";
import QuestionBox from "./components/QuestionBox";
import OptionsGrid from "./components/OptionsGrid";
import ActionButtons from "./components/ActionButtons";
import { nextQuestion, prevQuestion, resetQuestion } from "../store/questionSlice";

export default function Home() {
  const [hasStarted, setHasStarted] = useState(false);
  const currentQuestion = useSelector(
    (state) => state.question.currentQuestion
  );
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [answers, setAnswers] = useState({});
  const router = useRouter();
  const [showAnswer, setShowAnswer] = useState(false);
  const dispatch = useDispatch();
  const timeLeft = useSelector((state) => state.timer.timeLeft);
  const isRunning = useSelector((state) => state.timer.isRunning);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, dispatch]);

  useEffect(() => {
    if (timeLeft === 0) {
      alert("Time is up! Test finished.");
      setHasStarted(false);
      dispatch(resetQuestion());
      setSelectedOptions([]);
      setShowAnswer(false);
    }
  }, [timeLeft]);

  const handleCheckAnswer = () => {
    setShowAnswer(true);
  };

  const handleNext = () => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: selectedOptions
    }));

    if (currentQuestion < questions.length - 1) {
      dispatch(nextQuestion());
      setSelectedOptions([]);
      setShowAnswer(false);
    } else {
      alert("Test Finished!");
      setHasStarted(false);
      dispatch(resetQuestion());
    }
  };
  const handleFinishTest = () => {

    const finalAnswers = {
      ...answers,
      [currentQuestion]: selectedOptions
    };

    localStorage.setItem("mockTestAnswers", JSON.stringify(finalAnswers));

    router.push("/result");
  };
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      const prevQuestionIndex = currentQuestion - 1;
      dispatch(prevQuestion());
      setSelectedOptions(answers[prevQuestionIndex] || []);
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
      <StartScreen
        onStart={() => {
          setHasStarted(true);
          dispatch(startTimer());
        }}
      />
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex justify-center py-8">
      <div className="w-full max-w-5xl px-8 flex flex-col">
        {/* Header */}
        <Header
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          timeLeft={timeLeft}
        />

        {/* Question Box */}
        <QuestionBox question={question.question} />

        {/* Instruction */}
        <p className="text-[15px] text-gray-800 mb-4">Check ALL that apply</p>

        {/* Options Grid */}
        <OptionsGrid
          question={question}
          selectedOptions={selectedOptions}
          toggleOption={toggleOption}
          showAnswer={showAnswer}
        />

        {/* Action Buttons */}
        <ActionButtons
          handlePrevious={handlePrevious}
          handleCheckAnswer={handleCheckAnswer}
          handleNext={handleNext}
          handleFinishTest={handleFinishTest}
          selectedOptions={selectedOptions}
          currentQuestion={currentQuestion}
        />
      </div>
    </div>
  );
}