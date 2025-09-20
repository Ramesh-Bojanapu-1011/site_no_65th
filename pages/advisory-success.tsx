import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const blogContentKeys = [
  "BlogAdvisorySuccess.0",
  "BlogAdvisorySuccess.1",
  "BlogAdvisorySuccess.2",
  "BlogAdvisorySuccess.3",
  "BlogAdvisorySuccess.4",
];

const AdvisorySuccessBlog = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>
          {t("Blog.Featured.advisory_success.title")} | FinAccount Blog
        </title>
        <meta
          name="description"
          content={t("Blog.Featured.advisory_success.desc")}
        />
      </Head>
      <main className="bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 min-h-screen caret-transparent">
        <SiteHeader />
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center px-8 py-24 gap-8 bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 text-blue-900 dark:text-blue-100">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg text-center">
            {t("Blog.Featured.advisory_success.title")}
          </h1>
          <p className="text-lg md:text-2xl mb-4 max-w-2xl text-center">
            {t("Blog.Featured.advisory_success.desc")}
          </p>
        </section>
        {/* Blog Content Section */}
        <section className="py-16 px-8 bg-white dark:bg-blue-950">
          <div className="max-w-3xl mx-auto">
            <article className="space-y-12">
              {blogContentKeys.map((key, idx) => (
                <div key={idx} className="">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#155dfc] dark:text-[#21c2ad] mb-4">
                    {t(`${key}.title`)}
                  </h2>
                  <p className="text-gray-700 dark:text-blue-200 text-lg mb-2">
                    {t(`${key}.desc`)}
                  </p>
                  {t(`${key}.extra`) && (
                    <p className="text-blue-900 dark:text-blue-300 text-base italic mb-2">
                      {t(`${key}.extra`)}
                    </p>
                  )}
                </div>
              ))}
              {/* Conclusion Section */}
              <div className="pt-8 border-t mt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#155dfc] dark:text-[#21c2ad] mb-4">
                  {t("BlogAdvisorySuccess.conclusion.title")}
                </h2>
                <p className="text-gray-700 dark:text-blue-200 text-lg">
                  {t("BlogAdvisorySuccess.conclusion.desc")}
                </p>
              </div>
            </article>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default AdvisorySuccessBlog;
