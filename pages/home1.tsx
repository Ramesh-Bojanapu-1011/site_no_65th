import Aos from "aos";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import SiteFooter from "../src/components/SiteFooter";
import SiteHeader from "../src/components/SiteHeader";

const Home1: React.FC = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <Head>
        <title>{t("Home1.title")}</title>
        <meta name="description" content={t("Home1.meta_description")} />
      </Head>

      <SiteHeader />
      <main className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 caret-transparent dark:via-gray-900 dark:to-blue-900 min-h-screen ">
        <section className="relative flex min-h-screen flex-col items-center justify-center py-20 px-4 text-center overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="home1_bg_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-400/80 dark:from-blue-900/80 dark:to-blue-700/80 z-10"></div>

          {/* Content */}
          <div className="relative z-20 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {t("Home1.hero_title")}
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
              {t("Home1.hero_description")}
            </p>
          </div>
        </section>

        {/* About Section (Image Layout) */}
        <section className="flex py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="flex flex-col md:justify-center   md:flex-row items-center md:items-start   mx-auto gap-10">
            <div className="flex flex-col md:w-1/2 max-w-screen items-center md:items-start gap-8">
              {/* Image Grid */}
              <div className=" flex  gap-6 w-full">
                <div className="    rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src="https://i.pinimg.com/736x/03/38/39/033839f45eb8e70c0c5664547ca1c2ae.jpg"
                    alt={t("Home1.about_image1_alt")}
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="rounded-lg flex flex-col gap-2 shadow-lg   ">
                  <Image
                    src="https://i.pinimg.com/736x/2e/6d/82/2e6d82123a4ef5422984ea07fa6ad0cd.jpg"
                    alt={t("Home1.about_image2_alt")}
                    width={200}
                    height={120}
                    className="object-cover rounded-lg w-full h-1/2"
                  />
                  <Image
                    src="https://i.pinimg.com/736x/18/d3/7f/18d37fc251919ef267541fd5d406c821.jpg"
                    alt={t("Home1.about_image3_alt")}
                    width={200}
                    height={120}
                    className="object-cover rounded-lg w-full h-1/2"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 max-w-screen flex flex-col justify-center items-start mt-10 md:mt-0 md:pl-16">
              <span className="text-blue-600 dark:text-blue-300 font-bold text-xl mb-2">
                {t("Hedder.About_Us")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-6 leading-tight">
                {t("Home1.about_title")}
                <br />
                {t("Home1.about_subtitle")}
              </h2>
              <p className="text-blue-800 dark:text-blue-200 mb-8 max-w-lg">
                {t("Home1.about_description")}
              </p>
              <Link
                href="/about-us"
                className="px-8 py-3 rounded-lg bg-blue-600 dark:bg-blue-700 text-white font-bold shadow-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition"
              >
                {t("Hedder.About_Us")}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-16">
            <div className="max-w-xl w-full mb-10 md:mb-0">
              <span className="text-[#193cb8] font-bold tracking-widest text-sm mb-4 block">
                {t("Home1.what_we_do_badge")}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-blue-100 mb-6">
                {t("Home1.what_we_do_title")}
              </h1>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {t("Home1.what_we_do_description1")}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                {t("Home1.what_we_do_description2")}
              </p>
              <div className="flex items-center gap-4 mb-8">
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-[#193cb8]"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10C22 6.48 17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                  />
                </svg>
                <div>
                  <span className="font-bold text-lg text-gray-900 dark:text-blue-100">
                    {t("Home1.best_service_awards_title")}
                  </span>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {t("Home1.best_service_awards_description")}
                  </p>
                </div>
              </div>
              <Link
                href="/services"
                className="inline-block px-8 py-4 rounded-full bg-blue-900 text-white font-bold shadow-lg hover:bg-blue-700 transition text-lg"
              >
                {t("Hedder.All_Services")} →
              </Link>
            </div>
            <div className="flex flex-col gap-8 w-full max-w-xl">
              {[
                {
                  title: t("Hedder.Bookkeeping"),
                  description: t("Home1.bookkeeping_description"),
                  link: "/bookkeeping",
                  icon: (
                    <svg
                      width="40"
                      height="40"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="text-[#193cb8]"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <rect
                        x="8"
                        y="8"
                        width="8"
                        height="2"
                        fill="currentColor"
                      />
                      <rect
                        x="8"
                        y="12"
                        width="8"
                        height="2"
                        fill="currentColor"
                      />
                    </svg>
                  ),
                },
                {
                  title: t("Home1.financial_statements_title"),
                  description: t("Home1.financial_statements_description"),
                  link: "/financial-statements",
                  icon: (
                    <svg
                      width="40"
                      height="40"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="text-[#193cb8]"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <rect
                        x="8"
                        y="8"
                        width="8"
                        height="2"
                        fill="currentColor"
                      />
                    </svg>
                  ),
                },
                {
                  title: t("Home1.financial_management_title"),
                  description: t("Home1.financial_management_description"),
                  link: "/financial-management",
                  icon: (
                    <svg
                      width="40"
                      height="40"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="text-[#193cb8]"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 8v4l3 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
              ].map((service) => (
                <div
                  data-aos="fade-left"
                  key={service.title}
                  className="bg-blue-100 dark:bg-blue-950 rounded-2xl shadow-lg p-8 flex items-center gap-6"
                >
                  {service.icon}
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-blue-100 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      {service.description}
                    </p>
                    <Link
                      href={service.link}
                      className="text-blue-900 dark:text-blue-300 font-semibold text-sm hover:underline"
                    >
                      {t("Home1.learn_more")}→
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Why Choose Us Section - Finance & Accounting Theme */}
        <section className="py-20 bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center mb-16">
              <span className="bg-gradient-to-r from-[#21c2ad] to-[#155dfc] dark:from-[#155dfc] dark:to-[#21c2ad] text-white font-bold px-8 py-3 rounded-full mb-6 text-base tracking-widest shadow-lg">
                {t("Home1.why_choose_us_badge")}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 dark:text-blue-100 text-center mb-4 drop-shadow-lg">
                {t("Home1.why_choose_us_title")}
              </h2>
              <p className="text-blue-800 dark:text-blue-200 text-center max-w-2xl mb-10 text-lg">
                {t("Home1.why_choose_us_description")}
              </p>
            </div>
            <div className="flex flex-col md:flex-wrap md:flex-row gap-10 justify-center items-center">
              {[
                {
                  title: t("Home1.certified_experts_title"),
                  description: t("Home1.certified_experts_description"),
                  icon: (
                    <span className="bg-[#21c2ad] dark:bg-[#155dfc] rounded-full p-4 mb-6 flex items-center justify-center shadow-lg">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="text-white"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 12l2 2 4-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  ),
                },
                {
                  title: t("Home1.personalized_solutions_title"),
                  description: t("Home1.personalized_solutions_description"),
                  icon: (
                    <span className="bg-[#155dfc] dark:bg-[#21c2ad] rounded-full p-4 mb-6 flex items-center justify-center shadow-lg">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="text-white"
                      >
                        <rect
                          x="4"
                          y="4"
                          width="16"
                          height="16"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 12h8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  ),
                },
                {
                  title: t("Home1.transparent_secure_title"),
                  description: t("Home1.transparent_secure_description"),
                  icon: (
                    <span className="bg-gradient-to-r from-[#21c2ad] to-[#155dfc] dark:from-[#155dfc] dark:to-[#21c2ad] rounded-full p-4 mb-6 flex items-center justify-center shadow-lg">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="text-white"
                      >
                        <rect
                          x="6"
                          y="10"
                          width="12"
                          height="8"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 14v2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9 10V8a3 3 0 0 1 6 0v2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  ),
                },
              ].map((reason, idx) => (
                <div
                  key={idx}
                  data-aos="zoom-in"
                  className="bg-white dark:bg-blue-950 rounded-3xl shadow-2xl px-10 py-12 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-blue-300 dark:hover:shadow-[#21c2ad]"
                  style={{ minWidth: "280px", maxWidth: "340px" }}
                >
                  {reason.icon}
                  <h3 className="font-extrabold text-xl text-blue-900 dark:text-blue-100 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-blue-800 dark:text-blue-200 mb-2 text-base">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section - Finance & Accounting Theme */}
        <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="  mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Left: Business Image with Play Button Overlay */}
              <div className="relative w-full md:w-1/2 flex-shrink-0 flex justify-center items-center">
                <Image
                  src="https://i.pinimg.com/736x/f7/8f/01/f78f01d3c134c2de5fc97a28a3538595.jpg"
                  alt={t("Home1.process_image_alt")}
                  width={480}
                  height={400}
                  className="rounded-2xl object-cover shadow-xl"
                />
              </div>
              {/* Right: Text Content and Features */}
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                <span className="text-[#193cb8] font-bold tracking-widest text-sm mb-2">
                  {t("Home1.about_finaccount_badge")}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-100 mb-4 leading-tight">
                  {t("Home1.largest_demand_title")}
                  <br />
                  {t("Home1.building_experts_subtitle")}
                </h2>
                <p className="text-gray-700 dark:text-blue-200 mb-6 max-w-xl">
                  {t("Home1.finaccount_description")}
                </p>
                <div className="flex flex-col gap-8 mt-4">
                  <div className="flex items-start gap-4">
                    <span className="bg-blue-100 dark:bg-blue-950 rounded-lg p-3 flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="text-[#155dfc]"
                      >
                        <rect
                          x="4"
                          y="4"
                          width="16"
                          height="16"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 12h8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-1">
                        {t("Home1.support_raising_funds_title")}
                      </h3>
                      <p className="text-gray-700 dark:text-blue-200 text-base">
                        {t("Home1.support_raising_funds_description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-blue-100 dark:bg-blue-950 rounded-lg p-3 flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="text-[#155dfc]"
                      >
                        <rect
                          x="4"
                          y="4"
                          width="16"
                          height="16"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 16h8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8 12h8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-1">
                        {t("Home1.outsourced_consulting_title")}
                      </h3>
                      <p className="text-gray-700 dark:text-blue-200 text-base">
                        {t("Home1.outsourced_consulting_description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f4fbf8] dark:bg-blue-950">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <span className="bg-[#155dfc] dark:bg-[#8ec5ff] dark:text-black text-white font-bold px-6 py-2 rounded-full mb-4 text-sm tracking-widest">
                {t("Home1.team_member_badge")}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-blue-100 text-center mb-4">
                {t("Home1.meet_team_title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              {[
                {
                  name: t("Home1.team_priya_name"),
                  role: t("Home1.team_priya_role"),
                  img: "https://i.pinimg.com/736x/e5/9c/14/e59c1493e407456088bd456159d97ee7.jpg",
                  socials: [
                    { icon: "f", url: "#" },
                    { icon: "x", url: "#" },
                    { icon: "in", url: "#" },
                  ],
                },
                {
                  name: t("Home1.team_david_name"),
                  role: t("Home1.team_david_role"),
                  img: "https://i.pinimg.com/736x/34/da/e2/34dae2b1c9a2c38bfdc18bbb5a414149.jpg",
                  socials: [
                    { icon: "f", url: "#" },
                    { icon: "x", url: "#" },
                    { icon: "in", url: "#" },
                  ],
                },
                {
                  name: t("Home1.team_maria_name"),
                  role: t("Home1.team_maria_role"),
                  img: "https://i.pinimg.com/736x/56/85/49/56854952ea1912a7a35a6fd36c45e024.jpg",
                  socials: [
                    { icon: "f", url: "#" },
                    { icon: "x", url: "#" },
                    { icon: "in", url: "#" },
                  ],
                },
                {
                  name: t("Home1.team_james_name"),
                  role: t("Home1.team_james_role"),
                  img: "https://i.pinimg.com/736x/df/0a/20/df0a2049a88366c1e84ee71e565143cb.jpg",
                  socials: [
                    { icon: "f", url: "#" },
                    { icon: "x", url: "#" },
                    { icon: "in", url: "#" },
                  ],
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 rounded-2xl shadow-lg p-6 flex flex-col items-center w-full max-w-xs group relative"
                >
                  <div className="w-full h-64 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={300}
                      height={256}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-blue-100 mb-1 text-center">
                    {member.name}
                  </h3>
                  <p className="text-[#155dfc] dark:text-[#8ec5ff] font-semibold mb-2 text-center">
                    {member.role}
                  </p>
                  {member.socials.length > 0 && (
                    <div className="flex gap-3 justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-1/2  -translate-x-1/2 bottom-30 z-10">
                      {member.socials.map((s, i) => (
                        <a
                          key={i}
                          href={s.url}
                          className="bg-[#155dfc] text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#155dfc] transition"
                        >
                          {s.icon === "f" ? (
                            <FacebookIcon size={16} />
                          ) : s.icon === "x" ? (
                            <TwitterIcon size={16} />
                          ) : (
                            <LinkedinIcon size={16} />
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default Home1;
