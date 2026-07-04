'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore, useProgressStore } from '@/lib/store';
import { translations } from '@/lib/data';
import { ArrowLeft, Trash2, Bookmark, FileText, StickyNote, ScrollText } from 'lucide-react';
import Link from 'next/link';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

export default function BookmarksPage() {
  const { language } = useAppStore();
  const { bookmarks, removeBookmark, resetProgress } = useProgressStore();

  const typeIcons: Record<string, React.ElementType> = {
    pyq: FileText,
    mcq: ScrollText,
    flashcard: StickyNote,
    note: Bookmark,
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? '🔖 Bookmarks' : '🔖 बुकमार्क'}
            </h1>
            <p className="text-sm text-gray-500">{bookmarks.length} {language === 'en' ? 'saved items' : 'सहेजे गए आइटम'}</p>
          </div>
        </div>

        {bookmarks.length === 0 ? (
          <div className="text-center py-16">
            <Bookmark className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">
              {language === 'en' ? 'No bookmarks yet' : 'अभी तक कोई बुकमार्क नहीं'}
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              {language === 'en' ? 'Bookmark questions, flashcards, and notes as you study.' : 'पढ़ाई के दौरान प्रश्न, फ्लैशकार्ड और नोट्स बुकमार्क करें।'}
            </p>
            <Link href="/" className="text-primary-500 font-medium hover:underline">
              {language === 'en' ? 'Start studying →' : 'पढ़ाई शुरू करें →'}
            </Link>
          </div>
        ) : (
          <div className="space-y-2">
            <AnimatePresence>
              {bookmarks.map((b) => {
                const Icon = typeIcons[b.type] || Bookmark;
                return (
                  <motion.div
                    key={b.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800"
                  >
                    <Icon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{b.title}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="capitalize">{b.type}</span>
                        <span>•</span>
                        <span>{new Date(b.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeBookmark(b.id)}
                      className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
