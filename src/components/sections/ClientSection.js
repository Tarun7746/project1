import React from "react";

export default function ClientSection() {
  const dummyLogos = [
    "https://framerusercontent.com/images/SazDWfhQjicKvuGmovdx0ffs.webp?scale-down-to=512",
    "https://framerusercontent.com/images/Nhp3GPcQ8PfNkWgbBFroXokgLc.png",
    "https://framerusercontent.com/images/qSc4aeSOhhWRNKW2LiUBjjgW3c.png",
    "https://framerusercontent.com/images/FIU2Dnk9TFnMgelhUl7GiFHv4c.png?scale-down-to=512",
    "https://framerusercontent.com/images/os73eSKVW4gBZn2byVzP2OFM.png",
    "https://framerusercontent.com/images/5ghcacUXSfLLdw6hJ3fy2AQOjOI.svg",
  ];
  return (
    <section className="bg-[var(--light-black)] mt-[-20px] relative z-20 py-12 px-4 text-center overflow-hidden">
      <h2 className="text-white text-[40px] font-medium mb-8">
        Standing Tall with Our Clients
      </h2>

      <div className="max-w-[1200px] mx-auto relative w-full h-32 overflow-hidden border border-gray-700 rounded-full">
        <div className="absolute flex animate-marquee whitespace-nowrap divide-x divide-gray-700">
          {[...dummyLogos, ...dummyLogos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-48 h-32 px-6"
            >
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="max-h-14 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
