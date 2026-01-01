import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function DownloadPage() {
  const apkDownloadUrl =
    "https://drive.google.com/uc?export=download&id=144VICwY5DzTo5G_uNvIpbkFu88OpkfRg";

  return (
    <main className="min-h-screen flex flex-col" style={{backgroundColor: '#ffffff', color: '#171717'}}>
      <Header currentPage="download" />
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 px-4 md:px-6 py-8 md:py-12 text-center">
      <div className="text-4xl md:text-6xl mb-4 md:mb-6">📱🇲🇲📚🎓🌸💡🎯📝✨</div>
      <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-green-700 px-2" style={{fontFamily: 'var(--font-myanmar)'}}>
        Download LangLearn App 📥🎉
      </h1>
      
      {/* App Name */}
      <div className="mb-4 md:mb-6 p-3 md:p-4 bg-yellow-50 rounded-lg mx-4 md:mx-0 max-w-sm">
        <p className="text-lg md:text-xl text-yellow-800" style={{fontFamily: 'var(--font-myanmar)'}}>
          LangLearn for Myanmar Students
        </p>
        <p className="text-xs md:text-sm text-yellow-600">
          Learn 4 Foreign Languages
        </p>
      </div>

      <p className="text-gray-600 max-w-xl mb-6 md:mb-8 px-4 md:px-0 text-sm md:text-base">
        Myanmar students can learn 4 foreign languages with structured lessons,
        vocabulary practice, and comprehensive testing. Start your language learning journey today!
      </p>

      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10 px-4 md:px-0">
        {/* APK Auto Download */}
        <a
          href={apkDownloadUrl}
          className="px-4 md:px-6 py-2 md:py-3 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center gap-2 text-sm md:text-base"
        >
          📱 Download Android APK
        </a>

        {/* Web App */}
        <Link
          href="/"
          className="px-4 md:px-6 py-2 md:py-3 border-2 border-green-600 text-green-600 rounded-md hover:bg-green-50 flex items-center justify-center gap-2 text-sm md:text-base"
        >
          🌐 Use Web Version
        </Link>
      </div>

      {/* App Info */}
      <div className="bg-gray-50 p-4 md:p-6 rounded-lg max-w-md mb-6 md:mb-8 mx-4 md:mx-0">
        <h3 className="font-semibold mb-2 flex items-center gap-2 text-sm md:text-base">
          📋 App Information
        </h3>
        <div className="text-xs md:text-sm text-gray-600 space-y-1">
          <p>• 📏 Size: ~60MB</p>
          <p>• 🤖 Android: 7.0+</p>
          <p>• 💾 Offline Lessons Available</p>
          <p>• 
            <img src="/flags/usa.png" alt="USA" className="inline w-4 h-3 mx-1" />
            <img src="/flags/thailand.png" alt="Thailand" className="inline w-4 h-3 mx-1" />
            <img src="/flags/china.png" alt="China" className="inline w-4 h-3 mx-1" />
            <img src="/flags/japan.png" alt="Japan" className="inline w-4 h-3 mx-1" />
            4 Languages: English, Thai, Chinese, Japanese
          </p>
          <p>• 📚 Structured Lessons & Vocabulary</p>
          <p>• ✅ Multiple Choice & Translation Tests</p>
        </div>
      </div>

      <p className="text-xs md:text-sm text-gray-500 px-4 md:px-0">
        📝 If download doesn't start, check your browser download permissions
      </p>

      <div className="mt-6 md:mt-8 text-lg md:text-2xl">
        🌍✨ Happy Language Learning! ✨🌟
      </div>
      </div>

      <Footer />
    </main>
  );
}
