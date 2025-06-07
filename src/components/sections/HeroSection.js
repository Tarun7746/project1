import React from "react";
import heroImg from "../../Assets/heroSectionImg.avif";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 text-center px-4 md:px-10 max-w-5xl ">
        <h1
          className="text-[40px] md:text-[50px] lg:text-[70px] font-semibold mb-5 leading-[50px] lg:leading-[80px] md:leading-[60px]  "
          style={{ fontFamily: "var(--monseret_font)" }}
        >
          Bringing Stories to Life One Frame at a Time.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          We create high-quality commercials, corporate videos, social media
          content, and more—bringing your ideas to life with expert
          storytelling.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+97145757813"
            className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-[var(--white)] font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Call +971 4 575 7813
          </a>
          <button className="bg-[var(--white)] text-[var(--black)] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[var(--primary-hover)] hover:text-[var(--white)] transition-all duration-300 transform hover:-translate-y-0.5">
            Request a Callback
          </button>
        </div>
      </div>
    </section>
  );
}
