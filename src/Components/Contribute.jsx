export default function Contribute({ onContribute }) {
    return(
        <button
            className="cursor-pointer rounded-lg bg-[#800020] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
            onClick={onContribute}
                >
            Contribute
        </button>
    );
}
