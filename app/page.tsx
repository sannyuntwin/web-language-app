import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col" style={{backgroundColor: '#ffffff', color: '#171717'}}>
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center flex-1 px-4 md:px-6 py-8 md:py-12">
        <div className="text-4xl md:text-6xl mb-4 md:mb-6">📚🎓🌟💡📖✍️</div>
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-green-700 px-2">
          Learn Foreign Languages
          <span className="flex items-center justify-center gap-2 mt-2">
            <img src="/flags/usa.png" alt="USA" className="w-6 h-4" />
            <img src="/flags/thailand.png" alt="Thailand" className="w-6 h-4" />
            <img src="/flags/china.png" alt="China" className="w-6 h-4" />
            <img src="/flags/japan.png" alt="Japan" className="w-6 h-4" />
            📚✨
          </span>
        </h2>

        <p className="text-gray-600 max-w-xl mb-6 px-4 md:px-0 text-sm md:text-base">
          Myanmar students can learn English, Thai, Chinese & Japanese with
          interactive lessons, vocabulary practice, and comprehensive testing.
        </p>

        {/* Myanmar Text Showcase */}
        <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg border border-green-200 max-w-sm md:max-w-lg mx-4 md:mx-0">
          <div className="text-center">
            <p className="text-lg md:text-2xl mb-2" style={{fontFamily: 'var(--font-myanmar)', color: '#3c8a3e'}}>
              မြန်မာစာလုံးပေါင်း
            </p>
            <p className="text-xs md:text-sm text-green-600" style={{fontFamily: 'var(--font-myanmar)'}}>
              Myanmar Script Practice
            </p>
            <div className="mt-3 md:mt-4 p-2 md:p-3 bg-white rounded border">
              <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
                <div className="flex items-center gap-1">
                  <img src="/flags/usa.png" alt="English" className="w-4 h-3" />
                  <span>English</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src="/flags/thailand.png" alt="Thai" className="w-4 h-3" />
                  <span>Thai</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src="/flags/china.png" alt="Chinese" className="w-4 h-3" />
                  <span>Chinese</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src="/flags/japan.png" alt="Japanese" className="w-4 h-3" />
                  <span>Japanese</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                4 Languages • Interactive Lessons • Smart Testing
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 px-4 md:px-0">
          <Link
            href="/download"
            className="px-4 md:px-6 py-2 md:py-3 bg-green-600 text-white rounded-md flex items-center justify-center gap-2 hover:bg-green-700 text-sm md:text-base"
          >
            📱 Download App
          </Link>

          <Link
            href="/features"
            className="px-4 md:px-6 py-2 md:py-3 border-2 border-green-600 text-green-600 rounded-md flex items-center justify-center gap-2 hover:bg-green-50 text-sm md:text-base"
          >
            ⭐ View Features
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
