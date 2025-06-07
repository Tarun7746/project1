import React from "react";
import Header from "../sections/Header";
import heroImg from "../../Assets/heroSectionImg.avif";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="heroSection">
        <img src={heroImg} alt="heroImg"></img>
      </div>
    </div>
  );
}
