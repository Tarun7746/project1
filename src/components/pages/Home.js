import React from "react";
import Header from "../sections/Header";
import HeroSection from "../sections/HeroSection";
import ShowReel from "../sections/ShowReel";
import ClientSection from "../sections/ClientSection";
import FeaturesSection from "../sections/FeaturesSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ShowReel />
      <FeaturesSection />

      <ClientSection />
    </div>
  );
}
