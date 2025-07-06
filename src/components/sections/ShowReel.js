import React, { useEffect, useRef, useState } from "react";
import ShowReelVideo from "../../Assets/ShowreelVideo.mp4";
export default function ShowReel() {
  const [scale, setScale] = useState(1);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
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
  const platformCircles = {
    inner: [
      {
        name: "Google",
        color: "#4285F4",
        angle: 0,
        logo: GoogleLogo,
      },
      {
        name: "Facebook",
        color: "#1877F2",
        angle: 90,
        logo: FaceBookLogo,
      },
      {
        name: "Play Store",
        color: "#E4405F",
        angle: 180,
        logo: PlaystoreIcon,
      },
      {
        name: "Make My Trip",
        color: "#eb2226",
        angle: 270,
        logo: mmtIcon,
      },
    ],
    middle: [
      {
        name: "Ambition Box",
        color: "#546efe",
        angle: 30,
        logo: ambiboxIcon,
      },
      {
        name: "Glassdoor",
        color: "#0cab40",
        angle: 75,
        logo: glassdoreIcon,
      },
      {
        name: "TripAdvisor",
        color: "#00AF87",
        angle: 120,
        logo: TripadvisorLogo,
      },
      {
        name: "Yelp",
        color: "#FF1744",
        angle: 165,
        logo: YelpLogo,
      },
      {
        name: "Agoda",
        color: "#FF9900",
        angle: 210,
        logo: Agodaicon,
      },
      {
        name: "Booking",
        color: "#293b7c",
        angle: 255,
        logo: bookingIcon,
      },
      {
        name: "Dine Out",
        color: "#f97056",
        angle: 300,
        logo: DineOuticon,
      },
      {
        name: "GoIbibo",
        color: "#f06735",
        angle: 345,
        logo: goIcon,
      },
    ],
    outer: [
      {
        name: "Trivago",
        color: "#BD081C",
        angle: 15,
        logo: trivagoIcon,
      },
      {
        name: "Swiggy",
        color: "#f1871d",
        angle: 45,
        logo: SwigyIcon,
      },
      {
        name: "Zomato",
        color: "#e23744",
        angle: 75,
        logo: zomatoIcon,
      },
      {
        name: "Just Dial",
        color: "#f06735",
        angle: 105,
        logo: JdIcon,
      },
      {
        name: "Sulekha",
        color: "#f06735",
        angle: 135,
        logo: SulekhaIcon,
      },
      {
        name: "Airbnb",
        color: "#fe5b5f",
        angle: 165,
        logo: airbnbIcon,
      },
      {
        name: "Ebay",
        color: "#8bc24b",
        angle: 195,
        logo: ebayIcon,
      },
      {
        name: "App Store",
        color: "#00AFF0",
        angle: 225,
        logo: ApstoreIcon,
      },
      {
        name: "Printest",
        color: "#f52026",
        angle: 255,
        logo: PrintestLogo,
      },
      {
        name: "Yatra",
        color: "#f52026",
        angle: 285,
        logo: YatraIcon,
      },
      {
        name: "Grubhub",
        color: "#fb8d01",
        angle: 315,
        logo: grubhubIcon,
      },
      {
        name: "G2",
        color: "#fe482c",
        angle: 345,
        logo: gtwoIcon,
      },
    ],
  };

  const renderPlatforms = (platforms, radius, ring) =>
    platforms.map((platform, index) => {
      const { angle, color, name, logo } = platform;
      const x = Math.cos((angle * Math.PI) / 180) * radius;
      const y = Math.sin((angle * Math.PI) / 180) * radius;

      return (
        <div
          key={`${ring}-${name}`}
          className={`absolute w-12 h-12 ${
            isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } transition-all duration-500`}
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            transitionDelay: `${index * 100}ms`,
          }}
        >
          <div
            className="relative w-full h-full bg-white rounded-full shadow-md flex items-center justify-center border hover:scale-110 transition-all duration-300 cursor-pointer group"
            onMouseEnter={() => setHoveredPlatform(name)}
            onMouseLeave={() => setHoveredPlatform(null)}
            title={name}
            style={{
              borderColor: hoveredPlatform === name ? color : "#e2e8f0",
            }}
          >
            {logo ? (
              <div
                className="w-8 h-8 rounded-full overflow-hidden bg-white flex items-center justify-center relative z-[1000]"
                onMouseEnter={() => setHoveredPlatform(name)}
                onMouseLeave={() => setHoveredPlatform(null)}
                title={name}
                style={{
                  borderColor: hoveredPlatform === name ? color : "#e2e8f0",
                }}
              >
                <img
                  src={logo}
                  alt={name}
                  width={32}
                  height={32}
                  className="object-contain w-full h-full"
                />
              </div>
            ) : (
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: color }}
              >
                {name.charAt(0)}
              </div>
            )}

            {/* Line to center */}
            <div
              className={`absolute top-1/2 left-1/2 w-px bg-gray-300 transition-all duration-700 ${
                isInView ? "opacity-20" : "opacity-0"
              }`}
              style={{
                height: `${radius - 24}px`,
                transformOrigin: "top",
                transform: `translate(-50%, -50%) rotate(${angle + 180}deg)`,
                transitionDelay: `${500 + index * 50}ms`,
              }}
            />

            {/* Tooltip */}
            {/* {hoveredPlatform === name && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded text-xs whitespace-nowrap animate-fade-in z-10">
                {name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
              </div>
            )} */}
          </div>
        </div>
      );
    });

  return (
    <section
      id="showreel-section "
      className="relative z-20 h-[100vh] bg-[var(--light-black)] text-white mt-[100vh]"
    >
      {/* Top fade-in section */}
      <div className="absolute -top-[99px] left-0 w-full h-[101px] overflow-visible bg-gradient-to-b from-[#0d0d0d00] via-[#0d0d0d44] to-[#0d0d0d]" />

      {/* Gradient Text with Scroll Scale */}
      <div className="pt-[5vh] overflow-hidden relative z-40 w-full">
        <h1
          className="mx-auto text-center text-[9vw] font-extrabold w-full whitespace-nowrap px-[5vw] leading-[1] tracking-tight transition-transform duration-100 ease-linear"
          style={{
            transform: `scale(${scale})`,
            backgroundImage: "linear-gradient(to right, #ffffff, #111111)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About us
        </h1>
      </div>
      <div className="mt-20 px-4 rounded-full w-full relative">
        {/* Content Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          {/* Left Animated Circle Planets */}
          <div
            ref={imageRef}
            className="relative w-full h-[350px] flex items-center justify-center"
          >
            <div className="relative w-[250px] h-[250px] rounded-full border-2 border-purple-500 animate-spin-slow">
              <div className="absolute planet bg-purple-400 text-sm text-white px-2 py-1 rounded-full top-0 left-1/2 -translate-x-1/2">
                React.js
              </div>
              <div className="absolute planet bg-blue-400 text-sm text-white px-2 py-1 rounded-full bottom-0 left-1/2 -translate-x-1/2">
                Next.js
              </div>
              <div className="absolute planet bg-green-500 text-sm text-white px-2 py-1 rounded-full top-1/2 left-0 -translate-y-1/2">
                Tailwind
              </div>
              <div className="absolute planet bg-yellow-500 text-sm text-white px-2 py-1 rounded-full top-1/2 right-0 -translate-y-1/2">
                GitHub
              </div>
              <div className="absolute planet bg-pink-500 text-sm text-white px-2 py-1 rounded-full top-[15%] left-[15%]">
                CI/CD
              </div>
              <div className="absolute planet bg-indigo-500 text-sm text-white px-2 py-1 rounded-full bottom-[15%] right-[15%]">
                Material UI
              </div>
            </div>
          </div>

          {/* Right Paragraph */}
          <div>
            <p
              ref={paragraphRef}
              className="text-lg md:text-xl text-gray-300 leading-8 md:leading-9"
            >
              I'm a{" "}
              <span className="text-purple-400 font-semibold">
                Frontend Developer
              </span>{" "}
              with over{" "}
              <span className="font-semibold text-white">
                2 years of experience
              </span>{" "}
              crafting intuitive and scalable web applications using{" "}
              <span className="text-purple-400">React.js</span> and{" "}
              <span className="text-purple-400">Next.js</span>. I’ve
              collaborated with diverse clients across the{" "}
              <span className="text-white">USA</span>,{" "}
              <span className="text-white">Sweden</span>, and other global
              locations, building fast, SEO-friendly and maintainable
              interfaces.
              <br />
              <br />
              With strong command over modern frameworks and UI libraries like{" "}
              <span className="text-purple-400">Tailwind CSS</span> and{" "}
              <span className="text-purple-400">Bootstrap</span>, I bring clean
              code and pixel-perfect designs to life. Currently, I’m focused on
              building high-performance UIs and contributing to innovative
              products that create real business value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
