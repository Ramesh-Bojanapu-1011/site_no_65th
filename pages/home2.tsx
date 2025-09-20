import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  ChartCandlestick,
  ChartNoAxesCombined,
  FolderOpen,
  Lightbulb,
  Search,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Home2: React.FC = () => {
  const { t } = useTranslation();
  const services = [
    {
      title: t("Home2.Services.TaxStrategy.title"),
      desc: t("Home2.Services.TaxStrategy.desc"),
      icon: <Lightbulb size={40} />,
    },
    {
      title: t("Home2.Services.Payroll.title"),
      desc: t("Home2.Services.Payroll.desc"),
      icon: <FolderOpen size={40} />,
    },
    {
      title: t("Home2.Services.RiskAssurance.title"),
      desc: t("Home2.Services.RiskAssurance.desc"),
      icon: <Search size={40} />,
    },
    {
      title: t("Home2.Services.FinancialInsights.title"),
      desc: t("Home2.Services.FinancialInsights.desc"),
      icon: <ChartCandlestick size={40} />,
    },
    {
      title: t("Home2.Services.StrategicAdvisory.title"),
      desc: t("Home2.Services.StrategicAdvisory.desc"),
      icon: <ChartNoAxesCombined size={40} />,
    },
  ];
  const processSteps = [
    {
      icon: <Lightbulb size={32} />,
      title: t("Home2.Process.Discovery.title"),
      desc: t("Home2.Process.Discovery.desc"),
    },
    {
      icon: <Search size={32} />,
      title: t("Home2.Process.Analysis.title"),
      desc: t("Home2.Process.Analysis.desc"),
    },
    {
      icon: <ChartNoAxesCombined size={32} />,
      title: t("Home2.Process.Strategy.title"),
      desc: t("Home2.Process.Strategy.desc"),
    },
    {
      icon: <ChartCandlestick size={32} />,
      title: t("Home2.Process.Execution.title"),
      desc: t("Home2.Process.Execution.desc"),
    },
    {
      icon: <FolderOpen size={32} />,
      title: t("Home2.Process.Support.title"),
      desc: t("Home2.Process.Support.desc"),
    },
  ];
  const testimonials = [
    {
      name: t("Home2.Testimonials.AmitVerma.name"),
      company: t("Home2.Testimonials.AmitVerma.company"),
      feedback: t("Home2.Testimonials.AmitVerma.feedback"),
    },
    {
      name: t("Home2.Testimonials.SarahJohnson.name"),
      company: t("Home2.Testimonials.SarahJohnson.company"),
      feedback: t("Home2.Testimonials.SarahJohnson.feedback"),
    },
    {
      name: t("Home2.Testimonials.MohammedAlFarsi.name"),
      company: t("Home2.Testimonials.MohammedAlFarsi.company"),
      feedback: t("Home2.Testimonials.MohammedAlFarsi.feedback"),
    },
  ];
  return (
    <>
      <Head>
        <title>{t("Home2.meta.title")}</title>
        <meta name="description" content={t("Home2.meta.description")} />
      </Head>
      <SiteHeader />
      <main className="bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 min-h-screen">
        {/* Hero Section */}
        <section className="flex flex-col min-h-screen md:flex-row items-center justify-between px-8 py-24 gap-12 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 text-blue-900 dark:text-blue-100">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              {t("Home2.Hero.title1")}
              <br />
              {t("Home2.Hero.title2")}
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-xl">
              {t("Home2.Hero.description")}
            </p>
            <Link
              href="/contact-us"
              className="px-8 py-4 rounded-full bg-white text-[#155dfc] font-bold shadow-lg hover:bg-blue-100 transition text-lg"
            >
              {t("Home2.Hero.cta")}
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="https://i.pinimg.com/736x/d4/35/ed/d435ed9e28566f1c51838931a449d97c.jpg"
              alt={t("Home2.Hero.image_alt")}
              width={400}
              height={400}
              className="rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-8 flex flex-col md:flex-row items-center gap-16 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="flex-1 flex justify-center">
            <Image
              src="https://i.pinimg.com/1200x/0f/64/6b/0f646bd50e3088728b6db129b87471ab.jpg"
              alt={t("Home2.About.image_alt")}
              width={400}
              height={550}
              className="rounded-xl shadow-lg object-cover bg-blue-100 dark:bg-blue-900"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start">
            <span className="text-[#21c2ad] font-bold text-lg mb-2">
              {t("Home2.About.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              {t("Home2.About.title")}
            </h2>
            <p className="text-gray-700 dark:text-blue-200 mb-6 max-w-lg">
              {t("Home2.About.description")}
            </p>
            <Link
              href="/about-us"
              className="px-6 py-3 rounded-lg bg-[#21c2ad] text-white font-bold shadow-lg hover:bg-[#155dfc] transition"
            >
              {t("Home2.About.cta")}
            </Link>
          </div>
        </section>

        {/* Services Section - Horizontal Stepper/Timeline Look */}
        <section className="py-20 px-8 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#155dfc] dark:text-blue-100 mb-16">
              {t("Home2.Services.title")}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 relative">
              {services.map((service, idx, arr) => (
                <div
                  key={idx}
                  className="flex flex-col items-center h-[220px] w-[220px]   px-2 relative"
                >
                  <span className="w-16 h-16 rounded-full bg-[#21c2ad] text-white flex items-center justify-center text-3xl font-bold mb-4 shadow-lg">
                    {service.icon}
                  </span>
                  <h3 className="font-bold text-lg text-[#155dfc] dark:text-blue-100 mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-blue-200 text-center text-sm mb-4">
                    {service.desc}
                  </p>
                  {idx < arr.length - 1 && (
                    <span className="hidden md:block absolute -right-0 top-1/2 transform -translate-y-1/2 w-10 h-1 bg-gradient-to-r from-[#21c2ad] to-[#155dfc] rounded-full"></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-8 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#21c2ad] dark:text-blue-100 mb-16">
              {t("Home2.Process.title")}
            </h2>
            <div className="relative flex flex-col items-center">
              <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#21c2ad] to-[#155dfc] -translate-x-1/2 z-0"></div>
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center w-full mb-12 z-10 ${
                    idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div
                    className={`flex flex-col items-center ${
                      idx % 2 === 0 ? "md:items-end" : "md:items-start"
                    } md:w-1/2 px-4`}
                  >
                    <span className="w-14 h-14 rounded-full bg-[#21c2ad] text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                      {step.icon}
                    </span>
                    <h4 className="font-bold text-xl text-[#155dfc] dark:text-blue-100 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-700 dark:text-blue-200 text-base max-w-md mb-2">
                      {step.desc}
                    </p>
                  </div>
                  <div className="hidden md:block"></div>
                  {/* Connector Dot */}
                  <span className="absolute left-1/2 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#21c2ad] shadow-lg z-20"></span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-8 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#155dfc] dark:text-blue-100 mb-12">
              {t("Home2.Testimonials.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-stretch">
              {testimonials.map((client, idx) => {
                const initials = client.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase();
                return (
                  <div
                    key={idx}
                    className="relative flex flex-col items-center justify-between       dark:bg-[#21c2ad] rounded-2xl shadow-2xl p-10 min-w-[220px] max-w-[340px] transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
                  >
                    <span className="absolute top-6 left-6 text-3xl text-[#155dfc] dark:text-[#21c2ad] opacity-30">
                      &#10077;
                    </span>
                    <span className="w-16 h-16 rounded-full bg-[#155dfc] dark:bg-[#21c2ad] text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                      {initials}
                    </span>
                    <p className="text-blue-900 dark:text-blue-100 italic text-center mb-6 text-lg">
                      {client.feedback}
                    </p>
                    <span className="font-bold text-[#21c2ad] dark:text-blue-100 text-lg mb-1">
                      {client.name}
                    </span>
                    <span className="text-sm text-[#155dfc] dark:text-white mb-2">
                      {client.company}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 bg-gradient-to-r from-[#21c2ad] to-[#155dfc] text-white">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
              {t("Home2.CTA.title")}
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              {t("Home2.CTA.description")}
            </p>
            <Link
              href="/contact-us"
              className="px-10 py-5 rounded-full bg-white text-[#155dfc] font-bold shadow-lg hover:bg-blue-100 transition text-xl"
            >
              {t("Home2.CTA.cta")}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default Home2;
