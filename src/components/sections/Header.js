import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = [
    {
      href: "/about",
      label: "About Us",
      ariaLabel: "Learn more about our company",
    },
    { href: "/pricing", label: "Pricing", ariaLabel: "View our pricing plans" },
    {
      href: "/blogs",
      label: "Resources",
      ariaLabel: "Access our resources and documentation",
    },
  ];

  return (
    <header
      className={`fixed w-[100%] top-0 z-50 transition-all duration-300 `}
      role="banner"
      aria-label="Main navigation"
    >
      <div className="container mx-auto lg: max-w-[800px]">
        <div className="relative flex mx-auto items-center justify-between px-3 py-4 ">
          {/* Logo */}
          <div
            onClick={() => {
              window.location.href = "/";
            }}
            className="flex items-center space-x-2 group"
            aria-label="WOW - Go to homepage"
          >
            <div className="relative overflow-hidden rounded-lg">
              {/* <Image
                src={wowlogo || "/placeholder.svg"}
                width={"auto"}
                height={32}
                alt="WOW company logo"
                priority
              /> */}
              hos +
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            role="navigation"
            aria-label="Primary navigation"
          >
            <ul className="flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative text-[var(--light-black)]  text-[15px] font-medium transition-all duration-300 primary_color_hover group"
                    aria-label={item.ariaLabel}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary-color)] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="https://app.wowreviews.co/Sign-In"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[var(--primary-color)] rounded-full transition-all duration-300  transform hover:-translate-y-0.5 focus:outline-none"
              aria-label="Start your free trial today"
            >
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 rounded-full bg-[var(--primary-color)] opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative p-2 text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg transition-colors duration-200"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                }`}
              />
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                }`}
              />
            </div>
          </button>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg transition-all duration-300 md:hidden ${
              isMenuOpen
                ? "opacity-100 visible transform translate-y-0"
                : "opacity-0 invisible transform -translate-y-4"
            }`}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="px-4 py-6 space-y-4">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-3 px-4 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 transform ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={item.ariaLabel}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/trial"
                  className={`block w-full py-3 px-4 text-center text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg transform ${
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${navigationItems.length * 50}ms`
                      : "0ms",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Start your free trial today"
                >
                  Start Free Trial
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
