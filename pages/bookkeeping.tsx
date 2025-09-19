import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const faqs = [
  {
    question: "What is bookkeeping?",
    answer:
      "Bookkeeping is the systematic recording and organizing of financial transactions for your business.",
  },
  {
    question: "Why is bookkeeping important?",
    answer:
      "Accurate bookkeeping helps you track income and expenses, make informed decisions, and stay compliant with regulations.",
  },
  {
    question: "Who needs bookkeeping services?",
    answer:
      "Businesses of all sizes, freelancers, and entrepreneurs benefit from professional bookkeeping.",
  },
  {
    question: "How often should bookkeeping be done?",
    answer:
      "Bookkeeping should be done regularly—daily, weekly, or monthly—to ensure up-to-date records.",
  },
  {
    question: "Do you offer customized bookkeeping solutions?",
    answer:
      "Yes, we tailor our bookkeeping services to fit your unique business needs and goals.",
  },
];

const benefits = [
  {
    title: "Stay Organized",
    desc: "Keep your financial records clear, accurate, and accessible.",
    icon: (
      <svg
        className="w-10 h-10 text-[#21c2ad]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8m0 0l-3-3m3 3l3-3" />
      </svg>
    ),
  },
  {
    title: "Make Informed Decisions",
    desc: "Use accurate data to guide your business strategy and growth.",
    icon: (
      <svg
        className="w-10 h-10 text-[#155dfc]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    title: "Stay Compliant",
    desc: "Meet tax and regulatory requirements with ease.",
    icon: (
      <svg
        className="w-10 h-10 text-[#21c2ad]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2 7h7l-5.5 4.5L17 21l-5-3.5L7 21l1.5-7.5L3 9h7z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    title: "Setup",
    desc: "We help you establish a reliable bookkeeping system.",
    icon: (
      <svg
        className="w-8 h-8 text-[#21c2ad]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4m0-4h.01" />
      </svg>
    ),
  },
  {
    title: "Recording",
    desc: "We record all your financial transactions accurately.",
    icon: (
      <svg
        className="w-8 h-8 text-[#155dfc]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    title: "Review",
    desc: "We regularly review your books for accuracy and completeness.",
    icon: (
      <svg
        className="w-8 h-8 text-[#21c2ad]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2 7h7l-5.5 4.5L17 21l-5-3.5L7 21l1.5-7.5L3 9h7z" />
      </svg>
    ),
  },
  {
    title: "Reporting",
    desc: "We provide clear financial reports to help you make decisions.",
    icon: (
      <svg
        className="w-8 h-8 text-[#155dfc]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8m0 0l-3-3m3 3l3-3" />
      </svg>
    ),
  },
];

const BookkeepingPage = () => {
  return (
    <>
      <Head>
        <title>Bookkeeping | FinAccount</title>
        <meta
          name="description"
          content="Professional bookkeeping services for businesses and entrepreneurs."
        />
      </Head>
      <main className="bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 min-h-screen caret-transparent">
        <SiteHeader />
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-24 gap-12 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 text-blue-900 dark:text-blue-100 min-h-screen">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              Bookkeeping
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-xl">
              Stay organized, make informed decisions, and stay compliant with
              our expert bookkeeping services tailored for you.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="https://i.pinimg.com/1200x/0a/f6/1d/0af61d1cf6aa67e8885dd7020711e251.jpg"
              alt="Bookkeeping"
              width={500}
              height={450}
              className="rounded-2xl shadow-2xl object-cover bg-blue-100 dark:bg-blue-900"
            />
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#155dfc] dark:text-blue-100 mb-10 text-center">
              Why Bookkeeping Matters
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {[
                {
                  title: "Stay Organized",
                  desc: "Bookkeeping keeps your financial records clear, accurate and access.",
                  icon: (
                    <svg
                      className="w-12 h-12 text-[#21c2ad]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v8m0 0l-3-3m3 3l3-3" />
                    </svg>
                  ),
                  bg: "from-blue-100 via-white to-[#21c2ad] dark:from-blue-950 dark:via-blue-900 dark:to-[#155dfc]",
                },
                {
                  title: "Make Informed Decisions",
                  desc: "Accurate data helps guide your business strategy and growth.",
                  icon: (
                    <svg
                      className="w-12 h-12 text-[#155dfc]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 9h6v6H9z" />
                    </svg>
                  ),
                  bg: "from-blue-100 via-white to-[#155dfc] dark:from-blue-950 dark:via-blue-900 dark:to-[#21c2ad]",
                },
                {
                  title: "Stay Compliant",
                  desc: "Meet tax and regulatory requirements with ease.",
                  icon: (
                    <svg
                      className="w-12 h-12 text-[#21c2ad]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l2 7h7l-5.5 4.5L17 21l-5-3.5L7 21l1.5-7.5L3 9h7z" />
                    </svg>
                  ),
                  bg: "from-blue-100 via-white to-[#21c2ad] dark:from-blue-950 dark:via-blue-900 dark:to-[#155dfc]",
                },
              ].map((step, idx) => (
                <div
                  key={step.title}
                  className={`flex-1 flex flex-col items-center bg-gradient-to-br ${step.bg} rounded-xl shadow-lg p-8`}
                >
                  <span className="mb-4">{step.icon}</span>
                  <h3 className="font-bold text-[#155dfc] dark:text-blue-100 mb-2 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-blue-200 text-base">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-8 bg-white dark:bg-blue-950">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#155dfc] dark:text-blue-100 mb-12 text-center">
              Key Benefits of Bookkeeping
            </h2>
            <div className="relative w-full">
              <ul className="space-y-12">
                {benefits.map((card, idx) => (
                  <li key={idx} className="relative flex items-center gap-8">
                    <div className="flex flex-col items-center">
                      <span className="z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#21c2ad] to-[#155dfc] shadow-lg animate-bounce mb-2">
                        {card.icon}
                      </span>
                      {idx < benefits.length - 1 && (
                        <span className="w-1 h-12 bg-gradient-to-b from-[#21c2ad] to-[#155dfc] opacity-40"></span>
                      )}
                    </div>
                    <div className="bg-white dark:bg-blue-950 rounded-xl shadow-lg p-8 flex-1">
                      <h3 className="font-bold text-[#155dfc] dark:text-blue-100 mb-2 text-lg">
                        {card.title}
                      </h3>
                      <p className="text-gray-700 dark:text-blue-200 text-base">
                        {card.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-8 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#155dfc] dark:text-blue-100 mb-10 text-center">
              Our Bookkeeping Process
            </h2>
            <p className="text-lg text-gray-700 dark:text-blue-200 mb-12 text-center max-w-3xl mx-auto">
              Our streamlined process ensures your books are accurate,
              up-to-date, and ready for decision-making. We guide you from setup
              to reporting, so you can focus on growing your business.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center bg-gradient-to-br from-blue-100 via-white to-[#21c2ad] dark:from-blue-950 dark:via-blue-900 dark:to-[#155dfc] rounded-xl shadow-lg p-8 relative"
                >
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#21c2ad] to-[#155dfc] text-white font-bold text-xl shadow-lg border-4 border-white dark:border-blue-950">
                    {idx + 1}
                  </span>
                  <span className="mb-4 mt-8">{step.icon}</span>
                  <h3 className="font-bold text-[#155dfc] dark:text-blue-100 mb-2 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-blue-200 text-base mb-2">
                    {step.desc}
                  </p>
                  <div className="text-sm text-gray-500 dark:text-blue-300 mt-2">
                    {idx === 0 &&
                      "We help you establish a reliable bookkeeping system."}
                    {idx === 1 &&
                      "We record all your financial transactions accurately."}
                    {idx === 2 &&
                      "We regularly review your books for accuracy and completeness."}
                    {idx === 3 &&
                      "We provide clear financial reports to help you make decisions."}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-blue-100 text-center mb-4">
                Bookkeeping FAQs
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-8">
                Find answers to common questions about bookkeeping, compliance,
                and our services.
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, idx) => {
                const [openIdx, setOpenIdx] = useState<number | null>(null);
                return (
                  <div
                    key={idx}
                    className={
                      `relative rounded-2xl shadow-xl p-0 overflow-hidden transition-all duration-300 ` +
                      `bg-white/80 dark:bg-blue-950/80 backdrop-blur-lg border-2 ` +
                      `border-transparent ` +
                      `before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none ` +
                      `before:bg-gradient-to-r before:from-[#21c2ad] before:via-[#155dfc] before:to-[#21c2ad] before:opacity-30`
                    }
                  >
                    <button
                      className="w-full flex items-center gap-4 px-6 py-6 text-left focus:outline-none"
                      onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                      aria-expanded={openIdx === idx}
                      aria-controls={`faq-panel-${idx}`}
                    >
                      <span className="font-semibold text-lg text-[#155dfc] dark:text-[#21c2ad]">
                        {faq.question}
                      </span>
                      <span className="ml-auto">
                        <svg
                          className={`w-7 h-7 transition-transform duration-300 ${
                            openIdx === idx ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${idx}`}
                      className={`px-6 pb-6 transition-all duration-300 ${
                        openIdx === idx
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                      style={{ overflow: "hidden" }}
                    >
                      {openIdx === idx && (
                        <div className="mt-2 text-gray-700 dark:text-blue-200 text-base border-t pt-4 animate-fade-in">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 relative overflow-hidden">
          <div className="max-w-3xl py-20 px-8 mx-auto flex flex-col items-center text-center relative z-10 rounded-2xl shadow-xl bg-white/80 dark:bg-blue-950/80 backdrop-blur-lg border-2 border-transparent before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:bg-gradient-to-r before:from-[#21c2ad] before:via-[#155dfc] before:to-[#21c2ad] before:opacity-30">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg text-[#155dfc] dark:text-[#21c2ad]">
              Ready for Stress-Free Bookkeeping?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl text-blue-900 dark:text-blue-100">
              Let our experts help you stay organized and compliant. Contact us
              today and focus on what you do best—growing your business.
            </p>
            <Link
              href="/contact-us"
              className="px-10 py-5 rounded-full bg-gradient-to-r from-[#21c2ad] to-[#155dfc] text-white font-bold shadow-lg hover:scale-105 hover:bg-blue-100 transition text-xl"
            >
              Get Started
            </Link>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default BookkeepingPage;
