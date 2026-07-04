'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { semesters, translations } from '@/lib/data';
import { ArrowLeft, Search, BookOpen, ExternalLink, Download, Bookmark } from 'lucide-react';
import Link from 'next/link';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

interface Resource {
  id: string;
  title: string;
  titleHi: string;
  author: string;
  type: 'Book' | 'Article' | 'PDF' | 'Video';
  subject: string;
  link?: string;
}

const resources: Resource[] = [
  { id: 'r1', title: 'A History of Political Theory', titleHi: 'राजनीतिक सिद्धांत का इतिहास', author: 'G.H. Sabine', type: 'Book', subject: 'Western Political Thought' },
  { id: 'r2', title: 'The Republic', titleHi: 'द रिपब्लिक', author: 'Plato', type: 'Book', subject: 'Greek Political Thought' },
  { id: 'r3', title: 'Politics', titleHi: 'पॉलिटिक्स', author: 'Aristotle', type: 'Book', subject: 'Greek Political Thought' },
  { id: 'r4', title: 'The Prince', titleHi: 'द प्रिंस', author: 'Machiavelli', type: 'Book', subject: 'Modern Political Thought' },
  { id: 'r5', title: 'Leviathan', titleHi: 'लेवियाथान', author: 'Thomas Hobbes', type: 'Book', subject: 'Social Contract' },
  { id: 'r6', title: 'Two Treatises of Government', titleHi: 'सरकार के दो अनुबंध', author: 'John Locke', type: 'Book', subject: 'Social Contract' },
  { id: 'r7', title: 'The Social Contract', titleHi: 'सामाजिक अनुबंध', author: 'Rousseau', type: 'Book', subject: 'Social Contract' },
  { id: 'r8', title: 'Introduction to the Constitution of India', titleHi: 'भारत के संविधान का परिचय', author: 'D.D. Basu', type: 'Book', subject: 'Indian Constitution' },
  { id: 'r9', title: 'The Indian Constitution: Cornerstone of a Nation', titleHi: 'भारतीय संविधान: एक राष्ट्र की आधारशिला', author: 'Granville Austin', type: 'Book', subject: 'Indian Constitution' },
  { id: 'r10', title: 'Annihilation of Caste', titleHi: 'जाति का विनाश', author: 'B.R. Ambedkar', type: 'Article', subject: 'Indian Political Thought' },
  { id: 'r11', title: 'Hind Swaraj', titleHi: 'हिंद स्वराज', author: 'M.K. Gandhi', type: 'Book', subject: 'Indian Political Thought' },
  { id: 'r12', title: 'Arthashastra', titleHi: 'अर्थशास्त्र', author: 'Kautilya', type: 'Book', subject: 'Ancient Indian Thought' },
  { id: 'r13', title: 'Politics Among Nations', titleHi: 'राष्ट्रों के बीच राजनीति', author: 'Hans Morgenthau', type: 'Book', subject: 'International Relations' },
  { id: 'r14', title: 'The Globalization of World Politics', titleHi: 'विश्व राजनीति का वैश्वीकरण', author: 'Baylis & Smith', type: 'Book', subject: 'International Relations' },
  { id: 'r15', title: 'Patterns of Democracy', titleHi: 'लोकतंत्र के पैटर्न', author: 'Arend Lijphart', type: 'Book', subject: 'Comparative Politics' },
  { id: 'r16', title: 'On Liberty', titleHi: 'स्वतंत्रता पर', author: 'J.S. Mill', type: 'Book', subject: 'Modern Political Thought' },
  { id: 'r17', title: 'A Theory of Justice', titleHi: 'न्याय का सिद्धांत', author: 'John Rawls', type: 'Book', subject: 'Political Philosophy' },
  { id: 'r18', title: 'Two Concepts of Liberty', titleHi: 'स्वतंत्रता की दो अवधारणाएं', author: 'Isaiah Berlin', type: 'Article', subject: 'Political Theory' },
  { id: 'r19', title: 'Indian Foreign Policy: An Overview', titleHi: 'भारतीय विदेश नीति: एक अवलोकन', author: 'Harsh V. Pant', type: 'Book', subject: 'Indian Foreign Policy' },
  { id: 'r20', title: 'Foundations of Indian Political Thought', titleHi: 'भारतीय राजनीतिक विचार की नींव', author: 'V.R. Mehta', type: 'Book', subject: 'Indian Political Thought' },
];

export default function ELibraryPage() {
  const { language } = useAppStore();
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const types = ['Book', 'Article', 'PDF', 'Video'];

  const filtered = resources.filter((r) => {
    if (typeFilter !== 'all' && r.type !== typeFilter) return false;
    if (search && !r.title.toLowerCase().includes(search.toLowerCase()) && !r.author.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const typeColors: Record<string, string> = {
    Book: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
    Article: 'bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400',
    PDF: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
    Video: 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400',
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
              {language === 'en' ? '📚 E-Library' : '📚 ई-लाइब्रेरी'}
            </h1>
            <p className="text-sm text-gray-500">
              {language === 'en' ? `${resources.length} curated academic resources` : `${resources.length} क्यूरेटेड शैक्षणिक संसाधन`}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={language === 'en' ? 'Search by title or author...' : 'शीर्षक या लेखक द्वारा खोजें...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm outline-none"
          >
            <option value="all">{language === 'en' ? 'All Types' : 'सभी प्रकार'}</option>
            {types.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-primary-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                    {language === 'en' ? r.title : r.titleHi}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{r.author}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${typeColors[r.type]}`}>
                      {r.type}
                    </span>
                    <span className="text-[10px] text-gray-400">{r.subject}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">{t('noResults', language)}</div>
        )}
      </div>
    </div>
  );
}
