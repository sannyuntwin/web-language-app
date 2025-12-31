import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b">
        <h1 className="text-xl font-bold">MyApp</h1>

        <nav className="space-x-4">
          <Link href="/features" className="hover:underline">
            Features
          </Link>
          <Link href="/download" className="hover:underline">
            Download
          </Link>
          {/* Login functionality temporarily disabled */}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center flex-1 px-6">
        <h2 className="text-4xl font-bold mb-4">
          One app to make your life easier
        </h2>

        <p className="text-gray-600 max-w-xl mb-6">
          MyApp helps you manage tasks, stay productive, and access everything
          from your phone or web — fast and secure.
        </p>

        <div className="flex gap-4">
          <Link
            href="/download"
            className="px-6 py-3 bg-black text-white rounded-md"
          >
            Download App
          </Link>

          <Link
            href="/features"
            className="px-6 py-3 border rounded-md"
          >
            View Features
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </main>
  );
}
