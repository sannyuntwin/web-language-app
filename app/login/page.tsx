"use client";

import Link from "next/link";

export default function LoginPage() {

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md border rounded-lg p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-2 text-center">
          Login Temporarily Disabled
        </h1>
        <p className="text-gray-600 text-sm mb-6 text-center">
          Login functionality is currently under development and will be available soon.
        </p>

        {/* Disabled Message */}
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md text-center">
          <p className="text-yellow-800 text-sm">
            🔧 Login feature is currently under development.
            <br />
            Please check back later!
          </p>
        </div>

        {/* Footer */}
        <div className="text-sm text-center mt-6">
          Don’t have an account?{" "}
          <Link href="/register" className="underline">
            Register
          </Link>
        </div>

        <div className="text-sm text-center mt-2">
          <Link href="/" className="underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
