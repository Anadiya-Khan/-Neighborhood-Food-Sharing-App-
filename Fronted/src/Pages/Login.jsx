import { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <h1 className="text-xl font-semibold text-green-700 mb-6">
        🍴 Neighborhood Food Sharing — Admin
      </h1>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {/* Toggle buttons */}
        <div className="flex mb-6 bg-green-50 rounded-lg overflow-hidden">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 font-medium ${
              isLogin
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 font-medium ${
              !isLogin
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-700"
            }`}
          >
            Register
          </button>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-2">
          {isLogin ? "Welcome back" : "Create an account"}
        </h2>
        <p className="text-gray-500 mb-6">
          {isLogin
            ? "Sign in to manage community food sharing."
            : "Register as an admin to access the dashboard."}
        </p>

        <form className="space-y-4">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Forgot password */}
          {isLogin && (
            <div className="text-right text-sm text-green-600 cursor-pointer">
              Forgot password?
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Toggle text */}
        <p className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setIsLogin(false)}
                className="text-green-600 cursor-pointer"
              >
                Register
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)}
                className="text-green-600 cursor-pointer"
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>

      {/* Footer links */}
      <div className="mt-8 flex justify-center gap-6 text-sm text-gray-500">
        <a href="#">About Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};