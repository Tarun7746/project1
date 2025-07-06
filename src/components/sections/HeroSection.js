import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImg from "../../Assets/CoadingBgHero.jpg";
import { Typewriter } from "react-simple-typewriter";
export default function HeroSection() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30, filter: "blur(5px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1.5, ease: "power3.out", stagger: 0.2 }
    );
  }, []);

  return (
    <section
      className="fixed top-0  h-screen w-full flex items-center justify-center text-white text-center px-4 md:px-10 z-10"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Hero section"
    >
      <span
        className="absolute inset-0 bg-black bg-opacity-70"
        aria-hidden="true"
      ></span>

      <header className="relative z-10 max-w-5xl mx-auto">
        <h1
          ref={headingRef}
          className="text-[40px] md:text-[50px] lg:text-[70px] font-semibold mb-5 leading-[50px] lg:leading-[80px] md:leading-[60px]"
          style={{ fontFamily: "var(--montserrat_font)" }}
        >
          Building Fast, Modern Frontends with{" "}
          <span className="text-purple-400">
            <Typewriter
              words={["React.js", "Next.js", "Tailwind ", " Bootstrap"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p
          ref={paragraphRef}
          className="max-w-[78%] mx-auto text-lg md:text-xl text-gray-200 mb-8"
        >
          Frontend Developer with 1+ Years of Experience in React.js, Next.js,
          and Tailwind CSS. I turn complex designs into clean, scalable, and
          responsive interfaces.
        </p>
        <nav
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          aria-label="Call to actions"
        >
          <a
            ref={(el) => (buttonsRef.current[0] = el)}
            href="tel:+97145757813"
            className="bg-purple-400 hover:bg-purple-500 text-black font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300"
          >
            Download Resume
          </a>

          <button
            ref={(el) => (buttonsRef.current[1] = el)}
            className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-md hover:bg-purple-500 transition-all duration-300"
          >
            View Projects
          </button>
        </nav>
      </header>
    </section>
  );
}
