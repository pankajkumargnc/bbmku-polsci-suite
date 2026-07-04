'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useAppStore, useProgressStore } from '@/lib/store';
import { pyqBank, translations } from '@/lib/data';
import { ArrowLeft, Search, Filter, Bookmark, ChevronDown, Eye } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

export default function PYQPage() {
  const { language } = useAppStore();
  const { toggleBookmark, isBookmarked } = useProgressStore();
  const [search, setSearch] = useState('');
  const [yearFilter, setYearFilter] = useState<number | 'all'>('all');
  const [subjectFilter, setSubjectFilter] = useState<string>('all');
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const subjects = useMemo(() => {
    const s = new Set(pyqBank.map((p) => p.subject));
    return Array.from(s);
  }, []);

  const years = useMemo(() => {
    const s = new Set(pyqBank.map((p) => p.year));
    return Array.from(s).sort((a, b) => b - a);
  }, []);

  const filtered = pyqBank.filter((p) => {
    if (yearFilter !== 'all' && p.year !== yearFilter) return false;
    if (subjectFilter !== 'all' && p.subject !== subjectFilter) return false;
    if (search && !p.question.toLowerCase().includes(search.toLowerCase()) && !p.questionHi.includes(search)) return false;
    return true;
  });

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? '📝 Previous Year Questions' : '📝 पिछले वर्ष के प्रश्न'}
            </h1>
            <p className="text-sm text-gray-500">
              {language === 'en' ? `6,314+ UGC NET PYQ Bank — ${pyqBank.length} curated samples shown` : `6,314+ UGC NET PYQ बैंक — ${pyqBank.length} क्यूरेटेड नमूने दिखाए गए`}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={language === 'en' ? 'Search questions...' : 'प्रश्न खोजें...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select
            value={yearFilter === 'all' ? 'all' : yearFilter}
            onChange={(e) => setYearFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="px-3 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm outline-none"
          >
            <option value="all">{language === 'en' ? 'All Years' : 'सभी वर्ष'}</option>
            {years.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            className="px-3 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm outline-none"
          >
            <option value="all">{language === 'en' ? 'All Subjects' : 'सभी विषय'}</option>
            {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="text-sm text-gray-500 mb-4">
          {filtered.length} {language === 'en' ? 'questions found' : 'प्रश्न मिले'}
        </div>

        <div className="space-y-3">
          {filtered.map((pyq, i) => (
            <motion.div
              key={pyq.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02 }}
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden"
            >
              <div className="flex items-start gap-3 p-4">
                <button onClick={() => toggle(pyq.id)} className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-mono bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-2 py-0.5 rounded-full">
                      {pyq.year}
                    </span>
                    <span className="text-xs text-gray-400">
                      {language === 'en' ? pyq.subject : pyq.subjectHi}
                    </span>
                    <span className="text-xs text-gray-400">• {pyq.marks} marks</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {language === 'en' ? pyq.question : pyq.questionHi}
                  </p>
                  {expanded.has(pyq.id) && (
                    <div className="mt-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/20">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {language === 'en' ? `Topic: ${pyq.topic}` : `विषय: ${pyq.topic}`}
                      </p>
                      <p className="text-sm text-amber-800 dark:text-amber-200 mt-1">
                        {language === 'en' ? pyq.questionHi : pyq.question}
                      </p>
                    </div>
                  )}
                </button>
                <button
                  onClick={() => {
                    toggleBookmark({
                      id: Date.now().toString(),
                      type: 'pyq',
                      itemId: pyq.id,
                      title: pyq.question.slice(0, 50),
                      date: new Date().toISOString(),
                    });
                    toast.success(isBookmarked(pyq.id) ? 'Bookmark removed' : 'Bookmarked!');
                  }}
                  className={`p-1.5 rounded-lg ${isBookmarked(pyq.id) ? 'text-accent-500' : 'text-gray-400'}`}
                >
                  <Bookmark className="w-4 h-4" fill={isBookmarked(pyq.id) ? 'currentColor' : 'none'} />
                </button>
                <Eye className={`w-4 h-4 ${expanded.has(pyq.id) ? 'text-primary-500' : 'text-gray-400'}`} />
              </div>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-500">{t('noResults', language)}</div>
          )}
        </div>
      </div>
    </div>
  );
}
