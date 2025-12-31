"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       // TODO: replace with your real backend API
//       const res = await fetch("/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       if (!res.ok) {
//         throw new Error("Registration failed");
//       }

//       // success → go to login
//       router.push("/login");
//     } catch (err: any) {
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md border rounded-lg p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-2 text-center">
          Create an Account
        </h1>
        <p className="text-gray-600 text-sm mb-6 text-center">
          Sign up to start using MyApp.
        </p>

        {/* Error */}
        {error && (
          <div className="mb-4 text-sm text-red-600 border border-red-200 bg-red-50 px-3 py-2 rounded">
            {error}
          </div>
        )}

        {/* Form */}
        <form  className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
              placeholder="At least 6 characters"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-md hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        {/* Footer */}
        <div className="text-sm text-center mt-6">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Login
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
