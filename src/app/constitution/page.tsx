'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore, useProgressStore } from '@/lib/store';
import { constitutionArticles, translations } from '@/lib/data';
import { ArrowLeft, Search, ChevronDown, Copy, CheckCircle2, Bookmark } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

export default function ConstitutionPage() {
  const { language } = useAppStore();
  const { toggleBookmark, isBookmarked } = useProgressStore();
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const filtered = constitutionArticles.filter(
    (a) =>
      a.article.toLowerCase().includes(search.toLowerCase()) ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.titleHi.includes(search) ||
      a.content.toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? '📜 Constitution Explorer' : '📜 संविधान एक्सप्लोरर'}
            </h1>
            <p className="text-sm text-gray-500">
              {language === 'en' ? `${constitutionArticles.length} key articles with bilingual text` : `${constitutionArticles.length} प्रमुख अनुच्छेद द्विभाषी पाठ के साथ`}
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={language === 'en' ? 'Search articles...' : 'अनुच्छेद खोजें...'}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
          />
        </div>

        <div className="space-y-3">
          {filtered.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                <button onClick={() => toggle(article.id)} className="flex-1 flex items-center gap-3 text-left">
                  <div className="w-16 flex-shrink-0">
                    <span className="text-xs font-mono text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-0.5 rounded-full">
                      {article.article}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
                      {language === 'en' ? article.title : article.titleHi}
                    </h3>
                    <span className="text-xs text-gray-400">
                      {language === 'en' ? article.part : article.partHi}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${expanded.has(article.id) ? 'rotate-180' : ''}`} />
                </button>
                <button
                  onClick={() => {
                    toggleBookmark({
                      id: Date.now().toString(),
                      type: 'note',
                      itemId: article.id,
                      title: article.title,
                      date: new Date().toISOString(),
                    });
                    toast.success(isBookmarked(article.id) ? 'Bookmark removed' : 'Bookmarked!');
                  }}
                  className={`p-1.5 rounded-lg ${isBookmarked(article.id) ? 'text-accent-500' : 'text-gray-400'}`}
                >
                  <Bookmark className="w-4 h-4" fill={isBookmarked(article.id) ? 'currentColor' : 'none'} />
                </button>
              </div>

              <AnimatePresence>
                {expanded.has(article.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-gray-100 dark:border-gray-800"
                  >
                    <div className="p-4 space-y-3">
                      <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                        <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                          {article.content}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/20">
                        <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                          {article.contentHi}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(article.content);
                          toast.success(language === 'en' ? 'Copied!' : 'कॉपी किया!');
                        }}
                        className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <Copy className="w-3 h-3" /> {language === 'en' ? 'Copy text' : 'टेक्स्ट कॉपी करें'}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              {t('noResults', language)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
