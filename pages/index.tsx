import Head from "next/head";

import { useRouter } from "next/router";

import Link from "next/link";
import { ModeToggle } from "@/components/theme/ModeToggle";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinAccount - Finance & Accounting Services</title>
        <meta name="description" content="Finance & Accounting Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 py-16">
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
        <div className="bg-white dark:bg-blue-950 rounded-xl shadow-xl p-8 flex flex-col items-center gap-6 border border-blue-100 dark:border-blue-900">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 dark:text-blue-200 mb-2 text-center">
            Welcome to FinAccount
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-xl">
            Your trusted partner for tax planning, auditing, bookkeeping,
            payroll, and financial consulting. Secure your business future with
            expert accounting services.
          </p>
          <Link
            className="mt-4 px-8 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition"
            href={"/auth"}
          >
            Go to Auth Page
          </Link>
        </div>
      </main>
    </>
  );
}
