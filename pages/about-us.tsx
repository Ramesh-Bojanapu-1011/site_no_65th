import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Aos from "aos";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const teamMembers = [
  {
    nameKey: "AboutUs.Team.member1.name",
    roleKey: "AboutUs.Team.member1.role",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    nameKey: "AboutUs.Team.member2.name",
    roleKey: "AboutUs.Team.member2.role",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    nameKey: "AboutUs.Team.member3.name",
    roleKey: "AboutUs.Team.member3.role",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <title>{t("AboutUs.meta.title")}</title>
        <meta name="description" content={t("AboutUs.meta.description")} />
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
            <source src="about_us_bg_vedio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/80 via-white/80 to-blue-200/80 dark:from-blue-950/80 dark:via-gray-900/80 dark:to-blue-900/80 z-10"></div>
          {/* Content */}
          <div className="relative flex-1 flex flex-col justify-center items-start z-20 text-blue-900 dark:text-blue-100">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              {t("AboutUs.Hero.title")}
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-xl">
              {t("AboutUs.Hero.description")}
            </p>
            <Link
              href="#contact"
              className="px-8 py-4 rounded-full bg-white text-[#155dfc] font-bold shadow-lg hover:bg-blue-100 transition text-lg"
            >
              {t("AboutUs.Hero.cta")}
            </Link>
          </div>
          <div className="relative flex-1 flex justify-center items-center z-20">
            <Image
              src="https://i.pinimg.com/736x/93/bf/d1/93bfd1c9bcce4b7b1ae589c94a0616e6.jpg"
              alt={t("AboutUs.Hero.image_alt")}
              width={500}
              height={450}
              className="rounded-2xl shadow-2xl object-cover bg-blue-100 dark:bg-blue-900"
            />
          </div>
        </section>

        {/* Our Story Section - Enhanced */}
        <section className="py-20 px-8 flex flex-col md:flex-row items-center gap-16 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <Image
                src="https://i.pinimg.com/1200x/a6/e9/f6/a6e9f6ee10fd676fc64aba5390a74a52.jpg"
                alt={t("AboutUs.Story.image_alt")}
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl object-cover"
              />
              <span className="absolute bottom-4 right-4 bg-[#21c2ad] text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold">
                {t("AboutUs.Story.badge")}
              </span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-start">
            <span className="text-[#21c2ad] font-bold text-lg mb-2">
              {t("AboutUs.Story.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              {t("AboutUs.Story.title")}
            </h2>
            <p className="text-gray-700 dark:text-blue-200 mb-6 max-w-lg">
              {t("AboutUs.Story.description")}
            </p>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-[#21c2ad] text-xl">&#9679;</span>
                <span className="text-gray-700 dark:text-blue-200">
                  {t("AboutUs.Story.timeline.0")}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#21c2ad] text-xl">&#9679;</span>
                <span className="text-gray-700 dark:text-blue-200">
                  {t("AboutUs.Story.timeline.1")}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#21c2ad] text-xl">&#9679;</span>
                <span className="text-gray-700 dark:text-blue-200">
                  {t("AboutUs.Story.timeline.2")}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#21c2ad] text-xl">&#9679;</span>
                <span className="text-gray-700 dark:text-blue-200">
                  {t("AboutUs.Story.timeline.3")}
                </span>
              </li>
            </ul>
            <blockquote className="border-l-4 border-[#21c2ad] pl-4 italic text-blue-900 dark:text-blue-100 mb-4">
              {t("AboutUs.Story.quote")}
            </blockquote>
            <span className="text-[#155dfc] font-bold">
              {t("AboutUs.Story.signature")}
            </span>
          </div>
        </section>

        {/* Mission & Values Section - Redesigned */}
        <section className="py-20 px-8 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Mission Statement */}
            <div className="flex-1 flex flex-col justify-center items-start md:items-start mb-8 md:mb-0">
              <span className="text-[#21c2ad] font-bold text-lg mb-2 block">
                {t("AboutUs.Mission.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                {t("AboutUs.Mission.title")}
              </h2>
              <p className="text-gray-700 dark:text-blue-200 mb-6 text-lg max-w-md">
                {t("AboutUs.Mission.description")}
              </p>
              <blockquote className="border-l-4 border-[#21c2ad] pl-4 italic text-blue-900 dark:text-blue-100 mb-4">
                {t("AboutUs.Mission.quote")}
              </blockquote>
              <span className="text-[#155dfc] font-bold">
                {t("AboutUs.Mission.signature")}
              </span>
            </div>
            {/* Values Cards */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: t("AboutUs.Values.cards.0.title"),
                  desc: t("AboutUs.Values.cards.0.desc"),
                  icon: (
                    <svg
                      className="w-10 h-10 text-[#21c2ad] mb-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 20l9-5-9-5-9 5 9 5z" />
                      <path d="M12 12V4" />
                    </svg>
                  ),
                },
                {
                  title: t("AboutUs.Values.cards.1.title"),
                  desc: t("AboutUs.Values.cards.1.desc"),
                  icon: (
                    <svg
                      className="w-10 h-10 text-[#155dfc] mb-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  ),
                },
                {
                  title: t("AboutUs.Values.cards.2.title"),
                  desc: t("AboutUs.Values.cards.2.desc"),
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
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-blue-950 rounded-xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {value.icon}
                  <h3 className="font-bold text-[#155dfc] dark:text-blue-100 mb-2 text-lg text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 dark:text-blue-200 text-center text-base">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section - Redesigned */}
        <section
          className="py-20 px-8 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900"
          id="team"
        >
          <div className="max-w-5xl mx-auto">
            <span className="text-[#21c2ad] font-bold text-lg mb-2 block text-center">
              {t("AboutUs.Team.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-8 text-center">
              {t("AboutUs.Team.title")}
            </h2>
            <p className="pl-4 italic text-blue-900 dark:text-blue-100 mb-10 text-center mx-auto max-w-2xl">
              {t("AboutUs.Team.quote")}
              <br />
              <span className="text-[#155dfc] font-bold">
                {t("AboutUs.Team.signature")}
              </span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-stretch">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  data-aos="zoom-in"
                  className="group flex flex-col items-center bg-gradient-to-br from-white via-blue-100 to-[#21c2ad] dark:from-blue-950 dark:via-blue-900 dark:to-[#155dfc] rounded-2xl shadow-xl p-8 border-2 border-transparent hover:border-[#21c2ad] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative mb-4">
                    <Image
                      src={member.img}
                      alt={t(member.nameKey)}
                      width={100}
                      height={100}
                      className="rounded-full shadow-lg object-cover border-4 border-[#21c2ad]"
                    />
                    <span className="absolute text-nowrap -bottom-2 left-1/2 -translate-x-1/2 bg-[#155dfc] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {t(member.roleKey)}
                    </span>
                  </div>
                  <span className="font-bold text-[#155dfc] dark:text-blue-100 text-lg mb-1 text-center">
                    {t(member.nameKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section - Redesigned */}
        <section className="py-20 px-8 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="max-w-6xl mx-auto">
            <span className="text-[#21c2ad] font-bold text-lg mb-2 block text-center">
              {t("AboutUs.Expertise.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4 text-center">
              {t("AboutUs.Expertise.title")}
            </h2>
            <p className="text-blue-900 dark:text-blue-100 text-center mb-8 max-w-2xl mx-auto">
              {t("AboutUs.Expertise.description")}
            </p>
            <blockquote className="border-l-4 border-[#21c2ad] pl-4 italic text-blue-900 dark:text-blue-100 mb-10 text-center mx-auto max-w-2xl">
              {t("AboutUs.Expertise.quote")}
              <br />
              <span className="text-[#155dfc] font-bold">
                {t("AboutUs.Expertise.signature")}
              </span>
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: t("AboutUs.Expertise.cards.0.title"),
                  desc: t("AboutUs.Expertise.cards.0.desc"),
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
                  title: t("AboutUs.Expertise.cards.1.title"),
                  desc: t("AboutUs.Expertise.cards.1.desc"),
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
                  title: t("AboutUs.Expertise.cards.2.title"),
                  desc: t("AboutUs.Expertise.cards.2.desc"),
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
                  title: t("AboutUs.Expertise.cards.3.title"),
                  desc: t("AboutUs.Expertise.cards.3.desc"),
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
                  title: t("AboutUs.Expertise.cards.4.title"),
                  desc: t("AboutUs.Expertise.cards.4.desc"),
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
                  title: t("AboutUs.Expertise.cards.5.title"),
                  desc: t("AboutUs.Expertise.cards.5.desc"),
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
              ].map((item, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  className="bg-gradient-to-br from-white via-blue-100 to-[#21c2ad] dark:from-blue-950 dark:via-blue-900 dark:to-[#155dfc] rounded-xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-[#21c2ad]"
                >
                  {item.icon}
                  <h3 className="font-bold text-[#155dfc] dark:text-blue-100 mb-2 text-lg text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-blue-200 text-center text-base">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/CTA Section - Redesigned */}
        <section
          className="bg-gradient-to-r from-[#21c2ad] to-[#155dfc] text-white rounded-4xl mx-auto"
          id="contact"
        >
          <div className="bg-white/10 rounded-2xl shadow-2xl p-10 flex flex-col items-center w-full">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
              {t("AboutUs.CTA.title")}
            </h2>
            <p className="text-lg text-center md:text-xl mb-6 max-w-xl text-white/90">
              {t("AboutUs.CTA.description")}
            </p>
            <span className="inline-block bg-[#155dfc] text-white px-4 py-2 rounded-full font-bold mb-6 shadow-md animate-pulse">
              {t("AboutUs.CTA.badge")}
            </span>
            <Link
              href="/contact-us"
              className="px-10 py-5 rounded-full bg-white text-[#155dfc] font-bold shadow-lg hover:bg-blue-100 transition-all duration-300 text-xl hover:scale-105"
            >
              {t("AboutUs.CTA.cta")}
            </Link>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default AboutUs;
