"use client";

import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavLinks = () => {
    return [
      { href: "/", text: "🏠 Home", active: currentPage === "home" },
      { href: "/features", text: "📖 Features", active: currentPage === "features" },
      { href: "/download", text: "📱 Download", active: currentPage === "download" },
      { href: "/login", text: "🔐 Login", active: currentPage === "login" },
      { href: "/register", text: "📝 Register", active: currentPage === "register" },
    ];
  };

  return (
    <header className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 border-b-2 border-green-200 bg-green-50 sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-lg md:text-xl font-bold flex items-center gap-1 md:gap-2 text-green-700">
        <span className="text-2xl md:text-2xl">🌐✨</span>
        <span className="hidden sm:inline">LangLearn</span>
        <span className="sm:hidden">LL</span>
        <span className="hidden md:inline">📚🌸</span>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-3 lg:space-x-4">
        {getNavLinks().map((link) => (
          <Link 
            key={link.href}
            href={link.href} 
            className={`hover:underline flex items-center gap-1 transition-colors text-sm lg:text-base ${
              link.active 
                ? 'text-green-800 font-semibold' 
                : 'text-green-700 hover:text-green-800'
            }`}
          >
            {link.text}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 text-green-700 hover:text-green-800"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-green-50 border-b-2 border-green-200 md:hidden">
          <nav className="flex flex-col px-4 py-3 space-y-2">
            {getNavLinks().map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`py-2 px-3 rounded-md transition-colors ${
                  link.active 
                    ? 'bg-green-200 text-green-800 font-semibold' 
                    : 'text-green-700 hover:bg-green-100 hover:text-green-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}