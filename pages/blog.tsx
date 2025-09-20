import React from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const blogList = [
  {
    titleKey: "Blog.Featured.bookkeeping.title",
    descKey: "Blog.Featured.bookkeeping.desc",
    link: "/bookkeeping-practices",
    img: "https://i.pinimg.com/736x/bf/6e/b9/bf6eb92c7bd894306abb2391b5604fe5.jpg",
  },
  {
    titleKey: "Blog.Featured.tax_saving.title",
    descKey: "Blog.Featured.tax_saving.desc",
    link: "/tax-saving-2025",
    img: "https://i.pinimg.com/736x/7a/9e/3a/7a9e3abe745a468b32dd81c5e4cd2eb6.jpg",
  },
  {
    titleKey: "Blog.Featured.advisory_success.title",
    descKey: "Blog.Featured.advisory_success.desc",
    link: "/advisory-success",
    img: "https://i.pinimg.com/736x/70/52/ad/7052ad5f76a69b85133af4569959dc32.jpg",
  },
];

const Blog = () => {
  const { t } = useTranslation();
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <title>{t("Blog.meta.title")}</title>
        <meta name="description" content={t("Blog.meta.description")} />
      </Head>
      <main className="bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 min-h-screen caret-transparent">
        <SiteHeader />
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-24 gap-12 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 text-blue-900 dark:text-blue-100 min-h-screen">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              {t("Blog.Hero.title")}
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-xl">
              {t("Blog.Hero.description")}
            </p>
            <Link
              href="#featured"
              className="px-8 py-4 rounded-full bg-white text-[#155dfc] font-bold shadow-lg hover:bg-blue-100 transition text-lg"
            >
              {t("Blog.Hero.cta")}
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="https://i.pinimg.com/736x/65/5b/81/655b81dc33c00f9fd29ce510700bdebf.jpg"
              alt="Blog Hero"
              width={500}
              height={450}
              className="rounded-2xl shadow-2xl object-cover bg-blue-100 dark:bg-blue-900"
            />
          </div>
        </section>

        {/* Featured Blogs Section */}
        <section
          id="featured"
          className="py-20 px-8 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900"
        >
          <div className=" mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#155dfc] dark:text-blue-100 mb-4">
              {t("Blog.Featured.title")}
            </h2>
            <p className="text-blue-900 dark:text-blue-100 text-center mb-8 max-w-2xl mx-auto">
              {t("Blog.Featured.description")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-stretch">
              {blogList.map((blog, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  className={`group bg-white/80 dark:bg-blue-950/80 rounded-3xl shadow-2xl p-0 flex flex-col items-center border-0 relative overflow-hidden transition-all duration-300 hover:shadow-3xl backdrop-blur-lg  `}
                  style={{
                    boxShadow:
                      "0 8px 32px 0 rgba(33,194,173,0.12), 0 1.5px 8px 0 rgba(21,93,252,0.08)",
                  }}
                >
                  <div className="p-8 flex flex-col items-center w-full">
                    <div
                      className="mb-4 rounded-xl shadow-lg overflow-hidden w-full flex justify-center items-center relative"
                      style={{
                        background:
                          "linear-gradient(90deg, #21c2ad22 0%, #155dfc22 100%)",
                      }}
                    >
                      <Image
                        src={blog.img}
                        alt={t(blog.titleKey)}
                        width={320}
                        height={180}
                        className="rounded-xl h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-110  "
                      />
                    </div>
                    <h3 className="font-extrabold text-[#155dfc] dark:text-blue-100 mb-2 text-xl text-center group-hover:underline drop-shadow-md">
                      {t(blog.titleKey)}
                    </h3>
                    <p className="text-gray-700 dark:text-blue-200 text-center text-base mb-4">
                      {t(blog.descKey)}
                    </p>
                    <Link
                      href={blog.link}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-[#21c2ad] to-[#155dfc] text-white font-bold shadow-lg hover:scale-110 hover:bg-[#21c2ad] transition-all text-lg border-2 border-white"
                    >
                      <span className="inline-block mr-2 align-middle animate-pulse">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </span>
                      {t("Blog.Featured.read_more")}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Our Blog Section */}
        <section className="py-20 px-8 bg-white dark:bg-blue-950">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-8 items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#21c2ad] dark:text-blue-100 mb-4">
              {t("Blog.About.title")}
            </h2>
            <p className="text-gray-700 dark:text-blue-200 text-lg max-w-2xl mx-auto">
              {t("Blog.About.description")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                {
                  title: "Expert Insights",
                  desc: "Articles written by seasoned professionals with years of industry experience.",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#155dfc]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 12h18" />
                      <path d="M12 3v18" />
                    </svg>
                  ),
                  color: "[#155dfc]",
                },
                {
                  title: "Actionable Tips",
                  desc: "Practical advice and step-by-step guides to help you manage your finances with confidence.",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#21c2ad]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4l3 3" />
                    </svg>
                  ),
                  color: "[#21c2ad]",
                },
                {
                  title: "Latest Trends",
                  desc: "Stay ahead with updates on regulations, technology, and best practices in the industry.",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#155dfc]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <path d="M9 9h6v6H9z" />
                    </svg>
                  ),
                  color: "[#155dfc]",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  data-aos="zoom-in"
                  className="bg-gradient-to-br from-blue-100 via-white to-[#21c2ad] dark:from-blue-950 dark:via-blue-900 dark:to-[#155dfc] rounded-xl shadow-lg p-6 flex flex-col items-center"
                >
                  <span className="mb-2">{feature.icon}</span>
                  <h3 className={`font-bold text-${feature.color} mb-2`}>
                    {t(`Blog.About.features.${idx}.title`)}
                  </h3>
                  <p className="text-gray-700 dark:text-blue-200 text-center text-base">
                    {t(`Blog.About.features.${idx}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 px-8 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#155dfc] dark:text-blue-100 mb-8">
              {t("Blog.Categories.title")}
            </h2>
            <p className="text-blue-900 dark:text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              {t("Blog.Categories.description")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch">
              {[
                {
                  name: "Accounting",
                  desc: "Fundamentals, best practices, and tools for accurate record-keeping.",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#21c2ad] mb-2"
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
                  name: "Tax Planning",
                  desc: "Strategies to minimize liabilities and stay compliant with regulations.",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#155dfc] mb-2"
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
                  name: "Consulting",
                  desc: "Expert guidance for business growth, investment, and decision-making.",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#21c2ad] mb-2"
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
                  name: "Business Growth",
                  desc: "Tips and strategies to help your business scale and thrive.",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#155dfc] mb-2"
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
                  name: "Compliance",
                  desc: "Stay up-to-date with laws, standards, and regulatory changes.",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#21c2ad] mb-2"
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
                  name: "Tips & Resources",
                  desc: "Handy guides, checklists, and resources for everyday financial success.",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#155dfc] mb-2"
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
              ].map((cat, idx) => (
                <div
                  data-aos="zoom-in"
                  key={idx}
                  className="bg-white dark:bg-blue-950 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#21c2ad]"
                >
                  <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-[#21c2ad22] via-[#155dfc22] to-blue-200 backdrop-blur-md shadow-lg">
                    {cat.icon}
                  </div>
                  <h3 className="font-extrabold text-[#155dfc] dark:text-blue-100 mb-2 text-lg text-center tracking-wide drop-shadow-md">
                    {t(`Blog.Categories.items.${idx}.name`)}
                  </h3>
                  <p className="text-gray-700 dark:text-blue-200 text-center text-base mb-2">
                    {t(`Blog.Categories.items.${idx}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 dark:bg-blue-950">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-blue-100 text-center mb-4">
                {t("Blog.Testimonials.title")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-8">
                {t("Blog.Testimonials.description")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Priya Singh",
                  feedback:
                    "The accounting tips helped me organize my business finances and avoid costly mistakes.",
                  img: "https://randomuser.me/api/portraits/women/50.jpg",
                },
                {
                  name: "John Miller",
                  feedback:
                    "I love the practical advice and easy-to-understand articles. Highly recommended!",
                  img: "https://randomuser.me/api/portraits/men/18.jpg",
                },
                {
                  name: "Fatima Al-Hassan",
                  feedback:
                    "The tax planning guides saved me a lot of money this year.",
                  img: "https://randomuser.me/api/portraits/men/32.jpg",
                },
              ].map((reader, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-blue-900   rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-blue-100 dark:border-blue-900">
                    <Image
                      src={reader.img}
                      alt={reader.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "{t(`Blog.Testimonials.items.${idx}.feedback`)}"
                  </p>
                  <span className="font-bold text-blue-900 dark:text-blue-100">
                    {t(`Blog.Testimonials.items.${idx}.name`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 text-blue-900 dark:text-blue-100 relative overflow-hidden">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg text-[#155dfc] dark:text-blue-100">
              {t("Blog.CTA.title")}
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl text-blue-900 dark:text-blue-100">
              {t("Blog.CTA.description")}
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
              {t("Blog.CTA.cta")}
            </Link>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default Blog;
