import React from "react";
import Header from "../sections/Header";
import HeroSection from "../sections/HeroSection";
import ShowReel from "../sections/ShowReel";
import ClientSection from "../sections/ClientSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ShowReel />
      <ClientSection />
    </div>
  );
}
