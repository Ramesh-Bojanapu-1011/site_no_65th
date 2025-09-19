import React from "react";

import { ModeToggle } from "@/components/theme/ModeToggle";

const NotFound: React.FC = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 py-16">
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
        <div className="bg-white dark:bg-blue-950 rounded-xl shadow-xl p-10 flex flex-col items-center gap-6 border border-blue-100 dark:border-blue-900">
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            className="mb-2 text-blue-500 dark:text-blue-300"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
              fill="currentColor"
            />
          </svg>
          <h1 className="text-6xl font-extrabold text-blue-900 dark:text-blue-200 mb-2">
            404
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 text-center max-w-lg">
            Oops! The page you’re looking for doesn’t exist.
            <br />
            Maybe you followed a broken link or the page has moved.
            <br />
            Let’s get you back to your finances!
          </p>
          <button
            className="mt-4 px-8 py-3 text-lg font-bold rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition"
            onClick={window.history.back.bind(window.history)}
          >
            Go to Back
          </button>
        </div>
      </main>
    </>
  );
};

export default NotFound;
