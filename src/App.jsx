import { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  const [stars, setStars] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [issues, setIssues] = useState(5);

  function handleStar() {
    setStars(stars + 1);
  }

  function handleDownload() {
    setDownloads(downloads + 1);
  }

  function handleReport() {
    setIssues(issues + 1);
  }

  function handleReset() {
    setStars(0);
    setDownloads(0);
    setIssues(5);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FFF9F2] text-[#800020]">
      {/*Navbar*/}
      <nav className="flex items-center justify-between bg-[#800020] px-20 py-6 text-[#FFF9F2]">
        {/*Header*/}
        <h1 className="text-3xl font-bold">Maroon UI</h1>
        <ul className="flex gap-10 text-xl">
          <li>Docs</li>
          <li>Components</li>
          <li>GitHub</li>
        </ul>
        <p className="rounded-full bg-[#D45060] px-5 py-2 text-lg font-bold">v1.0</p>
      </nav>

      {/*Hero*/}
      <Hero
        stars={stars}
        downloads={downloads}
        issues={issues}
        onStar={handleStar}
        onDownload={handleDownload}
        onReport={handleReport}
        onReset={handleReset}
      />

      <main className="grid grid-cols-3 gap-8 px-20">
        <div className="rounded-xl bg-[#F3E6D5] p-6">
          <span className="rounded-full bg-[#800020] px-4 py-1 text-base font-bold text-[#FFF9F2]">
            Free
          </span>
          <h3 className="mt-8 text-3xl font-bold">Open source</h3>
          <p className="mt-3 text-xl text-[#000000]">Read the code and use it in any project.</p>
        </div>
        <div className="rounded-xl bg-[#F3E6D5] p-6">
          <span className="rounded-full bg-[#800020] px-4 py-1 text-base font-bold text-[#FFF9F2]">
            Small
          </span>
          <h3 className="mt-8 text-3xl font-bold">Lightweight</h3>
          <p className="mt-3 text-xl text-[#000000]">Import only the components the page uses.</p>
        </div>
        <div className="rounded-xl bg-[#F3E6D5] p-6">
          <span className="rounded-full bg-[#800020] px-4 py-1 text-base font-bold text-[#FFF9F2]">
            Simple
          </span>
          <h3 className="mt-8 text-3xl font-bold">Easy to learn</h3>
          <p className="mt-3 text-xl text-[#000000]">Every component takes a few plain props.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;