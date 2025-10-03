import { ModeToggle } from "@/components/theme/ModeToggle";
import Image from "next/image";
import React, { useState } from "react";

const ADMIN_EMAIL = "admin@enkonix.in";
const ADMIN_PASS = "admin123";

type User = {
  email: string;
  password: string;
  first: string;
  last: string;
};

// Get users from local storage if in a browser environment, otherwise return an empty array. 📦🖥️
export const getUsers = (): User[] => {
  if (typeof window !== "undefined") {
    const users = localStorage.getItem("finaccount_users");
    return users ? JSON.parse(users) : [];
  }
  return [];
};

// Saves the list of users to localStorage if the window object is available 🌐💾
const saveUsers = (users: User[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("finaccount_users", JSON.stringify(users));
  }
};

const AuthPage: React.FC = () => {
  // Ensure all users have registerTime

  const [tab, setTab] = useState<"user" | "admin">("user");
  const [userForm, setUserForm] = useState<"login" | "register">("login");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminError, setAdminError] = useState("");
  const [userError, setUserError] = useState("");
  const [userSuccess, setUserSuccess] = useState("");
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotPassowrd, setForgotPassword] = useState("");
  const [forgotMsg, setForgotMsg] = useState("");
  const [adminSuccess, setAdminSuccess] = useState("");

// Handles admin login, checks credentials, and redirects to dashboard if successful! 🔑🚀
  function handleAdminLogin(e: React.FormEvent) {
    e.preventDefault();
    if (adminEmail === ADMIN_EMAIL && adminPassword === ADMIN_PASS) {
      setAdminError("");
      localStorage.setItem(
        "finaccount_loggedin",
        JSON.stringify({ email: adminEmail }),
      );

      window.location.href = "/admin-dashboard"; // Redirect to admin dashboard

      setAdminSuccess("Admin login successful!");
    } else {
      setAdminError("Invalid credentials");
      setAdminSuccess("");
    }
  }

 // Function that handles user login by checking email and password, saving login time, and redirecting to the dashboard 🖥️🔒
 function handleUserLogin(e: React.FormEvent) {
    e.preventDefault();
    if (userEmail && userPassword) {
      // Get users from localStorage
      const users = JSON.parse(
        localStorage.getItem("finaccount_users") || "[]",
      );
      const found = users.find(
        (u: any) => u.email === userEmail && u.password === userPassword,
      );
      if (found) {
        setUserError("");
        window.location.href = "/home1"; // Redirect to user dashboard
        setUserSuccess("User login successful!");
        found.loginTime = new Date().toISOString();
        // Add login time
        saveUsers(users);
        localStorage.setItem("finaccount_loggedin", JSON.stringify(found));
      } else {
        setUserError("Invalid email or password");
        setUserSuccess("");
      }
    } else {
      setUserError("Please enter email and password");
      setUserSuccess("");
    }
  }

// This function handles the password reset process, checks if email is provided, and updates the password if the email exists. 🔐💻
  function handleForgotPassword(e: React.FormEvent) {
    e.preventDefault();
    if (forgotEmail) {
      const users = getUsers();
      const userIndex = users.findIndex((u) => u.email === forgotEmail);
      if (userIndex !== -1) {
        users[userIndex].password = forgotPassowrd || "newpassword123";
        saveUsers(users);
      }
      setForgotMsg("Password reset Successfully.");
      setUserForm("login");
    } else {
      setForgotMsg("Please enter your email.");
    }
  }

  // Handles user registration by validating fields, checking for existing emails, and storing new user data. 🚀📝
function handleUserRegister(e: React.FormEvent) {
    e.preventDefault();
    if (userFirstName && userLastName && userEmail && userPassword) {
      // Get users from localStorage
      let users: User[] = [];
      try {
        const parsed = getUsers();
        if (Array.isArray(parsed)) {
          users = parsed;
        }
      } catch {
        users = [];
      }
      // Check if email already exists
      if (users.some((u: any) => u.email === userEmail)) {
        setUserError("Email already registered");
        setUserSuccess("");
        return;
      }
      // Add new user with registration time
      const newUser: User & { registerTime: string } = {
        email: userEmail,
        password: userPassword,
        first: userFirstName.trim(),
        last: userLastName.trim(),
        registerTime: new Date().toISOString(),
      };
      users.push(newUser);
      localStorage.setItem("finaccount_users", JSON.stringify(users));
      setUserError("");
      setUserSuccess("Registration successful! You can now login.");
      setUserForm("login");
    } else {
      setUserError("Please fill all fields");
      setUserSuccess("");
    }
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-gray-900 dark:to-blue-900 py-16">
        <div className=" absolute top-10 right-10">
          <ModeToggle />
        </div>
        <div className="bg-white dark:bg-blue-950 rounded-xl shadow-xl p-8 flex flex-col items-center gap-8 border border-blue-100 dark:border-blue-900 w-full max-w-md">
          <Image
            src="https://i.postimg.cc/DwdH9gv8/logo-stackly.png"
            alt="Finance Logo"
            width={120}
            height={40}
            className="object-contain mb-4"
          />
          <div className="flex gap-4 mb-4">
            <button
              className={`px-6 py-2 rounded-t-lg font-bold text-lg transition border-b-2 ${
                tab === "user"
                  ? "border-blue-500 text-blue-900 dark:text-blue-200 bg-blue-100 dark:bg-blue-900"
                  : "border-transparent text-gray-500 dark:text-gray-400 bg-transparent"
              }`}
              onClick={() => setTab("user")}
            >
              User
            </button>
            <button
              className={`px-6 py-2 rounded-t-lg font-bold text-lg transition border-b-2 ${
                tab === "admin"
                  ? "border-blue-500 text-blue-900 dark:text-blue-200 bg-blue-100 dark:bg-blue-900"
                  : "border-transparent text-gray-500 dark:text-gray-400 bg-transparent"
              }`}
              onClick={() => setTab("admin")}
            >
              Admin
            </button>
          </div>

          {tab === "user" ? (
            <div className="w-full">
              {userForm === "login" ? (
                <>
                  {!showForgot ? (
                    <form
                      className="flex flex-col gap-4"
                      onSubmit={handleUserLogin}
                    >
                      <input
                        type="email"
                        placeholder="Email"
                        className="px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-200"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        className="px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-200"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                      />
                      <div className="flex justify-between items-center text-sm dark:text-gray-300 text-gray-700">
                        <p>
                          Don't have an account?{" "}
                          <span
                            className="text-blue-600 dark:text-blue-300 cursor-pointer underline hover:text-blue-800 dark:hover:text-blue-400"
                            onClick={() => setUserForm("register")}
                          >
                            Register
                          </span>
                        </p>
                        <span
                          className="text-blue-600 dark:text-blue-300 cursor-pointer underline hover:text-blue-800 dark:hover:text-blue-400 ml-2"
                          onClick={() => {
                            setShowForgot(true);
                            setForgotMsg("");
                          }}
                        >
                          Forgot password?
                        </span>
                      </div>
                      <button
                        type="submit"
                        className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold shadow-lg hover:scale-105 transition"
                      >
                        Login
                      </button>
                      {userError && (
                        <div className="text-red-500 text-sm">{userError}</div>
                      )}
                      {userSuccess && (
                        <div className="text-green-600 text-sm">
                          {userSuccess}
                        </div>
                      )}
                    </form>
                  ) : (
                    <form
                      className="flex flex-col gap-4"
                      onSubmit={handleForgotPassword}
                    >
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-200"
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                      />
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-200"
                        value={forgotPassowrd}
                        onChange={(e) => setForgotPassword(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold shadow-lg hover:scale-105 transition"
                      >
                        Reset Password
                      </button>
                      <span
                        className="text-blue-600 dark:text-blue-300 cursor-pointer underline hover:text-blue-800 dark:hover:text-blue-400 text-sm"
                        onClick={() => setShowForgot(false)}
                      >
                        Back to Login
                      </span>
                      {forgotMsg && (
                        <div className="text-green-600 text-sm">
                          {forgotMsg}
                        </div>
                      )}
                    </form>
                  )}
                </>
              ) : (
                <form
                  className="flex flex-col gap-4"
                  onSubmit={handleUserRegister}
                >
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-200"
                    value={userFirstName}
                    onChange={(e) => setUserFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-200"
                    value={userLastName}
                    onChange={(e) => setUserLastName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-200"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-200"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                  <p className="text-sm dark:text-gray-300 text-gray-700 ">
                    Already have an account?{" "}
                    <span
                      className="text-blue-600 dark:text-blue-300 cursor-pointer underline hover:text-blue-800 dark:hover:text-blue-400"
                      onClick={() => setUserForm("login")}
                    >
                      Login
                    </span>
                  </p>
                  <button
                    type="submit"
                    className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold shadow-lg hover:scale-105 transition"
                  >
                    Register
                  </button>
                  {userError && (
                    <div className="text-red-500 text-sm">{userError}</div>
                  )}
                  {userSuccess && (
                    <div className="text-green-600 text-sm">{userSuccess}</div>
                  )}
                </form>
              )}
            </div>
          ) : (
            <form
              className="flex flex-col gap-4 w-full"
              onSubmit={handleAdminLogin}
            >
              <input
                type="email"
                placeholder="Admin Email"
                className="px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-200"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-200"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />
              <button
                type="submit"
                className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold shadow-lg hover:scale-105 transition"
              >
                Login as Admin
              </button>
              {adminError && (
                <div className="text-red-500 text-sm">{adminError}</div>
              )}
              {adminSuccess && (
                <div className="text-green-600 text-sm">{adminSuccess}</div>
              )}
            </form>
          )}
        </div>
      </main>
    </>
  );
};

export default AuthPage;
