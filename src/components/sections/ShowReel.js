import React, { useEffect, useState } from "react";
import ShowReelVideo from "../../Assets/ShowreelVideo.mp4";
export default function ShowReel() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("showreel-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const offset = viewportHeight - rect.top;
      const scrollProgress = Math.min(Math.max(offset / viewportHeight, 0), 1);

      // Scale from 1 to 0.8
      const newScale = 1 - 0.2 * scrollProgress;
      setScale(parseFloat(newScale.toFixed(4)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="showreel-section "
      className="relative z-20 h-[150vh] bg-[var(--light-black)] text-white mt-[100vh]"
    >
      {/* Top fade-in section */}
      <div className="absolute -top-[99px] left-0 w-full h-[101px] overflow-visible bg-gradient-to-b from-[#0d0d0d00] via-[#0d0d0d44] to-[#0d0d0d]" />

      {/* Gradient Text with Scroll Scale */}
      <div className="pt-[5vh] overflow-hidden relative z-40 w-full">
        s{" "}
        <h1
          className="mx-auto text-center text-[9vw] font-extrabold w-full whitespace-nowrap px-[5vw] leading-[1] tracking-tight transition-transform duration-100 ease-linear"
          style={{
            transform: `scale(${scale})`,
            backgroundImage: "linear-gradient(to right, #ffffff, #111111)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SHOWREEL
        </h1>
      </div>
      <div className="mt-10 px-4 rounded-full w-full relative">
        <video
          className="w-full h-full rounded-[20px] object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={ShowReelVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
