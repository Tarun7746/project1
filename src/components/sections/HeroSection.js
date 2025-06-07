import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImg from "../../Assets/heroSectionImg.avif";

export default function HeroSection() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    // Heading animation (smoky fade-in)
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 30,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.out",
      }
    );

    // Paragraph fade-in
    gsap.fromTo(
      paragraphRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        ease: "power2.out",
      }
    );

    // Buttons slide-up
    gsap.fromTo(
      buttonsRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,

        duration: 1,
        delay: 1.5,
        ease: "power3.out",
        stagger: 0.2, // one after another
      }
    );
  }, []);

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

      <div className="relative z-10 text-center px-4 md:px-10 max-w-5xl">
        <h1
          ref={headingRef}
          className="text-[40px] md:text-[50px] lg:text-[70px] font-semibold mb-5 leading-[50px] lg:leading-[80px] md:leading-[60px]"
          style={{ fontFamily: "var(--montserrat_font)" }}
        >
          Bringing Stories to Life One Frame at a Time.
        </h1>

        <p
          ref={paragraphRef}
          className="max-w-[78%] mx-auto text-lg md:text-[xl] text-gray-200 mb-8"
        >
          We create high-quality commercials, corporate videos, social media
          content, and more—bringing your ideas to life with expert
          storytelling.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            ref={(el) => (buttonsRef.current[0] = el)}
            href="tel:+97145757813"
            className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-[var(--white)] font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300"
          >
            Call +971 4 575 7813
          </a>
          <button
            ref={(el) => (buttonsRef.current[1] = el)}
            className="bg-[var(--white)] text-[var(--black)] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[var(--primary-hover)] hover:text-[var(--white)] transition-all duration-300"
          >
            Request a Callback
          </button>
        </div>
      </div>
    </section>
  );
}
