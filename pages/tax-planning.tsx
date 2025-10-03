import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const faqs = [
  {
    questionKey: "TaxPlanning.FAQs.q1",
    answerKey: "TaxPlanning.FAQs.a1",
  },
  {
    questionKey: "TaxPlanning.FAQs.q2",
    answerKey: "TaxPlanning.FAQs.a2",
  },
  {
    questionKey: "TaxPlanning.FAQs.q3",
    answerKey: "TaxPlanning.FAQs.a3",
  },
  {
    questionKey: "TaxPlanning.FAQs.q4",
    answerKey: "TaxPlanning.FAQs.a4",
  },
  {
    questionKey: "TaxPlanning.FAQs.q5",
    answerKey: "TaxPlanning.FAQs.a5",
  },
];

const benefits = [
  {
    titleKey: "TaxPlanning.Benefits.save_money.title",
    descKey: "TaxPlanning.Benefits.save_money.desc",
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
    titleKey: "TaxPlanning.Benefits.avoid_penalties.title",
    descKey: "TaxPlanning.Benefits.avoid_penalties.desc",
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
    titleKey: "TaxPlanning.Benefits.maximize_deductions.title",
    descKey: "TaxPlanning.Benefits.maximize_deductions.desc",
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
    titleKey: "TaxPlanning.Process.consultation.title",
    descKey: "TaxPlanning.Process.consultation.desc",
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
    titleKey: "TaxPlanning.Process.analysis.title",
    descKey: "TaxPlanning.Process.analysis.desc",
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
    titleKey: "TaxPlanning.Process.strategy.title",
    descKey: "TaxPlanning.Process.strategy.desc",
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
    titleKey: "TaxPlanning.Process.implementation.title",
    descKey: "TaxPlanning.Process.implementation.desc",
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
  const { t } = useTranslation();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <>
      <Head>
        <title>{t("TaxPlanning.meta.title")}</title>
        <meta name="description" content={t("TaxPlanning.meta.description")} />
      </Head>
      <main className="bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 min-h-screen caret-transparent">
        <SiteHeader />
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between px-8 py-24 gap-12 min-h-screen overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="tax_planning_bg_vedio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/80 via-white/80 to-blue-200/80 dark:from-blue-950/80 dark:via-gray-900/80 dark:to-blue-900/80 z-10"></div>
          {/* Content */}
          <div className="relative flex-1 flex flex-col justify-center items-start z-20 text-blue-900 dark:text-blue-100">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              {t("TaxPlanning.Hero.title")}
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-xl">
              {t("TaxPlanning.Hero.description")}
            </p>
          </div>
          <div className="relative flex-1 flex justify-center items-center z-20">
            <Image
              src="https://i.pinimg.com/736x/b0/bc/ee/b0bcee41fad693664d4c56e429f5f946.jpg"
              alt={t("TaxPlanning.Hero.image_alt")}
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
              {t("TaxPlanning.Overview.title")}
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {["save_money", "avoid_surprises", "achieve_goals"].map(
                (key, idx) => {
                  const icons = [
                    <svg
                      key="icon1"
                      className="w-12 h-12 text-[#21c2ad]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v8m0 0l-3-3m3 3l3-3" />
                    </svg>,
                    <svg
                      key="icon2"
                      className="w-12 h-12 text-[#155dfc]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 9h6v6H9z" />
                    </svg>,
                    <svg
                      key="icon3"
                      className="w-12 h-12 text-[#21c2ad]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l2 7h7l-5.5 4.5L17 21l-5-3.5L7 21l1.5-7.5L3 9h7z" />
                    </svg>,
                  ];
                  const bg = [
                    "from-blue-100 via-white to-[#21c2ad] dark:from-blue-950 dark:via-blue-900 dark:to-[#155dfc]",
                    "from-blue-100 via-white to-[#155dfc] dark:from-blue-950 dark:via-blue-900 dark:to-[#21c2ad]",
                    "from-blue-100 via-white to-[#21c2ad] dark:from-blue-950 dark:via-blue-900 dark:to-[#155dfc]",
                  ];
                  return (
                    <div
                      key={key}
                      className={`flex-1 flex flex-col items-center bg-gradient-to-br ${bg[idx]} rounded-xl shadow-lg p-8`}
                    >
                      <span className="mb-4">{icons[idx]}</span>
                      <h3 className="font-bold text-[#155dfc] dark:text-blue-100 mb-2 text-lg">
                        {t(`TaxPlanning.Overview.${key}.title`)}
                      </h3>
                      <p className="text-gray-700 dark:text-blue-200 text-base">
                        {t(`TaxPlanning.Overview.${key}.desc`)}
                      </p>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-8 bg-white dark:bg-blue-950">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#155dfc] dark:text-blue-100 mb-12 text-center">
              {t("TaxPlanning.Benefits.title")}
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
                        {t(card.titleKey)}
                      </h3>
                      <p className="text-gray-700 dark:text-blue-200 text-base">
                        {t(card.descKey)}
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
              {t("TaxPlanning.Process.title")}
            </h2>
            <p className="text-lg text-gray-700 dark:text-blue-200 mb-12 text-center max-w-3xl mx-auto">
              {t("TaxPlanning.Process.description")}
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
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-700 dark:text-blue-200 text-base mb-2">
                    {t(step.descKey)}
                  </p>
                  <div className="text-sm text-gray-500 dark:text-blue-300 mt-2">
                    {idx === 0 && t("TaxPlanning.Process.consultation.note")}
                    {idx === 1 && t("TaxPlanning.Process.analysis.note")}
                    {idx === 2 && t("TaxPlanning.Process.strategy.note")}
                    {idx === 3 && t("TaxPlanning.Process.implementation.note")}
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
                {t("TaxPlanning.FAQs.title")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-8">
                {t("TaxPlanning.FAQs.description")}
              </p>
            </div>
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
                    className="w-full flex items-center   px-6 py-6 text-left focus:outline-none"
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    aria-expanded={openIdx === idx}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span className="font-semibold text-lg text-[#155dfc] dark:text-[#21c2ad]">
                      {t(faq.questionKey)}
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
                    className={`px-6   transition-all duration-300 ${
                      openIdx === idx
                        ? "max-h-96 opacity-100 border-t border-gray-300 dark:border-gray-700 py-4 "
                        : "max-h-0 opacity-0"
                    }`}
                    style={{ overflow: "hidden" }}
                  >
                    {openIdx === idx && (
                      <div className="mt-2 text-gray-700 dark:text-blue-200 text-base">
                        {t(faq.answerKey)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 relative overflow-hidden">
          <div className="max-w-3xl py-20 px-8 mx-auto flex flex-col items-center text-center relative z-10 rounded-2xl shadow-xl bg-white/80 dark:bg-blue-950/80 backdrop-blur-lg border-2 border-transparent before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:bg-gradient-to-r before:from-[#21c2ad] before:via-[#155dfc] before:to-[#21c2ad] before:opacity-30">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg text-[#155dfc] dark:text-[#21c2ad]">
              {t("TaxPlanning.CTA.title")}
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl text-blue-900 dark:text-blue-100">
              {t("TaxPlanning.CTA.description")}
            </p>
            <Link
              href="/contact-us"
              className="px-10 py-5 rounded-full bg-gradient-to-r from-[#21c2ad] to-[#155dfc] text-white font-bold shadow-lg hover:scale-105 hover:bg-blue-100 transition text-xl"
            >
              {t("TaxPlanning.CTA.cta")}
            </Link>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default TaxPlanningPage;
