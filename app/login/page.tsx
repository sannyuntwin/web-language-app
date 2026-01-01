"use client";

import Link from "next/link";

export default function LoginPage() {

  return (
    <main className="min-h-screen flex items-center justify-center px-4 md:px-6" style={{backgroundColor: '#ffffff', color: '#171717'}}>
      <div className="w-full max-w-md border rounded-lg p-6 md:p-8">
        {/* Header with Myanmar theme */}
        <div className="text-center mb-4 md:mb-6">
          <div className="text-3xl md:text-4xl mb-2">🔐🇲🇲</div>
          <h1 className="text-xl md:text-2xl font-bold mb-2">
            LangLearn Login
          </h1>
          <p className="text-gray-600 text-xs md:text-sm">
            Continue your language learning journey
          </p>
        </div>

        {/* Disabled Message */}
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md text-center">
          <p className="text-yellow-800 text-sm">
            🔧🔨 Login feature is currently under development.
            <br />
            Coming soon for MyanmarLearn users!
          </p>
        </div>

        {/* Footer */}
        <div className="text-sm text-center mt-6">
          Don’t have an account?{" "}
          <Link href="/register" className="underline">
            📝 Register here
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
