export default function ActionButtons({
    handlePrevious,
    handleCheckAnswer,
    handleNext,
    handleFinishTest,
    selectedOptions,
    currentQuestion
}) {
    return (
        <div className="mt-16 flex flex-col gap-3 md:flex-row md:justify-between md:items-center">

            <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`w-full md:w-auto text-white font-medium py-2.5 px-10 rounded-lg text-sm transition-colors
        ${currentQuestion === 0
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-[#aaaaaa] hover:bg-gray-500"}`}
            >
                Previous
            </button>

            <button
                onClick={handleCheckAnswer}
                disabled={selectedOptions.length === 0}
                className={`w-full md:w-auto text-white font-medium py-2.5 px-10 rounded-lg text-sm transition-colors
        ${selectedOptions.length === 0
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-[#aaaaaa] hover:bg-gray-500"}`}
            >
                Check Answer
            </button>

            <button
                onClick={handleNext}
                disabled={selectedOptions.length === 0}
                className={`w-full md:w-auto text-white font-medium py-2.5 px-10 rounded-lg text-sm transition-colors
        ${selectedOptions.length === 0
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-[#aaaaaa] hover:bg-gray-500"}`}
            >
                Next
            </button>

            <button
                onClick={handleFinishTest}
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-10 rounded-lg text-sm"
            >
                Finish Test
            </button>
        </div>
    );
}