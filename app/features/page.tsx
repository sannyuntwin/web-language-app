import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{backgroundColor: '#ffffff', color: '#171717'}}>
      <Header currentPage="features" />
      
      {/* Main Content */}
      <div className="px-4 md:px-6 py-8 md:py-12 max-w-6xl mx-auto">
      <header className="text-center mb-8 md:mb-12">
        <div className="text-3xl md:text-6xl mb-3 md:mb-4">🇺🇸🇹🇭🇨🇳🇯🇵📚🎓✨🌟💡🔤✍️🗣️🎯</div>
        <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-green-700 px-2">
          Language Learning Features 🌍📖🌟
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">
          Myanmar students can learn 4 foreign languages with structured lessons,
          vocabulary practice, and comprehensive testing methods.
        </p>

      </header>

      {/* Features Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {/* Feature 1 - 4 Languages */}
        <div className="border rounded-lg p-4 md:p-6">
          <div className="text-3xl md:text-4xl mb-3 md:mb-4">🌍</div>
          <h2 className="text-lg md:text-xl font-semibold mb-2 flex items-center gap-2">
            <img src="/flags/usa.png" alt="USA" className="w-5 h-4" />
            <img src="/flags/thailand.png" alt="Thailand" className="w-5 h-4" />
            <img src="/flags/china.png" alt="China" className="w-5 h-4" />
            <img src="/flags/japan.png" alt="Japan" className="w-5 h-4" />
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Learn English, Thai, Chinese & Japanese with dedicated lessons and practice materials for Myanmar students.
          </p>
        </div>

        {/* Feature 2 - Vocabulary Learning */}
        <div className="border rounded-lg p-4 md:p-6">
          <div className="text-3xl md:text-4xl mb-3 md:mb-4">📚</div>
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Vocabulary Mastery
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Each lesson includes comprehensive vocabulary lists with definitions, examples, and memory techniques.
          </p>
        </div>

        {/* Feature 3 - Structured Lessons */}
        <div className="border rounded-lg p-4 md:p-6">
          <div className="text-3xl md:text-4xl mb-3 md:mb-4">📖</div>
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Organized Lessons
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Every language has multiple structured lessons with progressive difficulty levels and clear learning objectives.
          </p>
        </div>

        {/* Feature 4 - Multiple Choice Tests */}
        <div className="border rounded-lg p-4 md:p-6">
          <div className="text-3xl md:text-4xl mb-3 md:mb-4">✅</div>
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Multiple Choice Tests
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Test your knowledge with comprehensive multiple choice questions covering vocabulary, grammar, and comprehension.
          </p>
        </div>

        {/* Feature 5 - Word Order & Fill in Blank */}
        <div className="border rounded-lg p-4 md:p-6">
          <div className="text-3xl md:text-4xl mb-3 md:mb-4">🔄</div>
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Word Order & Fill Blanks
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Practice sentence structure with word ordering exercises and fill-in-the-blank questions for better understanding.
          </p>
        </div>

        {/* Feature 6 - Translation Tests */}
        <div className="border rounded-lg p-4 md:p-6">
          <div className="text-3xl md:text-4xl mb-3 md:mb-4">🔄</div>
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Translation Practice
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Develop translation skills with Myanmar-English translation exercises and cultural context understanding.
          </p>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="mt-12 md:mt-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">🎯📈📊</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="text-center p-4 md:p-6 border rounded-lg">
            <div className="text-3xl md:text-4xl mb-3 md:mb-4">🏃</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Progressive Learning</h3>
            <p className="text-gray-600 text-sm md:text-base">Start from basics and advance to complex language structures</p>
          </div>
          <div className="text-center p-4 md:p-6 border rounded-lg">
            <div className="text-3xl md:text-4xl mb-3 md:mb-4">🧠</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Smart Assessment</h3>
            <p className="text-gray-600 text-sm md:text-base">AI-powered testing that adapts to your learning level</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12 md:mt-16 px-4">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-700">
          Ready to start learning foreign languages? 🌍📚✨🎓🌟
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
          <Link
            href="/download"
            className="px-4 md:px-6 py-2 md:py-3 bg-green-600 text-white rounded-md flex items-center justify-center gap-2 hover:bg-green-700 text-sm md:text-base"
          >
            📱 Download App
          </Link>
          <Link
            href="/"
            className="px-4 md:px-6 py-2 md:py-3 border-2 border-green-600 text-green-600 rounded-md flex items-center justify-center gap-2 hover:bg-green-50 text-sm md:text-base"
          >
            🏠 Back to Home
          </Link>
        </div>
      </section>
      </div>

      <Footer />
    </main>
  );
}
