"use client";

import { useEffect, useState } from "react";
import { questions } from "../../data/question";

export default function ResultPage() {
    const [score, setScore] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);

    useEffect(() => {
        const savedAnswers = JSON.parse(localStorage.getItem("mockTestAnswers")) || {};

        let correct = 0;

        questions.forEach((question, index) => {
            const userAnswerIndexes = savedAnswers[index] || [];
            const userAnswers = userAnswerIndexes.map((i) => question.options[i]);

            const correctOptions = question.correctOptions;

            const isCorrect =
                userAnswers.length === correctOptions.length &&
                userAnswers.every((ans) => correctOptions.includes(ans));

            if (isCorrect) {
                correct++;
            }
        });

        setCorrectCount(correct);
        setScore(Math.round((correct / questions.length) * 100));
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="bg-gray-100 p-8 rounded-xl shadow-md text-center w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6">Test Result</h1>

                <p className="text-lg mb-2">
                    Total Questions: {questions.length}
                </p>

                <p className="text-lg mb-2 text-green-600 font-semibold">
                    Correct Answers: {correctCount}
                </p>

                <p className="text-lg mb-2 text-red-500 font-semibold">
                    Wrong Answers: {questions.length - correctCount}
                </p>

                <p className="text-xl font-bold mt-4">
                    Score: {score}%
                </p>
            </div>
        </div>
    );
}