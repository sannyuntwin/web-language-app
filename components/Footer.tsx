export default function Footer() {
  return (
    <footer className="text-center text-xs md:text-sm text-green-700 py-3 md:py-4 border-t-2 border-green-200 bg-green-50 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
        <span>© {new Date().getFullYear()} LangLearn</span>
        <span className="hidden sm:inline">🌍📚🇲🇲</span>
        <span className="text-green-600">•</span>
        <span className="hidden sm:inline">All rights reserved.</span>
        <span className="hidden sm:inline">🎓✨</span>
      </div>
      <div className="sm:hidden mt-1">
        🌍📚🇲🇲 • All rights reserved. 🎓✨
      </div>
    </footer>
  );
}