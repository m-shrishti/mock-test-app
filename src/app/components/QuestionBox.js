import VolumeIcon from "./VolumeIcon";

export default function QuestionBox({ question }) {
    return (
        <div className="border border-gray-200 rounded-xl p-5 mb-6 flex items-start justify-between shadow-sm">
            <p className="text-[18px] text-gray-800 break-words pr-4 leading-relaxed font-normal">
                {question}
            </p>

            <button
                className="flex-shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors mt-0.5"
                aria-label="Listen to question"
            >
                <VolumeIcon />
            </button>
        </div>
    );
}