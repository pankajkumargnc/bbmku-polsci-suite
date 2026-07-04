'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { currentAffairs, translations } from '@/lib/data';
import { ArrowLeft, Calendar, Tag, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

export default function CurrentAffairsPage() {
  const { language } = useAppStore();
  const [selectedCat, setSelectedCat] = useState('all');

  const categories = [...new Set(currentAffairs.map((c) => c.category))];

  const filtered = selectedCat === 'all'
    ? currentAffairs
    : currentAffairs.filter((c) => c.category === selectedCat);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? '📰 Current Affairs' : '📰 करेंट अफेयर्स'}
            </h1>
            <p className="text-sm text-gray-500">
              {language === 'en' ? 'Exam-relevant news & analysis' : 'परीक्षा-प्रासंगिक समाचार और विश्लेषण'}
            </p>
          </div>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCat('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${selectedCat === 'all' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
          >
            {language === 'en' ? 'All' : 'सभी'}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${selectedCat === cat ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((ca, i) => (
            <motion.div
              key={ca.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(ca.date).toLocaleDateString(language === 'en' ? 'en-US' : 'en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  {language === 'en' ? ca.category : ca.categoryHi}
                </span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'en' ? ca.title : ca.titleHi}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {language === 'en' ? ca.summary : ca.summaryHi}
              </p>
              <div className="p-3 rounded-xl bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-800/20">
                <p className="text-xs text-primary-700 dark:text-primary-300 font-medium">
                  📌 {language === 'en' ? 'Exam Relevance: ' : 'परीक्षा प्रासंगिकता: '}
                  {language === 'en' ? ca.relevance : ca.relevanceHi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
