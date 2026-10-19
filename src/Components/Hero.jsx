import Stats from "./Stats";
import Contribute from "./Contribute";
export default function Hero({
  stars,
  downloads,
  issues,
  onStar,
  onDownload,
  onReport,
  onReset,
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-20 py-8">
        <header className="px-20 pt-8 text-center">
            <h2 className="text-7xl font-bold">Build pages faster.</h2>
            <p className="mt-5 text-2xl text-[#000000]">An open-source component kit for React.</p>
            <p className="mt-2 text-xl text-[#000000]">Made by Caparas</p>
        </header>

        <div className="flex justify-center gap-4 py-6">
            <button
            className="cursor-pointer rounded-lg bg-[#800020] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
            onClick={onStar}
            >
            Star
            </button>
            <button
            className="cursor-pointer rounded-lg bg-[#D45060] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
            onClick={onDownload}
            >
            Download
            </button>
            <button
            className="cursor-pointer rounded-lg bg-[#000000] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
            onClick={onReport}
            >
            Report issue
            </button>
            <button
            className="cursor-pointer rounded-lg border border-[#800020] px-8 py-3 text-xl font-bold"
            onClick={onReset}
            >
            Reset
            </button>
            <Contribute/>
        </div>

        <div className="flex justify-center gap-6 pb-8">
            <Stats stars={stars} downloads={downloads} issues={issues} />
        </div>
    </div>

    
  )
}