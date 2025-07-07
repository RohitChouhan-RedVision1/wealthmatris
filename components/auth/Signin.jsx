"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

export default function Signin() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState("CLIENT");
  const [showPassword, setShowPassword] = useState(false);

  const [provider, setProvider] = useState({
    username: "",
    password: "",
    loginFor: "CLIENT",
    callbackUrl: `${process.env.NEXT_PUBLIC_CALLBACK_URL}/login`,
    siteUrl: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  });

  // Reset email & password when role changes
  useEffect(() => {
    setProvider((prev) => ({
      ...prev,
      username: "",
      password: "",
      loginFor: selectedRole === "ADMIN" ? "ARN" : selectedRole,
    }));
  }, [selectedRole]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      console.log(provider)
      const res = await axios.post("https://redvisionweb.com/api/login/arn-login", provider);
      console.log(res)
      if (res.data.status === true) {
        // Clear credentials on success
        setProvider((prev) => ({ ...prev, username: "", password: "" }));
        router.push(`${res.data.url}`);
      } else {
        setError(res.data.msg);
      }
    } catch (error) {
      console.log(error);
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const roles = ["CLIENT", "EMPLOYEE", "ADMIN", "BROKER", "BRANCH"];

  return (
    <>
      <div className="md:w-1/2 xl:w-5/12 p-6 sm:p-12 items-center">
        <div className="flex justify-center">
          <div className="flex justify-center flex-wrap gap-2">
            {roles.map((role) => (
              <button
                key={role}
                className={`mb-2 w-[140px] tracking-wide font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none ${
                  selectedRole !== role
                    ? "border border-primarybgcolor text-gray-800"
                    : "bg-[var(--rv-primary)] text-gray-100 hover:bg-gray-700"
                }`}
                onClick={() => setSelectedRole(role)}
              >
                <span className="text-sm">{role}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center">
          <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In</h1>
          <div className="w-full flex-1 mt-4">
            <div className="mx-auto max-w-xs">
              <form onSubmit={handleSubmit}>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  value={provider.username}
                  onChange={(e) =>
                    setProvider({ ...provider, username: e.target.value })
                  }
                />

                <div className="relative mt-5">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={provider.password}
                    onChange={(e) =>
                      setProvider({ ...provider, password: e.target.value })
                    }
                  />
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </div>

                <button
                  className="mt-5 tracking-wide font-semibold bg-[var(--rv-primary)] text-gray-100 w-full py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  disabled={loading}
                >
                  {loading ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-200 animate-spin fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <>
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy={7} r={4} />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-3">Sign In</span>
                    </>
                  )}
                </button>
                {error && <div className="text-red-600 mt-2">{error}</div>}
              </form>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Link
              href={`/forget-password?type=${selectedRole}`}
              className="text-ms underline"
            >
              Forgot Password
            </Link>
            <span className="text-[#07070799]">|</span>
            <Link href="/contactus" className="text-ms underline">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
