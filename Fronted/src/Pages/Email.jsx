import { useState } from "react";
import { Mail, KeyRound, ShieldCheck, Workflow } from "lucide-react";

export default function Email() {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Verification code entered: ${code}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Verify your email
          </h2>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
            Step 2 of 2
          </span>
        </div>

        {/* Info message */}
        <div className="flex items-start gap-2 text-gray-700 text-sm mb-4">
          <Mail className="h-5 w-5 text-green-600 mt-0.5" />
          <p>
            We’ve sent a 6-digit code to <b>you@organization.org</b>
            <br />
            Enter the verification code below to finish creating your admin
            account.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border rounded-lg px-3 py-2">
            <KeyRound className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder=" _ _ _ _ _ _"
              className="flex-1 outline-none text-lg tracking-widest"
            />
            <span className="text-xs text-gray-500">Expires in 09:58</span>
          </div>

          <button
            type="button"
            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg"
          >
            Resend code
          </button>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium"
          >
            Verify and continue
          </button>
        </form>

        {/* Help text */}
        <p className="text-xs text-gray-500 mt-3 text-center">
          Having trouble? Check your spam folder or confirm your email address is
          correct.
        </p>

        {/* Info boxes */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4 text-sm space-y-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-green-600" />
            <p>Your admin permissions are limited until verification is complete.</p>
          </div>
          <div className="flex items-center gap-2">
            <Workflow className="h-4 w-4 text-green-600" />
            <p>After verification you'll be redirected to the dashboard.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-green-600 text-white text-sm text-center rounded-lg py-2 mt-4">
          Registration successful — verification required.
        </div>
      </div>
    </div>
  );
}

