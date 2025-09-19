import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const faqs = [
  {
    question: "What is investment advisory?",
    answer:
      "Investment advisory provides expert guidance to help you make informed decisions about your investments and financial future.",
  },
  {
    question: "Why is investment advisory important?",
    answer:
      "It helps you grow your wealth, manage risks, and achieve your financial goals with confidence.",
  },
  {
    question: "Who can benefit from investment advisory?",
    answer:
      "Individuals, families, and businesses of all sizes can benefit from professional investment advice.",
  },
  {
    question: "When should I seek investment advice?",
    answer:
      "Anytime you want to invest, diversify, or plan for the future, advisory services are valuable.",
  },
  {
    question: "Do you offer personalized investment strategies?",
    answer:
      "Yes, our experts tailor investment strategies to your unique financial situation and goals.",
  },
];

const benefits = [
  {
    title: "Grow Wealth",
    desc: "Maximize returns and build your financial future.",
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
    title: "Manage Risk",
    desc: "Protect your investments and minimize losses.",
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
    title: "Diversify Portfolio",
    desc: "Spread investments across assets for stability and growth.",
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
    title: "Discovery",
    desc: "We learn about your investment goals and risk tolerance.",
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
    title: "Analysis",
    desc: "We analyze your current portfolio and market opportunities.",
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
    title: "Strategy",
    desc: "We develop a personalized investment plan for you.",
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
    title: "Implementation",
    desc: "We help you execute your plan and monitor performance.",
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

const InvestmentAdvisoryPage = () => {
  return (
    <>
      <Head>
        <title>Investment Advisory | FinAccount</title>
        <meta
          name="description"
          content="Professional investment advisory services for individuals and businesses."
        />
      </Head>
      <main className="bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 min-h-screen caret-transparent">
        <SiteHeader />
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-24 gap-12 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 text-blue-900 dark:text-blue-100 min-h-screen">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              Investment Advisory
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-xl">
              Grow your wealth, manage risk, and diversify your portfolio with
              our expert investment advisory services tailored for you.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="https://i.pinimg.com/736x/45/0e/eb/450eeb4da87813acd5a3780f8e09b2a8.jpg"
              alt="Investment Advisory"
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
              Why Investment Advisory Matters
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {[
                {
                  title: "Grow Wealth",
                  desc: "Maximize returns and build your financial future.",
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
                  title: "Manage Risk",
                  desc: "Protect your investments and minimize losses.",
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
                  title: "Diversify Portfolio",
                  desc: "Spread investments across assets for stability and growth.",
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
              Key Benefits of Investment Advisory
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
              Our Investment Advisory Process
            </h2>
            <p className="text-lg text-gray-700 dark:text-blue-200 mb-12 text-center max-w-3xl mx-auto">
              Our proven process ensures you get the most out of your investment
              advisory experience. We guide you every step of the way, from
              discovery to implementation, so you can focus on growing your
              wealth.
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
                      "We learn about your investment goals and risk tolerance."}
                    {idx === 1 &&
                      "We analyze your current portfolio and market opportunities."}
                    {idx === 2 &&
                      "We develop a personalized investment plan for you."}
                    {idx === 3 &&
                      "We help you execute your plan and monitor performance."}
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
                Investment Advisory FAQs
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-8">
                Find answers to common questions about investment advisory,
                planning, and our services.
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
              Ready for Expert Investment Advice?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl text-blue-900 dark:text-blue-100">
              Let our experts help you grow, protect, and diversify your
              investments. Contact us today and take control of your financial
              future.
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

export default InvestmentAdvisoryPage;
