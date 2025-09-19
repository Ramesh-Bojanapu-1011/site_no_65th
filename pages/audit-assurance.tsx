import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const faqs = [
  {
    question: "What is audit assurance?",
    answer:
      "Audit assurance is an independent review of financial statements to ensure accuracy, transparency, and compliance with regulations.",
  },
  {
    question: "Why do I need audit assurance?",
    answer:
      "It builds trust with stakeholders, helps detect errors, and ensures your business meets legal requirements.",
  },
  {
    question: "Who performs audit assurance?",
    answer:
      "Qualified auditors and assurance professionals conduct thorough reviews using industry standards.",
  },
  {
    question: "How often should audits be done?",
    answer:
      "Annual audits are common, but frequency depends on your business type and regulatory needs.",
  },
  {
    question: "Do you offer customized audit solutions?",
    answer:
      "Yes, we tailor our audit and assurance services to fit your unique business requirements.",
  },
];

const FAQAccordion: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="space-y-6">
      {faqs.map((faq, idx) => (
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
                className={`w-7 h-7 transition-transform duration-300 ${openIdx === idx ? "rotate-180" : "rotate-0"}`}
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
            className={`px-6 pb-6 transition-all duration-300 ${openIdx === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            style={{ overflow: "hidden" }}
          >
            {openIdx === idx && (
              <div className="mt-2 text-gray-700 dark:text-blue-200 text-base border-t pt-4 animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const benefits = [
  {
    title: "Build Trust",
    desc: "Assure stakeholders of your financial integrity and reliability.",
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
    title: "Detect Errors",
    desc: "Identify mistakes and prevent fraud with expert review.",
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
    title: "Meet Regulations",
    desc: "Stay compliant with legal and industry standards.",
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
    title: "Engagement",
    desc: "We start with a clear agreement and understanding of your needs.",
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
    title: "Fieldwork",
    desc: "Our team reviews your records and gathers evidence.",
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
    title: "Reporting",
    desc: "We deliver clear, actionable reports and recommendations.",
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
    title: "Follow-up",
    desc: "We help you implement recommendations and stay compliant.",
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

const AuditAssurancePage = () => {
  return (
    <>
      <Head>
        <title>Audit & Assurance | FinAccount</title>
        <meta
          name="description"
          content="Professional audit and assurance services for financial transparency and compliance."
        />
      </Head>
      <main className="bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 min-h-screen caret-transparent">
        <SiteHeader />
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-24 gap-12 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 text-blue-900 dark:text-blue-100 min-h-screen">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              Audit & Assurance
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-xl">
              Ensure financial transparency, build trust, and stay compliant
              with our expert audit and assurance services.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="/globe.svg"
              alt="Audit Assurance"
              width={320}
              height={240}
              className="rounded-2xl shadow-2xl object-cover bg-blue-100 dark:bg-blue-900"
            />
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#155dfc] dark:text-blue-100 mb-10 text-center">
              Why Audit Assurance Matters
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {/* Step 1 */}
              <div className="flex-1 flex flex-col items-center bg-gradient-to-br from-blue-100 via-white to-[#21c2ad] dark:from-blue-950 dark:via-blue-900 dark:to-[#155dfc] rounded-xl shadow-lg p-8">
                <span className="mb-4">
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
                </span>
                <h3 className="font-bold text-[#155dfc] dark:text-blue-100 mb-2 text-lg">
                  Build Trust
                </h3>
                <p className="text-gray-700 dark:text-blue-200 text-base">
                  Independent audits assure stakeholders of your financial
                  integrity.
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex-1 flex flex-col items-center bg-gradient-to-br from-blue-100 via-white to-[#155dfc] dark:from-blue-950 dark:via-blue-900 dark:to-[#21c2ad] rounded-xl shadow-lg p-8">
                <span className="mb-4">
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
                </span>
                <h3 className="font-bold text-[#155dfc] dark:text-blue-100 mb-2 text-lg">
                  Detect Errors
                </h3>
                <p className="text-gray-700 dark:text-blue-200 text-base">
                  Audits help identify mistakes and prevent fraud.
                </p>
              </div>
              {/* Step 3 */}
              <div className="flex-1 flex flex-col items-center bg-gradient-to-br from-blue-100 via-white to-[#21c2ad] dark:from-blue-950 dark:via-blue-900 dark:to-[#155dfc] rounded-xl shadow-lg p-8">
                <span className="mb-4">
                  <svg
                    className="w-12 h-12 text-[#21c2ad]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l2 7h7l-5.5 4.5L17 21l-5-3.5L7 21l1.5-7.5L3 9h7z" />
                  </svg>
                </span>
                <h3 className="font-bold text-[#155dfc] dark:text-blue-100 mb-2 text-lg">
                  Meet Regulations
                </h3>
                <p className="text-gray-700 dark:text-blue-200 text-base">
                  Stay compliant with legal and industry standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-8 bg-white dark:bg-blue-950">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#155dfc] dark:text-blue-100 mb-12 text-center">
              Key Benefits of Audit Assurance
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
              Our Audit Assurance Process
            </h2>
            <p className="text-lg text-gray-700 dark:text-blue-200 mb-12 text-center max-w-3xl mx-auto">
              Our thorough process ensures your financial statements are
              accurate, transparent, and compliant. We work closely with you
              from engagement to follow-up, providing actionable insights and
              ongoing support.
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
                      "We begin with a clear agreement and understanding of your needs."}
                    {idx === 1 &&
                      "Our team reviews your records and gathers evidence for accuracy."}
                    {idx === 2 &&
                      "Receive clear, actionable reports and recommendations."}
                    {idx === 3 &&
                      "We help you implement recommendations and stay compliant."}
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
                Audit Assurance FAQs
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-8">
                Find answers to common questions about audit assurance,
                compliance, and our services.
              </p>
            </div>
            <FAQAccordion />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 relative overflow-hidden">
          <div className="max-w-3xl py-20 px-8 mx-auto flex flex-col items-center text-center relative z-10 rounded-2xl shadow-xl bg-white/80 dark:bg-blue-950/80 backdrop-blur-lg border-2 border-transparent before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:bg-gradient-to-r before:from-[#21c2ad] before:via-[#155dfc] before:to-[#21c2ad] before:opacity-30">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg text-[#155dfc] dark:text-[#21c2ad]">
              Ready for Reliable Audit Assurance?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl text-blue-900 dark:text-blue-100">
              Let our experts help you achieve financial transparency and
              compliance. Contact us today and build trust with your
              stakeholders.
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

export default AuditAssurancePage;
