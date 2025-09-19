import SiteHeader from "@/components/SiteHeader";
import { useEffect, useState } from "react";
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

const COLORS = ["#155dfc", "#21c2ad", "#fbbf24", "#ef4444", "#6366f1"];

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loginUsers, setLoginUsers] = useState([]);
  const [dailyLogins, setDailyLogins] = useState<
    { date: string; count: number }[]
  >([]);

  useEffect(() => {
    const usersData = JSON.parse(
      localStorage.getItem("finaccount_users") || "[]"
    );
    const loginUsersData = JSON.parse(
      localStorage.getItem("finaccount_loggedin") || "[]"
    );
    setUsers(usersData);
    setLoginUsers(loginUsersData);

    // Compute daily login counts from usersData
    // loginTime: "2025-09-18T16:46:22.253Z"
    const loginCounts: Record<string, number> = {};
    usersData.forEach((user: any) => {
      if (user.loginTime) {
        const date = new Date(user.loginTime).toISOString().slice(0, 10); // YYYY-MM-DD
        loginCounts[date] = (loginCounts[date] || 0) + 1;
      }
    });
    // Convert to array for recharts
    const dailyLoginsArr = Object.entries(loginCounts).map(([date, count]) => ({
      date,
      count,
    }));
    setDailyLogins(dailyLoginsArr);
  }, []);

  // Pie chart data
  const pieData = [
    { name: "All Users", value: users.length },
    { name: "Login Users", value: loginUsers.length },
  ];

  return (
    <main className="bg-gradient-to-tr from-blue-100 via-white to-blue-200 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 min-h-screen  caret-transparent  ">
      <SiteHeader />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#155dfc] dark:text-[#21c2ad] text-center">
          Admin Dashboard
        </h1>
        {/* Users Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#155dfc] dark:text-[#21c2ad]">
            All Users
          </h2>
          <div className="overflow-x-auto rounded-xl shadow-lg bg-white dark:bg-blue-950">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-blue-100 dark:bg-blue-900">
                  <th className="py-3 px-4 font-semibold">ID</th>
                  <th className="py-3 px-4 font-semibold">Name</th>
                  <th className="py-3 px-4 font-semibold">Email</th>
                  <th className="py-3 px-4 font-semibold">Logged In</th>
                </tr>
              </thead>
              <tbody className="dark:text-white">
                {users.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="py-4 px-4 text-center text-gray-500"
                    >
                      No users found.
                    </td>
                  </tr>
                ) : (
                  users.map((user: any, index: number) => (
                    <tr
                      key={index}
                      className="border-b border-blue-100 dark:border-blue-900"
                    >
                      <td className="py-2 px-4">{index + 1}</td>
                      <td className="py-2 px-4">
                        {user.first}
                        {user.last}
                      </td>
                      <td className="py-2 px-4">{user.email}</td>
                      <td className="py-2 px-4">
                        {user.isLoggedIn ? "Yes" : "No"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12  ">
          {/* Pie Chart */}
          <div className="bg-white dark:bg-blue-950 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 text-[#155dfc] dark:text-[#21c2ad]">
              User Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(props) => `${props.name} `}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Bar Chart */}
          <div className="bg-white dark:bg-blue-950 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4 text-[#155dfc] dark:text-[#21c2ad]">
              Daily Login Users
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={dailyLogins}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#155dfc" name="Login Users" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AdminDashboard;
