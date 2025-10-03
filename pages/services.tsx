import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {};

import Image from "next/image";
import Link from "next/link";

const serviceList = [
  {
    titleKey: "Services.List.AccountingBookkeeping.title",
    descKey: "Services.List.AccountingBookkeeping.desc",
    link: "/bookkeeping",
    icon: (
      <svg
        className="w-10 h-10 text-[#21c2ad] mb-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
      </svg>
    ),
  },
  {
    titleKey: "Services.List.TaxPlanning.title",
    descKey: "Services.List.TaxPlanning.desc",
    link: "/tax-planning",
    icon: (
      <svg
        className="w-10 h-10 text-[#155dfc] mb-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M9 14l6-6" />
        <circle cx="9" cy="14" r="1" />
        <circle cx="15" cy="8" r="1" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    ),
  },
  {
    titleKey: "Services.List.InvestmentAdvisory.title",
    descKey: "Services.List.InvestmentAdvisory.desc",
    link: "/investment-advisory",
    icon: (
      <svg
        className="w-10 h-10 text-[#21c2ad] mb-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 20v-6" />
        <path d="M18 20v-10" />
        <path d="M6 20v-4" />
        <path d="M3 20h18" />
      </svg>
    ),
  },
  {
    titleKey: "Services.List.PayrollManagement.title",
    descKey: "Services.List.PayrollManagement.desc",
    link: "/payroll-management",
    icon: (
      <svg
        className="w-10 h-10 text-[#155dfc] mb-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 3v4" />
        <path d="M8 3v4" />
      </svg>
    ),
  },
  {
    titleKey: "Services.List.AuditAssurance.title",
    descKey: "Services.List.AuditAssurance.desc",
    link: "/audit-assurance",
    icon: (
      <svg
        className="w-10 h-10 text-[#21c2ad] mb-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    titleKey: "Services.List.FinancialConsulting.title",
    descKey: "Services.List.FinancialConsulting.desc",
    link: "/financial-consulting",
    icon: (
      <svg
        className="w-10 h-10 text-[#155dfc] mb-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 3v4" />
        <path d="M8 3v4" />
        <path d="M12 12v4" />
      </svg>
    ),
  },
];

const Services = (props: Props) => {
  const { t } = useTranslation();
  React.useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000 });
    });
  }, []);
  const benefits = [
    {
      labelKey: "Services.Benefits.ExpertTeam.label",
      descKey: "Services.Benefits.ExpertTeam.desc",
      icon: (
        <svg
          className="w-10 h-10 text-[#21c2ad] mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
        </svg>
      ),
    },
    {
      labelKey: "Services.Benefits.ProvenResults.label",
      descKey: "Services.Benefits.ProvenResults.desc",
      icon: (
        <svg
          className="w-10 h-10 text-[#155dfc] mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M3 20h18" />
          <path d="M12 4v16" />
          <path d="M7 12l5-5 5 5" />
        </svg>
      ),
    },
    {
      labelKey: "Services.Benefits.PersonalizedSolutions.label",
      descKey: "Services.Benefits.PersonalizedSolutions.desc",
      icon: (
        <svg
          className="w-10 h-10 text-[#21c2ad] mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
        </svg>
      ),
    },
  ];
  const processSteps = [
    {
      titleKey: "Services.Process.Consultation.title",
      descKey: "Services.Process.Consultation.desc",
    },
    {
      titleKey: "Services.Process.Strategy.title",
      descKey: "Services.Process.Strategy.desc",
    },
    {
      titleKey: "Services.Process.Implementation.title",
      descKey: "Services.Process.Implementation.desc",
    },
    {
      titleKey: "Services.Process.Support.title",
      descKey: "Services.Process.Support.desc",
    },
  ];
  const testimonials = [
    {
      nameKey: "Services.Testimonials.AmitVerma.name",
      companyKey: "Services.Testimonials.AmitVerma.company",
      feedbackKey: "Services.Testimonials.AmitVerma.feedback",
      img: "https://randomuser.me/api/portraits/men/49.jpg",
    },
    {
      nameKey: "Services.Testimonials.SarahJohnson.name",
      companyKey: "Services.Testimonials.SarahJohnson.company",
      feedbackKey: "Services.Testimonials.SarahJohnson.feedback",
      img: "https://randomuser.me/api/portraits/men/94.jpg",
    },
    {
      nameKey: "Services.Testimonials.MohammedAlFarsi.name",
      companyKey: "Services.Testimonials.MohammedAlFarsi.company",
      feedbackKey: "Services.Testimonials.MohammedAlFarsi.feedback",
      img: "https://randomuser.me/api/portraits/men/36.jpg",
    },
  ];
  return (
    <>
      <Head>
        <title>{t("Services.meta.title")}</title>
        <meta name="description" content={t("Services.meta.description")} />
      </Head>
      <SiteHeader />
      <main className="bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 min-h-screen caret-transparent">
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
            <source src="services_bg_vedio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/80 via-white/80 to-blue-200/80 dark:from-blue-950/80 dark:via-gray-900/80 dark:to-blue-900/80 z-10"></div>
          {/* Content */}
          <div className="relative flex-1 flex flex-col justify-center items-start z-20 text-blue-900 dark:text-blue-100">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              {t("Services.Hero.title")}
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-xl">
              {t("Services.Hero.description")}
            </p>
            <Link
              href="#services"
              className="px-8 py-4 rounded-full bg-white text-[#155dfc] font-bold shadow-lg hover:bg-blue-100 transition text-lg"
            >
              {t("Services.Hero.cta")}
            </Link>
          </div>
          <div className="relative flex-1 flex justify-center items-center z-20">
            <Image
              src="https://i.pinimg.com/1200x/42/ce/89/42ce89e401941b9786f80c74ec84ce36.jpg"
              alt={t("Services.Hero.image_alt")}
              width={320}
              height={240}
              className="rounded-2xl shadow-2xl object-cover bg-blue-100 dark:bg-blue-900"
            />
          </div>
        </section>

        {/* Services Overview Section - Redesigned */}
        <section
          id="services"
          className="py-20 px-8 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#155dfc] dark:text-blue-100 mb-4">
              {t("Services.Overview.title")}
            </h2>
            <p className="text-blue-900 dark:text-blue-100 text-center mb-8 max-w-2xl mx-auto">
              {t("Services.Overview.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-stretch">
              {serviceList.map((service, idx) => (
                <div
                  key={idx}
                  data-aos="zoom-in"
                  className="group bg-gradient-to-br from-white via-blue-100 to-[#21c2ad] dark:from-blue-950 dark:via-blue-900 dark:to-[#155dfc] rounded-2xl shadow-xl p-8 flex flex-col items-center border-2 border-transparent hover:border-[#21c2ad] transition-all duration-300 hover:scale-105 hover:shadow-2xl relative"
                >
                  {service.icon}
                  <h3 className="font-bold text-[#155dfc] dark:text-blue-100 mb-2 text-lg text-center group-hover:underline">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-700 dark:text-blue-200 text-center text-base mb-2">
                    {t(service.descKey)}
                  </p>
                  <Link
                    href={service.link}
                    className="text-[#21c2ad] px-3 py-2 bg-[#155dfc] rounded-2xl group-hover:bg-[#21c2ad] font-bold group-hover:text-[#155dfc] transition"
                  >
                    {t("Services.Overview.learn_more")}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Redesigned */}
        <section className="py-20 px-8 bg-white dark:bg-blue-950">
          <div className="max-w-5xl flex flex-col gap-5 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#21c2ad] dark:text-blue-100 mb-4">
              {t("Services.Benefits.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  className={`relative bg-gradient-to-br from-blue-100 via-white to-[#21c2ad] dark:from-blue-950 dark:via-blue-900 dark:to-[#155dfc] rounded-xl shadow-lg p-8 flex flex-col items-center border-2 border-transparent hover:border-[#21c2ad] transition-all duration-300 hover:scale-105 hover:shadow-2xl  `}
                >
                  {/* Subtle background icon */}
                  <span className="absolute opacity-10 text-7xl top-4 right-4 pointer-events-none">
                    {benefit.icon}
                  </span>
                  {/* Main icon */}
                  <span className="z-10">{benefit.icon}</span>
                  {/* Badge for first card */}
                  {idx === 0 && (
                    <span className="absolute top-4 left-4 bg-[#155dfc] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md animate-pulse">
                      {t("Services.Benefits.top_choice")}
                    </span>
                  )}
                  <h3 className="font-bold text-[#21c2ad] dark:text-blue-100 mb-2 text-lg text-center z-10">
                    {t(benefit.labelKey)}
                  </h3>
                  <p className="text-gray-700 dark:text-blue-200 text-center text-base z-10">
                    {t(benefit.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-8 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#155dfc] dark:text-blue-100 mb-12">
              {t("Services.Process.title")}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center relative">
                  <span className="w-14 h-14 rounded-full bg-[#21c2ad] text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                    {idx + 1}
                  </span>
                  <h4 className="font-bold text-lg text-[#155dfc] dark:text-blue-100 mb-2">
                    {t(step.titleKey)}
                  </h4>
                  <p className="text-gray-700 dark:text-blue-200 text-center text-base mb-2">
                    {t(step.descKey)}
                  </p>
                  {idx < 3 && (
                    <span className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-1 bg-gradient-to-r from-[#21c2ad] to-[#155dfc] rounded-full"></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials Section - Finance & Accounting Theme */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-blue-100 text-center mb-4">
                {t("Services.Testimonials.title")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-8">
                {t("Services.Testimonials.description")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((client, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-blue-950 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-blue-100 dark:border-blue-900">
                    <Image
                      src={client.img}
                      alt={t(client.nameKey)}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "{t(client.feedbackKey)}"
                  </p>
                  <span className="font-bold text-blue-900 dark:text-blue-100">
                    {t(client.nameKey)}
                  </span>
                  <span className="text-sm text-blue-600 dark:text-blue-300">
                    {t(client.companyKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 bg-gradient-to-tr from-[#155dfc] via-[#21c2ad] to-blue-200 dark:from-blue-950 dark:via-[#21c2ad] dark:to-[#155dfc] text-white relative overflow-hidden">
          {/* Animated background icon */}
          <div className="absolute left-0 top-0 w-40 h-40 opacity-20 animate-spin-slow pointer-events-none">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="40" stroke="#21c2ad" strokeWidth="8" />
              <circle cx="50" cy="50" r="25" stroke="#155dfc" strokeWidth="6" />
            </svg>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg text-[#155dfc] dark:text-blue-100">
              {t("Services.CTA.title")}
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl text-blue-900 dark:text-blue-100">
              {t("Services.CTA.description")}
            </p>
            <Link
              href="/contact-us"
              className="px-10 py-5 rounded-full bg-gradient-to-r from-[#21c2ad] to-[#155dfc] text-white font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all text-xl border-4 border-white"
            >
              <span className="inline-block mr-2 align-middle animate-pulse">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
              {t("Services.CTA.cta")}
            </Link>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default Services;
