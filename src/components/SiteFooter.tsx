import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const services = [
  { name: "Hedder.Tax_Planning", Link: "tax-planning" },
  { name: "Hedder.Audit_&_Assurance", Link: "audit-assurance" },
  { name: "Hedder.Bookkeeping", Link: "bookkeeping" },
  { name: "Hedder.Payroll_Management", Link: "payroll-management" },
  { name: "Hedder.Financial_Consulting", Link: "financial-consulting" },
  { name: "Hedder.Investment_Advisory", Link: "investment-advisory" },
];

const quickLinks = [
  { name: "Hedder.home", href: "/" },
  { name: "Hedder.About_Us", href: "/about-us" },
  { name: "Hedder.Blog", href: "/blog" },
  { name: "Hedder.Contact_Us", href: "/contact-us" },
];

const SiteFooter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gradient-to-r from-blue-100 via-white to-blue-50 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 border-t border-blue-200 dark:border-blue-900">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col items-start gap-4">
          <div className=" ">
            <Image
              src="https://i.postimg.cc/DwdH9gv8/logo-stackly.png"
              alt="Finance Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {t("Footer.Description")}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-4 text-lg">
            {t("Footer.Quick_Links")}
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-blue-800 dark:text-blue-200 hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition text-base"
                >
                  {t(link.name)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-4 text-lg">
            {t("Footer.Our_Services")}
          </h3>
          <ul className="space-y-2">
            {services.map((srv) => (
              <li key={srv.Link}>
                <a
                  href={`/${srv.Link}`}
                  className="text-blue-800 dark:text-blue-200 hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition text-base"
                >
                  {t(srv.name)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-4 text-lg">
            {t("Footer.Contact_Us")}
          </h3>
          <ul className="space-y-2 text-base">
            <li className="text-gray-700 dark:text-gray-300">
              {t("Footer.Address")}
            </li>
            <li>
              <a
                href="mailto:info@finaccount.com"
                className="text-blue-800 dark:text-blue-200 hover:underline hover:text-blue-600 dark:hover:text-blue-400"
              >
                info@finaccount.com
              </a>
            </li>
            <li>
              <a
                href="tel:+1234567890"
                className="text-blue-800 dark:text-blue-200 hover:underline hover:text-blue-600 dark:hover:text-blue-400"
              >
                +1 (234) 567-890
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm border-t border-blue-100 dark:border-blue-900">
        &copy; {new Date().getFullYear()} FinAccount.{" "}
        {t("Footer.All_rights_reserved")}
      </div>
    </footer>
  );
};

export default SiteFooter;
