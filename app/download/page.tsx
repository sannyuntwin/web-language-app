import Link from "next/link";

export default function DownloadPage() {
  const apkDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1N0f9WbCY9CuUkD6sryPIc2cUgsyCUAlk";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold mb-4">
        Download MyApp
      </h1>

      <p className="text-gray-600 max-w-xl mb-8">
        Click the button below and the download will start automatically.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        {/* APK Auto Download */}
        <a
          href={apkDownloadUrl}
          className="px-6 py-3 bg-black text-white rounded-md hover:opacity-90"
        >
          ⬇️ Download APK
        </a>

        {/* Web App */}
        <Link
          href="/"
          className="px-6 py-3 border rounded-md hover:bg-gray-100"
        >
          🌐 Use Web App
        </Link>
      </div>

      <p className="text-sm text-gray-500">
        If download doesn’t start, check your browser download permissions.
      </p>
    </main>
  );
}
