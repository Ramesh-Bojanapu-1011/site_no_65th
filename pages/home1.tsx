import aos from "aos";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SiteFooter from "../src/components/SiteFooter";
import SiteHeader from "../src/components/SiteHeader";

const Home1: React.FC = () => {
  React.useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <title>FinAccount - Finance & Accounting Services</title>
        <meta
          name="description"
          content="Expert financial solutions and accounting services for your business."
        />
      </Head>

      <SiteHeader />
      <main className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 caret-transparent dark:via-gray-900 dark:to-blue-900 min-h-screen">
        <section className="flex min-h-screen flex-col items-center justify-center py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-blue-400 text-white dark:from-blue-900 dark:to-blue-700">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Finance &amp; Accounting Services
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
            Empowering your business with expert financial solutions, accounting
            accuracy, and strategic insights for growth.
          </p>
        </section>

        {/* About Section (Image Layout) */}
        <section className="flex py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="flex flex-col   md:flex-row items-center md:items-start max-w-6xl mx-auto gap-10">
            <div className="flex flex-col gap-6 md:gap-8 md:w-1/2 max-w-screen items-center md:items-start">
              <div className="flex gap-6 mb-4">
                <div className="bg-blue-600 dark:bg-blue-900 rounded-lg flex items-center gap-2 px-6 py-3 shadow-lg">
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="text-[#21c2ad]"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10C22 6.48 17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                    />
                  </svg>
                  <span className="text-white font-semibold text-lg">
                    Best Award
                  </span>
                </div>
                <img
                  src="/globe.svg"
                  alt="Analytics"
                  className="w-24 h-20 rounded-lg shadow-lg object-cover bg-blue-100 dark:bg-blue-950"
                />
              </div>
              <div className="flex gap-6">
                <div className="rounded-lg shadow-lg object-cover bg-blue-100 dark:bg-blue-950">
                  <Image
                    src="/next.svg"
                    alt="Business Steps"
                    width={160}
                    height={192}
                  />
                </div>
                <div className="rounded-lg shadow-lg object-cover bg-blue-100 dark:bg-blue-950 relative">
                  <Image
                    src="/window.svg"
                    alt="Video"
                    width={160}
                    height={128}
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 max-w-screen flex flex-col justify-center items-start mt-10 md:mt-0 md:pl-16">
              <span className="text-blue-600 dark:text-blue-300 font-bold text-xl mb-2">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-6 leading-tight">
                Expert Finance &amp; Accounting Solutions
                <br />
                For Your Business Growth
              </h2>
              <p className="text-blue-800 dark:text-blue-200 mb-8 max-w-lg">
                We specialize in providing comprehensive financial management,
                accounting, and tax services tailored for businesses of all
                sizes. Our team of certified professionals ensures accuracy,
                compliance, and strategic insights to help you make informed
                decisions and achieve sustainable growth. Partner with us for
                transparent, reliable, and secure financial solutions.
              </p>
              <Link
                href="/about-us"
                className="px-8 py-3 rounded-lg bg-blue-600 dark:bg-blue-700 text-white font-bold shadow-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition"
              >
                About Us
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-16">
            <div className="max-w-xl w-full mb-10 md:mb-0">
              <span className="text-[#193cb8] font-bold tracking-widest text-sm mb-4 block">
                WHAT WE DO
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-blue-100 mb-6">
                Comprehensive Finance &amp; Accounting Solutions
              </h1>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We deliver tailored financial and accounting services to help
                businesses thrive. From daily bookkeeping to advanced financial
                reporting, our experts ensure your numbers are accurate and your
                strategy is sound.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Our commitment to excellence means you get transparent advice,
                reliable support, and innovative solutions for tax, compliance,
                and financial management. Let us handle the details so you can
                focus on growth.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-[#193cb8]"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10C22 6.48 17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                  />
                </svg>
                <div>
                  <span className="font-bold text-lg text-gray-900 dark:text-blue-100">
                    Best Service Awards
                  </span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Recognized for outstanding client service and trusted
                    financial expertise in the industry.
                  </p>
                </div>
              </div>
              <Link
                href="/services"
                className="inline-block px-8 py-4 rounded-full bg-blue-900 text-white font-bold shadow-lg hover:bg-blue-700 transition text-lg"
              >
                See All Services →
              </Link>
            </div>
            <div className="flex flex-col gap-8 w-full max-w-xl">
              {[
                {
                  title: "Bookkeeping",
                  description:
                    "Maintain accurate records and streamline your day-to-day financial operations with our expert bookkeeping services.",
                  link: "/bookkeeping",
                  icon: (
                    <svg
                      width="40"
                      height="40"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="text-[#193cb8]"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <rect
                        x="8"
                        y="8"
                        width="8"
                        height="2"
                        fill="currentColor"
                      />
                      <rect
                        x="8"
                        y="12"
                        width="8"
                        height="2"
                        fill="currentColor"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Financial Statements",
                  description:
                    "Get clear, compliant, and timely financial statements to support decision-making and regulatory needs.",
                  link: "/financial-statements",
                  icon: (
                    <svg
                      width="40"
                      height="40"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="text-[#193cb8]"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <rect
                        x="8"
                        y="8"
                        width="8"
                        height="2"
                        fill="currentColor"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Financial Management",
                  description:
                    "Optimize your business growth and profitability with strategic financial planning and management solutions.",
                  link: "/financial-management",
                  icon: (
                    <svg
                      width="40"
                      height="40"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="text-[#193cb8]"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 8v4l3 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="bg-blue-100 dark:bg-blue-950 rounded-2xl shadow-lg p-8 flex items-center gap-6"
                >
                  {service.icon}
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-blue-100 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      {service.description}
                    </p>
                    <Link
                      href={service.link}
                      className="text-blue-900 dark:text-blue-300 font-semibold text-sm hover:underline"
                    >
                      Learn More→
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Why Choose Us Section - Finance & Accounting Theme */}
        <section className="py-20 bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center mb-16">
              <span className="bg-gradient-to-r from-[#21c2ad] to-[#155dfc] dark:from-[#155dfc] dark:to-[#21c2ad] text-white font-bold px-8 py-3 rounded-full mb-6 text-base tracking-widest shadow-lg">
                WHY CHOOSE US
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-blue-100 text-center mb-4 drop-shadow-lg">
                Your Trusted Finance & Accounting Partner
              </h2>
              <p className="text-blue-800 dark:text-blue-200 text-center max-w-2xl mb-10 text-lg">
                Discover the key reasons businesses rely on us for their
                financial success and peace of mind.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch">
              {[
                {
                  title: "Certified Experts",
                  description:
                    "Our team consists of certified accountants and financial specialists with years of industry experience.",
                  icon: (
                    <span className="bg-[#21c2ad] dark:bg-[#155dfc] rounded-full p-4 mb-6 flex items-center justify-center shadow-lg">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="text-white"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 12l2 2 4-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  ),
                },
                {
                  title: "Personalized Solutions",
                  description:
                    "We tailor our services to meet your unique business needs, ensuring optimal results and satisfaction.",
                  icon: (
                    <span className="bg-[#155dfc] dark:bg-[#21c2ad] rounded-full p-4 mb-6 flex items-center justify-center shadow-lg">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="text-white"
                      >
                        <rect
                          x="4"
                          y="4"
                          width="16"
                          height="16"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 12h8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  ),
                },
                {
                  title: "Transparent & Secure",
                  description:
                    "We prioritize transparency, confidentiality, and data security in every financial transaction and report.",
                  icon: (
                    <span className="bg-gradient-to-r from-[#21c2ad] to-[#155dfc] dark:from-[#155dfc] dark:to-[#21c2ad] rounded-full p-4 mb-6 flex items-center justify-center shadow-lg">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="text-white"
                      >
                        <rect
                          x="6"
                          y="10"
                          width="12"
                          height="8"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 14v2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9 10V8a3 3 0 0 1 6 0v2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  ),
                },
              ].map((reason, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-blue-950 rounded-3xl shadow-2xl px-10 py-12 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-blue-300 dark:hover:shadow-[#21c2ad]"
                  style={{ minWidth: "280px", maxWidth: "340px" }}
                >
                  {reason.icon}
                  <h3 className="font-extrabold text-xl text-blue-900 dark:text-blue-100 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 mb-2 text-base">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section - Finance & Accounting Theme */}
        <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="  mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Left: Business Image with Play Button Overlay */}
              <div className="relative w-full md:w-1/2 flex-shrink-0 flex justify-center items-center">
                <Image
                  src="/team1.jpg"
                  alt="Business Professional"
                  width={480}
                  height={400}
                  className="rounded-2xl object-cover shadow-xl"
                />
              </div>
              {/* Right: Text Content and Features */}
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                <span className="text-[#193cb8] font-bold tracking-widest text-sm mb-2">
                  ABOUT FINACCOUNT
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-100 mb-4 leading-tight">
                  Largest Demand Partnership
                  <br />
                  Building Financial Experts
                </h2>
                <p className="text-gray-700 dark:text-blue-200 mb-6 max-w-xl">
                  FinAccount is a trusted name for providing financial
                  assistance. Our main objective is to ensure the service we
                  provide is loyal to the industry, experienced, and
                  professional.
                </p>
                <div className="flex flex-col gap-8 mt-4">
                  <div className="flex items-start gap-4">
                    <span className="bg-blue-100 dark:bg-blue-950 rounded-lg p-3 flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="text-[#155dfc]"
                      >
                        <rect
                          x="4"
                          y="4"
                          width="16"
                          height="16"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 12h8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-1">
                        Support On Raising Funds
                      </h3>
                      <p className="text-gray-700 dark:text-blue-200 text-base">
                        Our financial experts help you find the best way to
                        raise your funds and grow your business.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-blue-100 dark:bg-blue-950 rounded-lg p-3 flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="text-[#155dfc]"
                      >
                        <rect
                          x="4"
                          y="4"
                          width="16"
                          height="16"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 16h8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8 12h8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-1">
                        Outsourced Consulting Business
                      </h3>
                      <p className="text-gray-700 dark:text-blue-200 text-base">
                        FinAccount provides expert assistance to help you hire
                        consultants for service and business growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f4fbf8] dark:bg-blue-950">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <span className="bg-[#155dfc] dark:bg-[#8ec5ff] dark:text-black text-white font-bold px-6 py-2 rounded-full mb-4 text-sm tracking-widest">
                TEAM MEMBER
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-blue-100 text-center mb-4">
                Meet Our Expert Team Members
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              {[
                {
                  name: "Priya Sharma",
                  role: "Chief Financial Officer",
                  img: "/team1.jpg",
                  socials: [
                    { icon: "f", url: "#" },
                    { icon: "x", url: "#" },
                    { icon: "in", url: "#" },
                  ],
                },
                {
                  name: "David Lee",
                  role: "Tax & Compliance Specialist",
                  img: "/team2.jpg",
                  socials: [
                    { icon: "f", url: "#" },
                    { icon: "x", url: "#" },
                    { icon: "in", url: "#" },
                  ],
                },
                {
                  name: "Maria Gomez",
                  role: "Senior Accountant",
                  img: "/team3.jpg",
                  socials: [
                    { icon: "f", url: "#" },
                    { icon: "x", url: "#" },
                    { icon: "in", url: "#" },
                  ],
                },
                {
                  name: "James O'Connor",
                  role: "Audit & Assurance Lead",
                  img: "/team4.jpg",
                  socials: [
                    { icon: "f", url: "#" },
                    { icon: "x", url: "#" },
                    { icon: "in", url: "#" },
                  ],
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 rounded-2xl shadow-lg p-6 flex flex-col items-center w-full max-w-xs group relative"
                >
                  <div className="w-full h-64 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={300}
                      height={256}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-blue-100 mb-1 text-center">
                    {member.name}
                  </h3>
                  <p className="text-[#155dfc] dark:text-[#8ec5ff] font-semibold mb-2 text-center">
                    {member.role}
                  </p>
                  {member.socials.length > 0 && (
                    <div className="flex gap-3 justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-1/2  -translate-x-1/2 bottom-25 z-10">
                      {member.socials.map((s, i) => (
                        <a
                          key={i}
                          href={s.url}
                          className="bg-[#155dfc] text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#155dfc] transition"
                        >
                          {s.icon === "f" ? (
                            <FacebookIcon size={16} />
                          ) : s.icon === "x" ? (
                            <TwitterIcon size={16} />
                          ) : (
                            <LinkedinIcon size={16} />
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default Home1;
