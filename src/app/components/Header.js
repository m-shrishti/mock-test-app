export default function Header({ currentQuestion, totalQuestions, timeLeft }) {
    return (
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-[17px] font-medium text-gray-800">
                Question {currentQuestion + 1} of {totalQuestions}
            </h2>

            <div className="text-lg font-semibold text-red-500">
                Time Left: {Math.floor(timeLeft / 60)}:
                {String(timeLeft % 60).padStart(2, "0")}
            </div>
        </div>
    );
}