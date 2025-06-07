import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../Assets/logoImg.svg";
import gsap from "gsap";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoRef = useRef(null);

  const navigationItems = [
    { to: "/Home", label: "Home" },
    { to: "/blogs", label: "Projects" },
    { to: "/blogs", label: "About" },
    { to: "/blogs", label: "Services" },
  ];

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const closeMenu = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-4 w-full z-50">
      <section className="container mx-auto lg:max-w-[900px] backdrop-blur-lg bg-[rgba(13,13,13,0.2)] rounded-[44px]">
        <nav className="flex justify-between items-center px-3 py-2">
          <Link to="/" className="w-[90px] h-[50px]" ref={logoRef}>
            <img
              src={logo}
              alt="WOW Reviews logo"
              className="w-full h-full object-cover rounded-lg"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-white text-base font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-color)] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/trial"
                className="px-6 py-2.5 text-sm bg-white text-black rounded-full hover:bg-[var(--primary-color)] hover:text-white transition"
              >
                Start Free Trial
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden p-2">
            <span className="relative w-6 h-6 block">
              <Menu
                className={`absolute text-[var(--white)] w-6 h-6 transition ${
                  isMenuOpen ? "opacity-0 rotate-180" : "opacity-100"
                }`}
              />
              <X
                className={`absolute w-6 h-6 text-[var(--white)] transition ${
                  isMenuOpen ? "opacity-100" : "opacity-0 -rotate-180"
                }`}
              />
            </span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden bg-white px-4 py-6 space-y-4 shadow-lg border-t">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t">
              <Link
                to="/trial"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition"
              >
                Start Free Trial
              </Link>
            </li>
          </ul>
        )}
      </section>
    </header>
  );
}
