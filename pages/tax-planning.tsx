import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const faqs = [
  {
    question: "What is tax planning?",
    answer:
      "Tax planning is the process of analyzing your financial situation to ensure all elements work together to minimize your tax liability.",
  },
  {
    question: "Why is tax planning important?",
    answer:
      "It helps you save money, avoid penalties, and make the most of available deductions and credits.",
  },
  {
    question: "Who can benefit from tax planning?",
    answer:
      "Individuals, families, and businesses of all sizes can benefit from effective tax planning.",
  },
  {
    question: "When should I start tax planning?",
    answer:
      "The best time to start is now! Early planning ensures you maximize your benefits and avoid last-minute stress.",
  },
  {
    question: "Do you offer personalized tax planning?",
    answer:
      "Yes, our experts tailor strategies to your unique financial goals and circumstances.",
  },
];

const benefits = [
  {
    title: "Save Money",
    desc: "Reduce your tax liability and keep more of your income.",
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
    title: "Avoid Penalties",
    desc: "Stay compliant and avoid costly mistakes.",
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
    title: "Maximize Deductions",
    desc: "Take advantage of all available credits and deductions.",
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
    title: "Consultation",
    desc: "Meet with our experts to discuss your goals.",
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
    desc: "We review your financials and identify opportunities.",
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
    desc: "We create a personalized tax plan for you.",
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
    desc: "We help you put your plan into action.",
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

const TaxPlanningPage = () => {
  return (
    <>
      <Head>
        <title>Tax Planning | FinAccount</title>
        <meta
          name="description"
          content="Expert tax planning strategies for individuals and businesses."
        />
      </Head>
      <main className="bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 min-h-screen caret-transparent">
        <SiteHeader />
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-24 gap-12 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 text-blue-900 dark:text-blue-100 min-h-screen">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              Tax Planning
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-xl">
              Optimize your finances and minimize your tax burden with our
              expert strategies tailored for you.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="https://i.pinimg.com/736x/b0/bc/ee/b0bcee41fad693664d4c56e429f5f946.jpg"
              alt="Tax Planning"
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
              Why Tax Planning Matters
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {[
                {
                  title: "Save Money",
                  desc: "Tax planning helps you keep more of your income and reduce your tax.",
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
                  title: "Avoid Surprises",
                  desc: "Stay compliant, avoid penalties, and be prepared for tax season.",
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
                  title: "Achieve Goals",
                  desc: "Plan ahead to reach your financial objectives with confidence.",
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
              Key Benefits of Tax Planning
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
              Our Tax Planning Process
            </h2>
            <p className="text-lg text-gray-700 dark:text-blue-200 mb-12 text-center max-w-3xl mx-auto">
              Our proven process ensures you get the most out of your tax
              planning experience. We guide you every step of the way, from
              initial consultation to successful implementation, so you can
              focus on what matters most—your financial goals.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex-1   flex flex-col items-center bg-gradient-to-br from-blue-100 via-white to-[#21c2ad] dark:from-blue-950 dark:via-blue-900 dark:to-[#155dfc] rounded-xl shadow-lg p-8 relative"
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
                      "Start with a friendly chat to understand your needs."}
                    {idx === 1 &&
                      "We analyze your documents and spot opportunities for savings."}
                    {idx === 2 &&
                      "Get a custom strategy that fits your life and business."}
                    {idx === 3 &&
                      "We help you put the plan into action and monitor results."}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="max-w-4xl mx-auto  px-4">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-blue-100 text-center mb-4">
                Tax Planning FAQs
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-8">
                Find answers to common questions about tax planning, compliance,
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
              Ready to Optimize Your Taxes?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl text-blue-900 dark:text-blue-100">
              Let our experts help you plan, save, and succeed. Contact us today
              and take control of your financial future.
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

export default TaxPlanningPage;
