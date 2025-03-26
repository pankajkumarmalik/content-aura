"use client";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignedOut,
  SignedIn,
  useAuth,
} from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { userId } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-gray-900/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-8 py-4 sm:py-6">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-blue-500" />
              <span className="text-xl sm:text-2xl font-bold text-white">
                ContentAura
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {["Features", "Pricing", "Docs"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors py-2 relative group"
              >
                {item}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
            {userId && (
              <Link
                href="/generate"
                className="text-gray-300 hover:text-white transition-colors py-2 relative group"
              >
                Dashboard
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            )}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-gray-300 hover:text-white transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: { avatarBox: "w-10 h-10" },
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300 transform rotate-180" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300 transform rotate-0" />
            )}
          </button>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-gray-900/90 backdrop-blur-lg shadow-lg rounded-b-lg"
            >
              <div className="flex flex-col items-center space-y-4 py-4">
                {["Features", "Pricing", "Docs"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                {userId && (
                  <Link
                    href="/generate"
                    className="text-gray-300 hover:text-white transition-colors text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                )}
                <SignedOut>
                  <SignInButton mode="modal">
                    <button
                      className="text-gray-300 hover:text-white transition-colors text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: { avatarBox: "w-10 h-10" },
                    }}
                  />
                </SignedIn>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
