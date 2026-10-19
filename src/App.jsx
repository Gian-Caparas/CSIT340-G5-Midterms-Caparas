import { useState } from "react";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

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
      <Navbar />
      <Hero
        stars={stars}
        downloads={downloads}
        issues={issues}
        onStar={handleStar}
        onDownload={handleDownload}
        onReport={handleReport}
        onReset={handleReset}
      />
      <Features />
      <Footer />
    </div>
  );
}

export default App;