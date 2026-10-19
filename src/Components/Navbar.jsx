import Intro from "../Components/Intro";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#800020] px-20 py-6 text-[#FFF9F2]">
        <Intro />
        <ul className="flex gap-10 text-xl">
          <li>Docs</li>
          <li>Components</li>
            <li>GitHub</li>
        </ul>
        <p className="rounded-full bg-[#D45060] px-5 py-2 text-lg font-bold">v1.0</p>
    </nav>
  )
}