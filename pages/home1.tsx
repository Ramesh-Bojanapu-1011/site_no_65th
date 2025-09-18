import React from "react";
import SiteHeader from "../src/components/SiteHeader";
import SiteFooter from "../src/components/SiteFooter";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import aos from "aos";

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
        <section className="flex h-screen flex-col items-center justify-center py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-blue-400 text-white dark:from-blue-900 dark:to-blue-700">
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
                  src="/public/globe.svg"
                  alt="Analytics"
                  className="w-24 h-20 rounded-lg shadow-lg object-cover bg-blue-100 dark:bg-blue-950"
                />
              </div>
              <div className="flex gap-6">
                <div className="rounded-lg shadow-lg object-cover bg-blue-100 dark:bg-blue-950">
                  <Image
                    src="/public/next.svg"
                    alt="Business Steps"
                    width={160}
                    height={192}
                  />
                </div>
                <div className="rounded-lg shadow-lg object-cover bg-blue-100 dark:bg-blue-950 relative">
                  <Image
                    src="/public/window.svg"
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
                → See All Services
              </Link>
            </div>
            <div className="flex flex-col gap-8 w-full max-w-xl">
              {[
                {
                  title: "Bookkeeping",
                  description:
                    "Maintain accurate records and streamline your day-to-day financial operations with our expert bookkeeping services.",
                  link: "/services/bookkeeping",
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
                  link: "/services/financial-statements",
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
                  link: "/services/financial-management",
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

        {/* Section 2: Our Services */}
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6 text-center">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-blue-950 rounded-lg shadow-md p-6 flex flex-col items-center">
              <span className="text-4xl mb-2">💼</span>
              <h3 className="font-bold text-lg mb-2">
                Bookkeeping &amp; Accounting
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Accurate record-keeping, financial statements, and compliance
                for your peace of mind.
              </p>
            </div>
            <div className="bg-white dark:bg-blue-950 rounded-lg shadow-md p-6 flex flex-col items-center">
              <span className="text-4xl mb-2">📊</span>
              <h3 className="font-bold text-lg mb-2">Financial Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Insightful reporting and analysis to drive smarter business
                decisions.
              </p>
            </div>
            <div className="bg-white dark:bg-blue-950 rounded-lg shadow-md p-6 flex flex-col items-center">
              <span className="text-4xl mb-2">🧾</span>
              <h3 className="font-bold text-lg mb-2">
                Tax Planning &amp; Filing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Strategic tax solutions to maximize savings and ensure
                compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Why Choose Us */}
        <section className="py-16 px-4 bg-blue-100 dark:bg-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
              Why Choose Us?
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
              <li className="bg-white dark:bg-blue-950 rounded-lg shadow p-6">
                ✔️ Certified &amp; Experienced Professionals
              </li>
              <li className="bg-white dark:bg-blue-950 rounded-lg shadow p-6">
                ✔️ Personalized Financial Solutions
              </li>
              <li className="bg-white dark:bg-blue-950 rounded-lg shadow p-6">
                ✔️ Transparent Pricing &amp; No Hidden Fees
              </li>
              <li className="bg-white dark:bg-blue-950 rounded-lg shadow p-6">
                ✔️ Secure &amp; Confidential Data Handling
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Client Success Stories */}
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6 text-center">
            Client Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-blue-950 rounded-lg shadow-md p-6">
              <p className="italic text-gray-700 dark:text-gray-300 mb-2">
                "Their accounting expertise helped us save thousands and grow
                our business!"
              </p>
              <span className="font-bold text-blue-700 dark:text-blue-300">
                - ABC Retail
              </span>
            </div>
            <div className="bg-white dark:bg-blue-950 rounded-lg shadow-md p-6">
              <p className="italic text-gray-700 dark:text-gray-300 mb-2">
                "Professional, reliable, and always available for advice. Highly
                recommended."
              </p>
              <span className="font-bold text-blue-700 dark:text-blue-300">
                - XYZ Tech
              </span>
            </div>
          </div>
        </section>

        {/* Section 5: Meet Our Team */}
        <section className="py-16 px-4 bg-blue-50 dark:bg-blue-950">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <span className="w-20 h-20 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center text-3xl mb-2">
                  👩‍💼
                </span>
                <span className="font-bold">Priya Sharma</span>
                <span className="text-sm text-gray-500">
                  CPA, Senior Accountant
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="w-20 h-20 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center text-3xl mb-2">
                  👨‍💼
                </span>
                <span className="font-bold">Rahul Verma</span>
                <span className="text-sm text-gray-500">Financial Analyst</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="w-20 h-20 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center text-3xl mb-2">
                  👩‍💻
                </span>
                <span className="font-bold">Anita Patel</span>
                <span className="text-sm text-gray-500">Tax Specialist</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Contact Us */}
        <section className="py-16 px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6 text-center">
            Contact Us
          </h2>
          <form className="bg-white dark:bg-blue-950 rounded-lg shadow-md p-8 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-200"
            />
            <textarea
              placeholder="Your Message"
              className="px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-200"
              rows={4}
            />
            <button
              type="submit"
              className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold shadow-lg hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default Home1;
