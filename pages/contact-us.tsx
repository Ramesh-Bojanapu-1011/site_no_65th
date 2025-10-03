import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// FAQ data and accordion component
const faqs = [
  {
    questionKey: "ContactUs.FAQ.0.question",
    answerKey: "ContactUs.FAQ.0.answer",
  },
  {
    questionKey: "ContactUs.FAQ.1.question",
    answerKey: "ContactUs.FAQ.1.answer",
  },
  {
    questionKey: "ContactUs.FAQ.2.question",
    answerKey: "ContactUs.FAQ.2.answer",
  },
  {
    questionKey: "ContactUs.FAQ.3.question",
    answerKey: "ContactUs.FAQ.3.answer",
  },
  {
    questionKey: "ContactUs.FAQ.4.question",
    answerKey: "ContactUs.FAQ.4.answer",
  },
];

const infoCards = [
  {
    titleKey: "ContactUs.InfoCards.0.title",
    descKey: "ContactUs.InfoCards.0.desc",
    icon: (
      <svg
        className="w-8 h-8 text-[#21c2ad]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C7 2 2 7 2 12c0 5 5 10 10 10s10-5 10-10c0-5-5-10-10-10z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    titleKey: "ContactUs.InfoCards.1.title",
    descKey: "ContactUs.InfoCards.1.desc",
    icon: (
      <svg
        className="w-8 h-8 text-[#155dfc]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16v16H4z" />
        <path d="M4 4l8 8 8-8" />
      </svg>
    ),
  },
  {
    titleKey: "ContactUs.InfoCards.2.title",
    descKey: "ContactUs.InfoCards.2.desc",
    icon: (
      <svg
        className="w-8 h-8 text-[#21c2ad]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

// FAQ data and accordion component

const ContactPage = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    if (!action) {
      alert(t("ContactUs.Form.error"));
      return;
    }

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setForm({ name: "", email: "", message: "" });
        setSuccess(true);
      } else {
        alert(t("ContactUs.Form.error"));
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(t("ContactUs.Form.error"));
    }
  };

  return (
    <>
      <Head>
        <title>{t("ContactUs.Meta.title")}</title>
        <meta name="description" content={t("ContactUs.Meta.description")} />
      </Head>
      <main className="bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 min-h-screen ">
        <SiteHeader />
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between caret-transparent px-8 py-24 gap-12 min-h-screen overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="contact-us_bg_vedio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/80 via-white/80 to-blue-200/80 dark:from-blue-950/80 dark:via-gray-900/80 dark:to-blue-900/80 z-10"></div>
          {/* Content */}
          <div className="relative flex-1 flex flex-col justify-center items-start z-20 text-blue-900 dark:text-blue-100">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              {t("ContactUs.Hero.title")}
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-xl">
              {t("ContactUs.Hero.description")}
            </p>
          </div>
          <div className="relative flex-1 flex justify-center items-center z-20">
            <Image
              src="https://i.pinimg.com/736x/01/4f/37/014f37e8f2d3d600dedb58f5fff0d136.jpg"
              alt={t("ContactUs.Hero.image_alt")}
              width={500}
              height={450}
              className="rounded-2xl shadow-2xl object-cover bg-blue-100 dark:bg-blue-900"
            />
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-8 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="max-w-2xl mx-auto bg-white dark:bg-blue-950 rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl caret-transparent md:text-4xl font-bold text-[#155dfc] dark:text-blue-100 mb-6 text-center">
              {t("ContactUs.Form.title")}
            </h2>
            {success && (
              <div className="mb-6 p-4 bg-[#21c2ad] text-white rounded-xl text-center font-bold caret-transparent animate-pulse shadow-lg">
                {t("ContactUs.Form.success")}
              </div>
            )}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xovlekvg"
              method="POST"
              className="flex flex-col gap-6"
            >
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t("ContactUs.Form.name")}
                required
                className="px-5 py-4 rounded-xl border-2 border-[#21c2ad] focus:border-[#155dfc] focus:outline-none text-lg bg-blue-50 dark:bg-blue-900 dark:text-white"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("ContactUs.Form.email")}
                required
                className="px-5 py-4 rounded-xl border-2 border-[#21c2ad] focus:border-[#155dfc] focus:outline-none text-lg bg-blue-50 dark:bg-blue-900 dark:text-white"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t("ContactUs.Form.message")}
                required
                rows={5}
                className="px-5 py-4 rounded-xl border-2 border-[#21c2ad] focus:border-[#155dfc] focus:outline-none text-lg bg-blue-50 dark:bg-blue-900 dark:text-white"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#21c2ad] to-[#155dfc] text-white font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition text-lg"
              >
                {t("ContactUs.Form.submit")}
              </button>
            </form>
          </div>
        </section>

        {/* Info Cards Section */}
        <section className="py-20 px-8 bg-white dark:bg-blue-950 caret-transparent">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {infoCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-100 via-white to-[#21c2ad] dark:from-blue-950 dark:via-blue-900 dark:to-[#155dfc] rounded-xl shadow-lg p-8 flex flex-col items-center text-center"
              >
                <span className="mb-4">{card.icon}</span>
                <h3 className="font-bold text-[#155dfc] dark:text-blue-100 mb-2 text-lg">
                  {t(card.titleKey)}
                </h3>
                <p className="text-gray-700 dark:text-blue-200 text-base">
                  {t(card.descKey)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 caret-transparent bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-blue-100 text-center mb-4">
                {t("ContactUs.FAQ.title")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl mb-8">
                {t("ContactUs.FAQ.description")}
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

        {/* Map Section */}
        <section className=" caret-transparent  bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 flex justify-center items-center">
          <div className=" max-w-7xl  w-full rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.8258%2C18.975%2C72.8358%2C18.985&amp;layer=mapnik"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title={t("ContactUs.Map.title")}
            ></iframe>
          </div>
        </section>

        {/* CTA Section */}
        <section className=" caret-transparent py-20 px-8 relative overflow-hidden">
          <div className="max-w-3xl py-20 px-8 mx-auto flex flex-col items-center text-center relative z-10 rounded-2xl shadow-xl bg-white/80 dark:bg-blue-950/80 backdrop-blur-lg border-2 border-transparent before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:bg-gradient-to-r before:from-[#21c2ad] before:via-[#155dfc] before:to-[#21c2ad] before:opacity-30">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg text-[#155dfc] dark:text-[#21c2ad]">
              {t("ContactUs.CTA.title")}
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl text-blue-900 dark:text-blue-100">
              {t("ContactUs.CTA.description")}
            </p>
            <form className="w-full max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4 mt-4">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder={t("ContactUs.CTA.email_placeholder")}
                  className="w-full px-6 py-4 rounded-full border-2 border-[#21c2ad] focus:border-[#155dfc] bg-white/80 dark:bg-blue-950/80 text-lg text-blue-900 dark:text-blue-100 shadow-md focus:outline-none transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#21c2ad] to-[#155dfc] text-white font-bold shadow-lg hover:scale-105 hover:bg-blue-100 transition text-lg flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
                {t("ContactUs.CTA.subscribe")}
              </button>
            </form>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default ContactPage;
