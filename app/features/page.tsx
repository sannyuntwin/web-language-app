import Link from "next/link";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-6xl mx-auto">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          App Features
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Everything you need to manage your work efficiently, securely,
          and from any device.
        </p>
      </header>

      {/* Features Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            ⚡ Fast Performance
          </h2>
          <p className="text-gray-600">
            Optimized for speed so you can access your data instantly
            without waiting.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            🔒 Secure Authentication
          </h2>
          <p className="text-gray-600">
            Your data is protected with modern authentication and
            encryption techniques.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            📱 Mobile & Web Sync
          </h2>
          <p className="text-gray-600">
            Seamlessly switch between mobile and web without losing
            your progress.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            ☁️ Cloud Storage
          </h2>
          <p className="text-gray-600">
            Your data is stored safely in the cloud and accessible
            anytime, anywhere.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            🎨 Simple & Clean UI
          </h2>
          <p className="text-gray-600">
            A clean interface designed for ease of use and productivity.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            🔄 Regular Updates
          </h2>
          <p className="text-gray-600">
            We continuously improve the app with new features and
            security updates.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16">
        <h3 className="text-2xl font-bold mb-4">
          Ready to get started?
        </h3>
        <div className="flex justify-center gap-4">
          <Link
            href="/download"
            className="px-6 py-3 bg-black text-white rounded-md"
          >
            Download App
          </Link>
          <Link
            href="/"
            className="px-6 py-3 border rounded-md"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
