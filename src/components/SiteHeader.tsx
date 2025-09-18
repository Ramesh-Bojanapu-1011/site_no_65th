import React from "react";
import { ModeToggle } from "./theme/ModeToggle";
import Image from "next/image";
import Link from "next/link";

const services = [
  { name: "Tax Planning", Link: "tax-planning" },
  { name: "Audit & Assurance", Link: "audit-assurance" },
  { name: "Bookkeeping", Link: "bookkeeping" },
  { name: "Payroll Management", Link: "payroll-management" },
  { name: "Financial Consulting", Link: "financial-consulting" },
  { name: "Investment Advisory", Link: "investment-advisory" },
];

const SiteHeader: React.FC = () => {
  const [homeOpen, setHomeOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);
  const [selectedLang, setSelectedLang] = React.useState("en");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Refs for dropdowns
  const homeRef = React.useRef<HTMLLIElement>(null);
  const servicesRef = React.useRef<HTMLLIElement>(null);
  const mobileHomeRef = React.useRef<HTMLLIElement>(null);
  const mobileServicesRef = React.useRef<HTMLLIElement>(null);
  const profileRef = React.useRef<HTMLDivElement>(null);
  const langRef = React.useRef<HTMLDivElement>(null);
  const mobileMenuRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If click is on the hamburger button, ignore (handled by onClick)
      if (
        document
          .getElementById("mobile-menu-toggle")
          ?.contains(event.target as Node)
      ) {
        return;
      }
      // Desktop dropdowns
      if (
        homeOpen &&
        homeRef.current &&
        !homeRef.current.contains(event.target as Node)
      ) {
        setHomeOpen(false);
      }
      if (
        servicesOpen &&
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
      // Mobile dropdowns
      if (
        homeOpen &&
        mobileHomeRef.current &&
        !mobileHomeRef.current.contains(event.target as Node)
      ) {
        setHomeOpen(false);
      }
      if (
        servicesOpen &&
        mobileServicesRef.current &&
        !mobileServicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (
        profileOpen &&
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
      if (
        langOpen &&
        langRef.current &&
        !langRef.current.contains(event.target as Node)
      ) {
        setLangOpen(false);
      }
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [homeOpen, servicesOpen, profileOpen, langOpen, mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-100 via-white to-blue-50 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900  border-b border-blue-200 dark:border-blue-900">
      <nav className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex">
          <Image
            src="/logo-stackly.png"
            alt="Finance Logo"
            className=""
            width={100}
            height={100}
          />
        </div>

        {/* Navigation */}
        <ul className="hidden min-[980px]:flex gap-8 items-center list-none">
          {/* Home Dropdown */}
          <li className="relative group" ref={homeRef}>
            <button
              className="px-3 py-2 text-base font-semibold text-blue-800 dark:text-blue-200  dark:bg-blue-950 rounded-lg  hover:bg-blue-100 dark:hover:bg-blue-900 transition flex items-center gap-1"
              onClick={() => setHomeOpen((o) => !o)}
            >
              Home <span className="ml-1">▼</span>
            </button>
            {homeOpen && (
              <ul className="absolute left-0 mt-2  dark:bg-blue-950 bg-white  rounded-lg w-36 animate-fadeIn border border-blue-100 dark:border-blue-900">
                <li>
                  <Link
                    href="/home1"
                    className="block px-4 py-2 text-blue-900 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900 rounded"
                  >
                    Home1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home2"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Home2
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              className="px-3 py-2 text-base font-semibold text-blue-800 dark:text-blue-200  dark:bg-blue-950 rounded-lg  hover:bg-blue-100 dark:hover:bg-blue-900 transition"
              href="/about-us"
            >
              About Us
            </Link>
          </li>
          {/* Services Dropdown */}
          <li className="relative group" ref={servicesRef}>
            <button
              className="px-3 py-2 text-base font-semibold text-blue-800 dark:text-blue-200  dark:bg-blue-950 rounded-lg  hover:bg-blue-100 dark:hover:bg-blue-900 transition flex items-center gap-1"
              onClick={() => setServicesOpen((o) => !o)}
            >
              Services <span className="ml-1">▼</span>
            </button>
            {servicesOpen && (
              <ul className="absolute bg-white left-0 mt-2  dark:bg-blue-950  rounded-lg w-56 animate-fadeIn border border-blue-100 dark:border-blue-900">
                {services.map((srv, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/${srv.Link}`}
                      className="block px-4 py-2 text-blue-900 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900 rounded"
                    >
                      {srv.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link
              className="px-3 py-2 text-base font-semibold text-blue-800 dark:text-blue-200  dark:bg-blue-950 rounded-lg  hover:bg-blue-100 dark:hover:bg-blue-900 transition"
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="px-3 py-2 text-base font-semibold text-blue-800 dark:text-blue-200  dark:bg-blue-950 rounded-lg  hover:bg-blue-100 dark:hover:bg-blue-900 transition"
              href="/contact-us"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Right Side: Language & Profile + Mobile Toggle */}
        <div className="min-[980px]:flex hidden items-center gap-6">
          {/* Language Switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen((o) => !o)}
              className={`border-2 border-blue-300 dark:border-blue-700 rounded-lg px-4 py-2 text-sm font-semibold text-blue-900 dark:text-blue-200  dark:bg-blue-950 hover:bg-blue-100 dark:hover:bg-blue-900 transition ${
                langOpen ? "ring-2 ring-blue-400 dark:ring-blue-600" : ""
              }`}
            >
              {selectedLang.toUpperCase()} <span className="ml-1">▼</span>
            </button>
            {langOpen && (
              <ul className="absolute bg-white right-0 mt-2  dark:bg-blue-950  rounded-lg w-24 animate-fadeIn border border-blue-100 dark:border-blue-900">
                {["en", "ar", "he"].map((lang) => (
                  <li key={lang}>
                    <button
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-blue-900 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900 rounded"
                    >
                      {lang.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen((o) => !o)}
              className={`flex items-center gap-2 px-4 py-2 text-base font-semibold text-blue-900 dark:text-blue-200  dark:bg-blue-950 rounded-lg  hover:bg-blue-100 dark:hover:bg-blue-900 transition ${
                profileOpen ? "ring-2 ring-blue-400 dark:ring-blue-600" : ""
              }`}
            >
              <span>Profile</span>
              <img
                src="/window.svg"
                alt="Profile"
                className="h-8 rounded-full border-2 border-blue-300 dark:border-blue-700 "
              />
              <span>▼</span>
            </button>
            {profileOpen && (
              <ul className="absolute bg-white right-0 mt-2  dark:bg-blue-950  rounded-lg w-36 animate-fadeIn border border-blue-100 dark:border-blue-900">
                <li>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-blue-900 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900 rounded"
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <button className="block w-full text-left px-4 py-2 text-blue-900 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900 rounded">
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
          <ModeToggle />
        </div>
        <div className="min-[980px]:hidden flex items-center">
          {/* Mobile Menu Toggle */}
          <button
            className="min-[980px]:hidden flex items-center justify-center p-2 rounded-full text-blue-900 dark:text-blue-200  dark:bg-blue-950  border-2 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900"
            aria-label="Open menu"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {/* Mobile Nav */}
      <nav
        ref={mobileMenuRef}
        className={`min-[980px]:hidden px-4 py-4 flex flex-col gap-3 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900  border-t border-blue-200 dark:border-blue-900 transition-all duration-200 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
        aria-label="Mobile menu"
      >
        <ul className="flex flex-col gap-3">
          <li ref={mobileHomeRef}>
            <button
              className="w-full text-left px-4 py-2 text-base font-semibold text-blue-900 dark:text-blue-200  dark:bg-blue-950 rounded-lg  hover:bg-blue-100 dark:hover:bg-blue-900 transition flex items-center gap-1"
              onClick={() => setHomeOpen((open) => !open)}
            >
              Home <span className="ml-1">▼</span>
            </button>
            {homeOpen && (
              <ul className="ml-4 mt-1  dark:bg-blue-950  rounded-lg border bg-white border-blue-100 dark:border-blue-900">
                <li>
                  <Link
                    href="/home1"
                    className="block bg-white px-4 py-2 text-blue-900 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900 rounded"
                  >
                    Home1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home2"
                    className="block px-4 py-2 bg-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Home2
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              className="w-full block px-4 py-2 text-base font-semibold text-blue-900 dark:text-blue-200  dark:bg-blue-950 rounded-lg  hover:bg-blue-100 dark:hover:bg-blue-900 transition"
              href="/about-us"
            >
              About Us
            </Link>
          </li>
          <li ref={mobileServicesRef}>
            <button
              className="w-full text-left px-4 py-2 text-base font-semibold text-blue-900 dark:text-blue-200  dark:bg-blue-950 rounded-lg  hover:bg-blue-100 dark:hover:bg-blue-900 transition flex items-center gap-1"
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services <span className="ml-1">▼</span>
            </button>
            {servicesOpen && (
              <ul className="ml-4 mt-1  dark:bg-blue-950  rounded-lg border border-blue-100 dark:border-blue-900">
                {services.map((srv, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/${srv.Link}`}
                      className="block px-4 py-2 text-blue-900 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900 rounded"
                    >
                      {srv.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link
              className="w-full block px-4 py-2 text-base font-semibold text-blue-900 dark:text-blue-200  dark:bg-blue-950 rounded-lg  hover:bg-blue-100 dark:hover:bg-blue-900 transition"
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="w-full block px-4 py-2 text-base font-semibold text-blue-900 dark:text-blue-200  dark:bg-blue-950 rounded-lg  hover:bg-blue-100 dark:hover:bg-blue-900 transition"
              href="/contact-us"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <div className="flex justify-between  items-center gap-4">
              {/* Language Switcher */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen((o) => !o)}
                  className="border border-gray-300 dark:border-gray-700 rounded px-3 py-1 text-sm text-gray-700 dark:text-gray-200  dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  {selectedLang.toUpperCase()} <span className="ml-1">▼</span>
                </button>
                {langOpen && (
                  <ul className="absolute right-0 mt-2  dark:bg-gray-800  rounded w-20 animate-fadeIn">
                    {["en", "ar", "he"].map((lang) => (
                      <li key={lang}>
                        <button
                          onClick={() => {
                            setSelectedLang(lang);
                            setLangOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                        >
                          {lang.toUpperCase()}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Profile Dropdown */}
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen((o) => !o)}
                  className="flex items-center gap-2 px-2 py-1 text-base font-medium text-blue-900 dark:text-blue-300  dark:bg-gray-900 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <span>Profile</span>
                  <img
                    src="/window.svg"
                    alt="Profile"
                    className="h-7 rounded-full"
                  />
                  <span>▼</span>
                </button>
                {profileOpen && (
                  <ul className="absolute right-0 mt-2  dark:bg-gray-800  rounded w-32 animate-fadeIn">
                    <li>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
              <ModeToggle />
            </div>
          </li>
        </ul>
      </nav>
      {/* Tailwind animation for dropdown */}
      <style>{`
        .animate-fadeIn { animation: fadeIn 0.2s; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </header>
  );
};

export default SiteHeader;
