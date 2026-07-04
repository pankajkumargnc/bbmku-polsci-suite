'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore, useProgressStore, type Language } from '@/lib/store';
import { translations } from '@/lib/data';
import { Moon, Sun, Languages, Menu, X, BookOpen, Search, Flame, Clock, Bookmark, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const t = (key: string, lang: Language) => translations[key]?.[lang] ?? key;

export default function Navbar() {
  const { theme, language, toggleTheme, toggleLanguage } = useAppStore();
  const { streak, totalStudyMinutes, bookmarks, completedTopics } = useProgressStore();
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-105 transition-transform">
              PS
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                {t('appName', language)}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {t('appTagline', language)}
              </div>
            </div>
          </Link>

          {/* Stats Bar */}
          <div className="hidden md:flex items-center gap-5 text-xs">
            <div className="flex items-center gap-1.5 text-orange-500">
              <Flame className="w-4 h-4" />
              <span className="font-semibold">{streak}</span>
              <span className="text-gray-500 dark:text-gray-400">{t('streak', language)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-blue-500">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">{Math.floor(totalStudyMinutes / 60)}h {totalStudyMinutes % 60}m</span>
            </div>
            <div className="flex items-center gap-1.5 text-purple-500">
              <CheckCircle2 className="w-4 h-4" />
              <span className="font-semibold">{completedTopics.length}</span>
              <span className="text-gray-500 dark:text-gray-400">{t('topicsCompleted', language)}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-1 text-xs font-medium text-gray-600 dark:text-gray-300"
              aria-label="Toggle language"
            >
              <Languages className="w-5 h-5" />
              <span className="hidden sm:inline">{language === 'en' ? 'हि' : 'EN'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <Link
              href="/bookmarks"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
            >
              <Bookmark className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              {bookmarks.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-accent-500 text-white text-[10px] flex items-center justify-center font-bold">
                  {bookmarks.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-surface/95 backdrop-blur-xl overflow-hidden"
          >
            <MobileMenu onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 p-4 bg-surface border-b border-gray-200 dark:border-gray-800 shadow-xl"
          >
            <input
              type="text"
              placeholder={t('search', language)}
              autoFocus
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-0 outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const { language } = useAppStore();
  const navItems = [
    { href: '/syllabus', label: t('syllabus', language), icon: '📚' },
    { href: '/pyq', label: t('pyq', language), icon: '📝' },
    { href: '/quiz', label: t('quiz', language), icon: '🎮' },
    { href: '/flashcards', label: t('flashcards', language), icon: '🃏' },
    { href: '/matching', label: t('matching', language), icon: '🔗' },
    { href: '/chronology', label: t('chronology', language), icon: '📅' },
    { href: '/ugc-net', label: t('ugcNet', language), icon: '🎓' },
    { href: '/pomodoro', label: t('pomodoro', language), icon: '⏱️' },
    { href: '/mock-parliament', label: t('mockParliament', language), icon: '🏛️' },
    { href: '/political-compass', label: t('politicalCompass', language), icon: '🧭' },
    { href: '/constitution', label: t('constitutionExplorer', language), icon: '📜' },
  ];

  return (
    <div className="py-3 px-4 space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          <span className="text-lg">{item.icon}</span>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
