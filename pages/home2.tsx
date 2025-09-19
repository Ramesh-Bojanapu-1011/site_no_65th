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

const Home2: React.FC = () => {
  return (
    <>
      <Head>
        <title>FinAccount - Elevate Your Business with Finance Expertise</title>
        <meta
          name="description"
          content="Unlock growth, compliance, and clarity with our modern accounting and financial solutions."
        />
      </Head>
      <SiteHeader />
      <main className="bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 min-h-screen">
        {/* Hero Section */}
        <section className="flex flex-col min-h-screen md:flex-row items-center justify-between px-8 py-24 gap-12 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 text-blue-900 dark:text-blue-100">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              Elevate Your Business
              <br />
              with Finance Expertise
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-xl">
              Unlock growth, compliance, and clarity with our modern accounting
              and financial solutions.
            </p>
            <Link
              href="/contact-us"
              className="px-8 py-4 rounded-full bg-white text-[#155dfc] font-bold shadow-lg hover:bg-blue-100 transition text-lg"
            >
              Get Started
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="https://i.pinimg.com/736x/d4/35/ed/d435ed9e28566f1c51838931a449d97c.jpg"
              alt="Finance Team"
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
              src="/globe.svg"
              alt="About Finance"
              width={220}
              height={180}
              className="rounded-xl shadow-lg object-cover bg-blue-100 dark:bg-blue-900"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start">
            <span className="text-[#21c2ad] font-bold text-lg mb-2">
              ABOUT US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              Trusted Financial Guidance for Modern Businesses
            </h2>
            <p className="text-gray-700 dark:text-blue-200 mb-6 max-w-lg">
              Our team delivers expert accounting, tax, and advisory services
              tailored for startups, SMEs, and enterprises. We combine
              technology and experience to help you make confident decisions.
            </p>
            <Link
              href="/about-us"
              className="px-6 py-3 rounded-lg bg-[#21c2ad] text-white font-bold shadow-lg hover:bg-[#155dfc] transition"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Services Section - Horizontal Stepper/Timeline Look */}
        <section className="py-20 px-8 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#155dfc] dark:text-blue-100 mb-16">
              Our Services
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 relative">
              {[
                {
                  title: "Tax Strategy",
                  desc: "Reduce tax burdens and enhance savings with smart planning.",
                  icon: <Lightbulb size={40} />,
                },
                {
                  title: "Payroll Services",
                  desc: "Seamless, precise payroll processing for every workforce.",
                  icon: <FolderOpen size={40} />,
                },
                {
                  title: "Risk & Assurance",
                  desc: "Thorough reviews to ensure accuracy and reliability.",
                  icon: <Search size={40} />,
                },
                {
                  title: "Financial Insights",
                  desc: "Accurate, up-to-date data for better business choices.",
                  icon: <ChartCandlestick size={40} />,
                },
                {
                  title: "Strategic Advisory",
                  desc: "Guidance to boost growth, compliance, and direction.",
                  icon: <ChartNoAxesCombined size={40} />,
                },
              ].map((service, idx, arr) => (
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
              How We Work
            </h2>
            <div className="relative flex flex-col items-center">
              <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#21c2ad] to-[#155dfc] -translate-x-1/2 z-0"></div>
              {[
                {
                  icon: <Lightbulb size={32} />,
                  title: "Discovery",
                  desc: "We listen to your needs and goals.",
                },
                {
                  icon: <Search size={32} />,
                  title: "Analysis",
                  desc: "We review your finances and identify opportunities.",
                },
                {
                  icon: <ChartNoAxesCombined size={32} />,
                  title: "Strategy",
                  desc: "We design a custom plan for your business.",
                },
                {
                  icon: <ChartCandlestick size={32} />,
                  title: "Execution",
                  desc: "We implement solutions and keep you informed.",
                },
                {
                  icon: <FolderOpen size={32} />,
                  title: "Support",
                  desc: "We provide ongoing advice and updates.",
                },
              ].map((step, idx) => (
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
              Client Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-stretch">
              {[
                {
                  name: "Amit Verma",
                  company: "Verma Textiles",
                  feedback:
                    "Their team helped us streamline our finances and plan for growth.",
                },
                {
                  name: "Sarah Johnson",
                  company: "Johnson Consulting",
                  feedback:
                    "Professional, reliable, and always available for support.",
                },
                {
                  name: "Mohammed Al-Farsi",
                  company: "Al-Farsi Trading",
                  feedback:
                    "We trust them for all our audit and compliance needs.",
                },
              ].map((client, idx) => {
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
              Ready to Transform Your Finances?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              Partner with us for expert accounting, strategic planning, and
              business growth. Take the next step toward financial clarity and
              success.
            </p>
            <Link
              href="/contact-us"
              className="px-10 py-5 rounded-full bg-white text-[#155dfc] font-bold shadow-lg hover:bg-blue-100 transition text-xl"
            >
              Get Started Now
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default Home2;
