export default function StartScreen({ onStart }) {
    return (
        <div className="flex h-screen items-center justify-center bg-white">
            <button
                onClick={onStart}
                className="bg-[#29C2D6] hover:bg-[#24aabf] text-white font-bold py-3 px-24 rounded-lg text-2xl shadow-sm transition-colors"
            >
                Begin Test
            </button>
        </div>
    );
}