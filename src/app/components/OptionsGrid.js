import VolumeIcon from "./VolumeIcon";

export default function OptionsGrid({
    question,
    selectedOptions,
    toggleOption,
    showAnswer
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-auto">
            {question.options.map((option, index) => (
                <div
                    key={index}
                    onClick={() => !showAnswer && toggleOption(index)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors
          ${showAnswer
                            ? question.correctOptions.includes(option)
                                ? "bg-green-200"
                                : selectedOptions.includes(index)
                                    ? "bg-red-200"
                                    : "bg-[#f2f4f6]"
                            : "bg-[#f2f4f6] hover:bg-[#e2e5e8]"
                        }`}
                >
                    <div className="flex items-center space-x-4">
                        <div className={`w-[22px] h-[22px] flex-shrink-0 border flex items-center justify-center bg-white border-gray-800`}>
                            {selectedOptions.includes(index) && (
                                <svg
                                    className="w-4 h-4 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </div>

                        <span className="text-gray-800 text-[15px]">{option}</span>
                    </div>

                    <button className="p-1 hover:bg-gray-300 rounded-full transition-colors">
                        <VolumeIcon />
                    </button>
                </div>
            ))}

            {showAnswer && (
                <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50 col-span-2">
                    <p className="text-sm text-gray-700 mb-2">
                        <span className="font-semibold">Category:</span> {question.category}
                    </p>

                    <p className="text-sm text-gray-700">
                        <span className="font-semibold">Explanation:</span> {question.explanation}
                    </p>
                </div>
            )}
        </div>
    );
}