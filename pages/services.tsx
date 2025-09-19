import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import React from "react";

type Props = {};

import Image from "next/image";
import Link from "next/link";

const serviceList = [
  {
    title: "Accounting & Bookkeeping",
    desc: "Accurate records and reporting for peace of mind.",
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
    title: "Tax Planning & Compliance",
    desc: "Smart strategies to minimize liabilities and stay compliant.",
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
    title: "Investiment Advisory",
    desc: "Expert guidance for growth, investment, and decision-making.",
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
    title: "Payroll Management",
    desc: "Efficient payroll solutions for every business size.",
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
    title: "Audit & Assurance",
    desc: "Thorough reviews to ensure accuracy and reliability.",
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
    title: "Finacial Consulting",
    desc: "Tailored advice to help you reach your goals.",
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
  React.useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000 });
    });
  }, []);
  return (
    <>
      <Head>
        <title>Our Services</title>
        <meta name="description" content="Explore our range of services." />
      </Head>
      <SiteHeader />
      <main className="bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 min-h-screen caret-transparent">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-24 gap-12 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 text-blue-900 dark:text-blue-100 min-h-screen">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              Our Services
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-xl">
              Discover how our expert solutions can help your business grow,
              stay compliant, and thrive in a changing world.
            </p>
            <Link
              href="#services"
              className="px-8 py-4 rounded-full bg-white text-[#155dfc] font-bold shadow-lg hover:bg-blue-100 transition text-lg"
            >
              View All Services
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="https://i.pinimg.com/1200x/42/ce/89/42ce89e401941b9786f80c74ec84ce36.jpg"
              alt="Services"
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
              Explore Our Services
            </h2>
            <p className="text-blue-900 dark:text-blue-100 text-center mb-8 max-w-2xl mx-auto">
              Choose from our comprehensive suite of financial services, each
              designed to help your business thrive. Click any service to learn
              more.
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
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-blue-200 text-center text-base mb-2">
                    {service.desc}
                  </p>
                  <Link
                    href={service.link}
                    className="text-[#21c2ad] px-3 py-2 bg-[#155dfc] rounded-2xl group-hover:bg-[#21c2ad] font-bold group-hover:text-[#155dfc] transition"
                  >
                    Learn More →
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
              Why Choose FinAccount?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  label: "Expert Team",
                  desc: "Our professionals bring years of experience and deep industry knowledge.",
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
                  label: "Proven Results",
                  desc: "We deliver measurable improvements and lasting value.",
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
                  label: "Personalized Solutions",
                  desc: "We tailor our services to your unique business needs.",
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
              ].map((benefit, idx) => (
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
                      Top Choice
                    </span>
                  )}
                  <h3 className="font-bold text-[#21c2ad] dark:text-blue-100 mb-2 text-lg text-center z-10">
                    {benefit.label}
                  </h3>
                  <p className="text-gray-700 dark:text-blue-200 text-center text-base z-10">
                    {benefit.desc}
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
              How We Work
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {["Consultation", "Strategy", "Implementation", "Support"].map(
                (step, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center relative"
                  >
                    <span className="w-14 h-14 rounded-full bg-[#21c2ad] text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-lg text-[#155dfc] dark:text-blue-100 mb-2">
                      {step}
                    </h4>
                    <p className="text-gray-700 dark:text-blue-200 text-center text-base mb-2">
                      {idx === 0
                        ? "We listen to your needs and goals."
                        : idx === 1
                          ? "We design a custom plan for your business."
                          : idx === 2
                            ? "We implement solutions and keep you informed."
                            : "We provide ongoing advice and updates."}
                    </p>
                    {idx < 3 && (
                      <span className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-1 bg-gradient-to-r from-[#21c2ad] to-[#155dfc] rounded-full"></span>
                    )}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Client Testimonials Section - Finance & Accounting Theme */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-blue-100 text-center mb-4">
                What Our Clients Say
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-8">
                Discover how our finance and accounting expertise has helped
                businesses achieve their goals and maintain financial health.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Amit Verma",
                  company: "Verma Textiles Pvt Ltd",
                  feedback:
                    "FinAccount's team streamlined our accounting processes and provided invaluable tax advice. Their expertise and dedication have made a real difference to our business growth.",
                  img: "https://randomuser.me/api/portraits/men/49.jpg",
                },
                {
                  name: "Sarah Johnson",
                  company: "Johnson Consulting",
                  feedback:
                    "Professional, reliable, and always available for support. Their financial management solutions helped us optimize cash flow and plan for expansion.",
                  img: "https://randomuser.me/api/portraits/men/94.jpg",
                },
                {
                  name: "Mohammed Al-Farsi",
                  company: "Al-Farsi Trading Co.",
                  feedback:
                    "We trust FinAccount for all our audit and compliance needs. Their attention to detail and proactive approach ensure we stay ahead of regulations.",
                  img: "https://randomuser.me/api/portraits/men/36.jpg",
                },
              ].map((client, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-blue-950 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-blue-100 dark:border-blue-900">
                    <Image
                      src={client.img}
                      alt={client.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "{client.feedback}"
                  </p>
                  <span className="font-bold text-blue-900 dark:text-blue-100">
                    {client.name}
                  </span>
                  <span className="text-sm text-blue-600 dark:text-blue-300">
                    {client.company}
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
              Ready to Transform Your Finances?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl text-blue-900 dark:text-blue-100">
              Partner with us for expert accounting, strategic planning, and
              business growth. Take the next step toward financial clarity and
              success.
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
              Get Started Now
            </Link>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default Services;
