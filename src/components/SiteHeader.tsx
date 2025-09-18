import React from "react";
import { ModeToggle } from "./theme/ModeToggle";
import Image from "next/image";

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
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav className="    flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
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
          <li className="relative" ref={homeRef}>
            <button
              className="px-2 py-1 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition"
              onClick={() => setHomeOpen((o) => !o)}
            >
              Home <span className="ml-1">▼</span>
            </button>
            {homeOpen && (
              <ul className="absolute left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded w-32 animate-fadeIn">
                <li>
                  <a
                    href="/home1"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Home1
                  </a>
                </li>
                <li>
                  <a
                    href="/home2"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Home2
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              className="px-2 py-1 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition"
              href="/about"
            >
              About Us
            </a>
          </li>
          {/* Services Dropdown */}
          <li className="relative" ref={servicesRef}>
            <button
              className="px-2 py-1 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition"
              onClick={() => setServicesOpen((o) => !o)}
            >
              Services <span className="ml-1">▼</span>
            </button>
            {servicesOpen && (
              <ul className="absolute left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded w-48 animate-fadeIn">
                {services.map((srv, idx) => (
                  <li key={idx}>
                    <a
                      href={`/${srv.Link}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {srv.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <a
              className="px-2 py-1 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition"
              href="/blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="px-2 py-1 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition"
              href="/contact"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Right Side: Language & Profile + Mobile Toggle */}
        <div className="min-[980px]:flex hidden items-center gap-4">
          {/* Language Switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="border border-gray-300 dark:border-gray-700 rounded px-3 py-1 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {selectedLang.toUpperCase()} <span className="ml-1">▼</span>
            </button>
            {langOpen && (
              <ul className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded w-20 animate-fadeIn">
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
              className="flex items-center gap-2 px-2 py-1 text-base font-medium text-blue-900 dark:text-blue-300 bg-white dark:bg-gray-900 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
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
              <ul className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded w-32 animate-fadeIn">
                <li>
                  <a
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    My Profile
                  </a>
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
        <div className="min-[980px]:hidden flex items-center">
          {/* Mobile Menu Toggle */}
          <button
            className="min-[980px]:hidden flex items-center justify-center p-2 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
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
        className={`min-[980px]:hidden px-4 py-2 flex flex-col gap-2 bg-white dark:bg-gray-900 transition-all duration-200 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
        aria-label="Mobile menu"
      >
        <ul className="flex flex-col gap-2">
          <li ref={mobileHomeRef}>
            <button
              className="w-full text-left px-2 py-1 text-base font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 rounded"
              onClick={() => setHomeOpen((open) => !open)}
            >
              Home <span className="ml-1">▼</span>
            </button>
            {homeOpen && (
              <ul className="ml-4 mt-1 bg-white dark:bg-gray-800 shadow rounded">
                <li>
                  <a
                    href="/home1"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Home1
                  </a>
                </li>
                <li>
                  <a
                    href="/home2"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Home2
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              className="w-full block px-2 py-1 text-base font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 rounded"
              href="/about"
            >
              About Us
            </a>
          </li>
          <li ref={mobileServicesRef}>
            <button
              className="w-full text-left px-2 py-1 text-base font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 rounded"
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services <span className="ml-1">▼</span>
            </button>
            {servicesOpen && (
              <ul className="ml-4 mt-1 bg-white dark:bg-gray-800 shadow rounded">
                {services.map((srv, idx) => (
                  <li key={idx}>
                    <a
                      href={`/${srv.Link}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {srv.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <a
              className="w-full block px-2 py-1 text-base font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 rounded"
              href="/blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="w-full block px-2 py-1 text-base font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 rounded"
              href="/contact"
            >
              Contact Us
            </a>
          </li>
          <li>
            <div className="flex justify-between  items-center gap-4">
              {/* Language Switcher */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen((o) => !o)}
                  className="border border-gray-300 dark:border-gray-700 rounded px-3 py-1 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  {selectedLang.toUpperCase()} <span className="ml-1">▼</span>
                </button>
                {langOpen && (
                  <ul className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded w-20 animate-fadeIn">
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
                  className="flex items-center gap-2 px-2 py-1 text-base font-medium text-blue-900 dark:text-blue-300 bg-white dark:bg-gray-900 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
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
                  <ul className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded w-32 animate-fadeIn">
                    <li>
                      <a
                        href="/profile"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        My Profile
                      </a>
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
