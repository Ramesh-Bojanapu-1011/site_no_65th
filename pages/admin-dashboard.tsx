import SiteHeader from "@/components/SiteHeader";
import { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// KEEPING THE ORIGINAL COLORS FOR CHARTS
const COLORS = ["#155dfc", "#21c2ad", "#fbbf24", "#ef4444", "#6366f1"];

const TOTAL_ACCOUNTS_CREATED = 345; // Updated value

// --- Custom Tooltip Component for Recharts ---
interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  t: (key: string) => string;
}

const CustomTooltip = ({ active, payload, label, t }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const name = payload[0].name;

    // Custom formatting for the Bar Chart (Daily Logins)
    if (label) {
      return (
        <div className="bg-white dark:bg-gray-700 p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md text-sm">
          <p className="text-[#155dfc] dark:text-[#21c2ad]">
            {t("AdminDashboard.bar_chart.login_users")}: {value}
          </p>
        </div>
      );
    }

    // Custom formatting for the Pie Chart
    return (
      <div className="bg-white dark:bg-gray-700 p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md text-sm">
        <p className="text-[#155dfc] dark:text-[#21c2ad]">
          {name}: {value}
        </p>
      </div>
    );
  }

  return null;
};

// --- Main Component ---
const AdminDashboard = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<any[]>([]);
  const [loginUsers, setLoginUsers] = useState<any[]>([]);
  const [dailyLogins, setDailyLogins] = useState<
    { date: string; count: number }[]
  >([]);
  // Hardcoded value for a service-related metric
  const [totalAccountsCreated, setTotalAccountsCreated] =
    useState<number>(Number); // Using the updated sample value
  const [activeTab, setActiveTab] = useState<
    "statistics" | "activity" | "users"
  >("statistics");

  useEffect(() => {
    const usersData = JSON.parse(
      localStorage.getItem("finaccount_users") || "[]",
    );
    setTotalAccountsCreated(usersData.length);
    let loginUsersData = JSON.parse(
      localStorage.getItem("finaccount_loggedin") || "[]",
    );
    // Ensure loginUsersData is always an array
    if (!Array.isArray(loginUsersData)) {
      if (loginUsersData && typeof loginUsersData === "object") {
        loginUsersData = [loginUsersData];
      } else {
        loginUsersData = [];
      }
    }
    setUsers(usersData);
    setLoginUsers(loginUsersData);

    const loginCounts: Record<string, number> = {};
    usersData.forEach((user: any) => {
      // Use the actual login status from loginUsersData to determine if a user is logged in
      const isLoggedIn = loginUsersData.some(
        (loginUser: any) => loginUser.email === user.email,
      );
      // Merge isLoggedIn status into the main user list for the table
      user.isLoggedIn = isLoggedIn;

      // Calculate daily logins based on loginTime
      if (user.loginTime) {
        // Ensure loginTime is treated as a string or number that Date can handle
        const date = new Date(user.loginTime).toISOString().slice(0, 10);
        loginCounts[date] = (loginCounts[date] || 0) + 1;
      }
    });

    const dailyLoginsArr = Object.entries(loginCounts).map(([date, count]) => ({
      date,
      count,
    }));
    setDailyLogins(dailyLoginsArr.sort((a, b) => (a.date > b.date ? 1 : -1))); // Sort by date
  }, []);

  // 1. Data Transformation: Pre-process users for cleaner table rendering
  const processedUsers = useMemo(() => {
    return users.map((user: any) => ({
      ...user,
      fullName: `${user.first} ${user.last}`,
      isLoggedInText: user.isLoggedIn
        ? t("AdminDashboard.users_table.yes")
        : t("AdminDashboard.users_table.no"),
    }));
  }, [users, t]);

  const pieData = useMemo(
    () => [
      { name: t("AdminDashboard.Pie.all_users"), value: users.length },
      { name: t("AdminDashboard.Pie.login_users"), value: loginUsers.length },
    ],
    [users.length, loginUsers.length, t],
  );

  // New Calculation for Average Daily Logins
  const averageDailyLogins = useMemo(() => {
    if (dailyLogins.length === 0) return 0;
    const totalLogins = dailyLogins.reduce((sum, day) => sum + day.count, 0);
    // Round to the nearest whole number for simplicity in a dashboard statistic
    return Math.round(totalLogins / dailyLogins.length);
  }, [dailyLogins]);

  // --- Statistics Card Component ---
  interface StatCardProps {
    title: string;
    value: string | number;
    description: string;
    icon: React.ReactNode;
    color: string;
  }

  const StatCard = ({
    title,
    value,
    description,
    icon,
    color,
  }: StatCardProps) => (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 transition-all duration-300 transform hover:scale-[1.02] border-l-4 ${color} flex flex-col justify-between`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
            {title}
          </h3>
          <p className="text-3xl font-extrabold text-gray-900 dark:text-white">
            {value}
          </p>
        </div>
        <div
          className={`p-3 rounded-full ${color
            .replace("border-", "bg-")
            .replace("text-", "text-")} bg-opacity-10`}
        >
          {icon}
        </div>
      </div>
      <p className="mt-4 text-xs text-gray-400 dark:text-gray-500 italic">
        {description}
      </p>
    </div>
  );

  return (
    <main className="bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 min-h-screen caret-transparent">
      <SiteHeader />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl md:text-5xl font-extrabold pt-8 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#155dfc] via-[#a259e6] to-[#ef32fb] text-center"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("AdminDashboard.title")}
        </h1>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("statistics")}
            className={`flex items-center gap-2 px-7 py-2 rounded-xl font-bold text-lg shadow transition border-2 focus:outline-none focus:ring-2 focus:ring-[#21c2ad] ${
              activeTab === "statistics"
                ? "border-[#155dfc] bg-white text-[#155dfc] dark:bg-blue-950 dark:text-blue-100 dark:border-[#21c2ad]"
                : "border-transparent bg-[#f0f7ff] text-[#155dfc] dark:bg-blue-900 dark:text-blue-100 hover:bg-[#e0eaff] dark:hover:bg-blue-800"
            }`}
            style={{ boxShadow: "0 2px 8px 0 rgba(33,194,173,0.10)" }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <path d="M7 7h10v10H7z" />
            </svg>
            <span>{t("AdminDashboard.statistics")}</span>
          </button>
          <button
            onClick={() => setActiveTab("activity")}
            className={`flex items-center gap-2 px-7 py-2 rounded-xl font-bold text-lg shadow transition border-2 focus:outline-none focus:ring-2 focus:ring-[#a259e6] ${
              activeTab === "activity"
                ? "border-[#a259e6] bg-[#f5f3ff] text-[#a259e6]"
                : "border-transparent bg-[#f5f3ff] text-[#a259e6] hover:bg-[#ede9fe] active:bg-[#e9d5ff]"
            }`}
            style={{ boxShadow: "0 2px 8px 0 rgba(162,89,230,0.10)" }}
          >
            <svg
              className="w-5 h-5"
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
            <span>{t("AdminDashboard.user_activaty")}</span>
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`flex items-center gap-2 px-7 py-2 rounded-xl font-bold text-lg shadow transition border-2 focus:outline-none focus:ring-2 focus:ring-[#21c2ad] ${
              activeTab === "users"
                ? "border-[#21c2ad] bg-[#d1fae5] text-[#21c2ad]"
                : "border-transparent bg-[#d1fae5] text-[#21c2ad] hover:bg-[#bbf7d0] active:bg-[#6ee7b7]"
            }`}
            style={{ boxShadow: "0 2px 8px 0 rgba(33,194,173,0.10)" }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span> {t("AdminDashboard.all_Users")}</span>
          </button>
        </div>
        {/* Tab Content */}
        {activeTab === "statistics" && (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-10">
            {/* Total Users Card */}
            <StatCard
              title={t("AdminDashboard.stats.total_users")}
              value={users.length.toLocaleString()}
              description={t("AdminDashboard.stats.description_total_users")}
              color="border-[#155dfc] text-[#155dfc]"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />

            {/* Logged-in Users Card */}
            <StatCard
              title={t("AdminDashboard.stats.logged_in_users")}
              value={loginUsers.length.toLocaleString()}
              description={t("AdminDashboard.stats.description_logged_in")}
              color="border-[#21c2ad] text-[#21c2ad]"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 17l5-5-5-5M19 12H9" />
                  <path d="M12 22h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-6" />
                </svg>
              }
            />

            {/* Average Daily Logins Card */}
            <StatCard
              title={t("AdminDashboard.stats.avg_daily_logins")}
              value={averageDailyLogins.toLocaleString()}
              description={t("AdminDashboard.stats.description_avg_logins")}
              color="border-[#fbbf24] text-[#fbbf24]"
              icon={
                <svg
                  className="w-6 h-6"
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
              }
            />

            {/* Total Accounts Created Card (Finance Metric) */}
            <StatCard
              title={t("AdminDashboard.stats.total_accounts")}
              value={totalAccountsCreated.toLocaleString()}
              description={t("AdminDashboard.stats.description_total_accounts")}
              color="border-[#a259e6] text-[#a259e6]"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="6" width="18" height="13" rx="2" />
                  <path d="M12 11a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  <path d="M16 6h2" />
                  <path d="M16 6v3" />
                </svg>
              }
            />
          </section>
        )}
        {activeTab === "activity" && (
          <>
            {" "}
            {/* Charts Section */}
            <section className="grid grid-cols-1 pb-10 md:grid-cols-2 gap-12">
              {/* Pie Chart */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-blue-500/50 dark:hover:shadow-green-500/50 p-6 flex flex-col items-center border border-blue-200 dark:border-blue-900">
                <h3 className="text-xl font-bold mb-4 text-[#155dfc] dark:text-[#21c2ad]">
                  {t("AdminDashboard.pie_chart.title")}
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(props) =>
                        `${props.name} (${(
                          (Number(props.percent) || 0) * 100
                        ).toFixed(0)}%)`
                      }
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    {/* 2. Custom Tooltip for I18n */}
                    <Tooltip
                      content={
                        <CustomTooltip
                          t={t}
                          active={undefined}
                          payload={undefined}
                          label={undefined}
                        />
                      }
                    />
                    <Legend iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              {/* Bar Chart */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-blue-500/50 dark:hover:shadow-green-500/50 p-6 flex flex-col items-center border border-blue-200 dark:border-blue-900">
                <h3 className="text-xl font-bold mb-4 text-[#155dfc] dark:text-[#21c2ad]">
                  {t("AdminDashboard.bar_chart.title")}
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={dailyLogins}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis allowDecimals={false} />
                    {/* 2. Custom Tooltip for I18n */}
                    <Tooltip
                      content={
                        <CustomTooltip
                          t={t}
                          active={undefined}
                          payload={undefined}
                          label={undefined}
                        />
                      }
                    />
                    <Legend iconType="circle" />
                    <Bar
                      dataKey="count"
                      fill="#155dfc"
                      name={t("AdminDashboard.bar_chart.login_users")}
                      radius={[4, 4, 0, 0]} // Rounded tops for bars
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>
          </>
        )}
        {activeTab === "users" && (
          <>
            {/* Users Table */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-[#155dfc] dark:text-[#21c2ad]">
                {t("AdminDashboard.users_table.title")}
              </h2>
              <div className="overflow-x-auto rounded-xl shadow-2xl transition-all duration-300 hover:shadow-blue-500/50 dark:hover:shadow-green-500/50 bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-900">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="bg-[#155dfc] text-white dark:bg-[#21c2ad] dark:text-gray-900 uppercase tracking-wider">
                      <th className="py-3 px-4 font-extrabold   w-16">
                        {t("AdminDashboard.users_table.id")}
                      </th>
                      <th className="py-3 px-4 font-extrabold">
                        {t("AdminDashboard.users_table.name")}
                      </th>
                      <th className="py-3 px-4 font-extrabold">
                        {t("AdminDashboard.users_table.email")}
                      </th>
                      <th className="py-3 px-4 font-extrabold   text-center w-32">
                        {t("AdminDashboard.users_table.logged_in")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-100 dark:divide-gray-700">
                    {processedUsers.length === 0 ? (
                      <tr>
                        <td
                          colSpan={4}
                          className="py-6 px-4 text-center italic text-gray-500 dark:text-gray-400"
                        >
                          {t("AdminDashboard.users_table.no_users")}
                        </td>
                      </tr>
                    ) : (
                      processedUsers.map((user: any, index: number) => (
                        <tr
                          key={index}
                          className={`transition-colors duration-200 ${
                            index % 2 === 0
                              ? "bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700"
                              : "bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600"
                          }`}
                        >
                          <td className="py-3 px-4 font-medium text-gray-700 dark:text-gray-300">
                            {index + 1}
                          </td>
                          <td className="py-3 px-4 text-gray-800 dark:text-gray-200 font-semibold">
                            {user.fullName}
                          </td>
                          <td className="py-3 px-4 font-mono text-gray-600 dark:text-gray-400">
                            {user.email}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span
                              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                user.isLoggedIn
                                  ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                                  : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
                              }`}
                            >
                              {user.isLoggedInText}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
};

export default AdminDashboard;
