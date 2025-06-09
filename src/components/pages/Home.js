import React from "react";
import Header from "../sections/Header";
import HeroSection from "../sections/HeroSection";
import ShowReel from "../sections/ShowReel";
import ClientSection from "../sections/ClientSection";
import FeaturesSection from "../sections/FeaturesSection";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ShowReel />
      <FeaturesSection />

      <ClientSection />
      <Footer />
    </main>
  );
}
