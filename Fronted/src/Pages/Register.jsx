import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    organization: "",
    role: "Administrator",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Account created successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-1">
          Create your admin account
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Register to manage neighborhood food sharing activities.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              className="w-1/2 border rounded-lg px-3 py-2 focus:outline-green-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              className="w-1/2 border rounded-lg px-3 py-2 focus:outline-green-500"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-green-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-green-500"
          />

          <div className="flex gap-3">
            <input
              type="text"
              name="organization"
              placeholder="Organization (optional)"
              value={form.organization}
              onChange={handleChange}
              className="w-2/3 border rounded-lg px-3 py-2 focus:outline-green-500"
            />
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-1/3 border rounded-lg px-3 py-2 focus:outline-green-500"
            >
              <option>Administrator</option>
              <option>Member</option>
            </select>
          </div>

          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="h-4 w-4"
            />
            I agree to the Terms and Privacy Policy
          </label>

          <div className="flex justify-between items-center">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-100"
            >
              ← Back to login
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              ✅ Create account
            </button>
          </div>
        </form>

        <p className="text-xs text-gray-500 mt-6 text-center">
          By creating an account, we’ll send a verification email to confirm your
          address.
        </p>
      </div>
    </div>
  );
}
