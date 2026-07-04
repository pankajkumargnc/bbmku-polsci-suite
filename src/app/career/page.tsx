'use client';

import { motion } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { careerPaths, translations } from '@/lib/data';
import { ArrowLeft, ExternalLink, GraduationCap, DollarSign, FileText } from 'lucide-react';
import Link from 'next/link';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

export default function CareerPage() {
  const { language } = useAppStore();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? '💼 Career Guidance' : '💼 करियर मार्गदर्शन'}
            </h1>
            <p className="text-sm text-gray-500">
              {language === 'en' ? 'Career paths after M.A. Political Science' : 'M.A. राजनीति विज्ञान के बाद करियर पथ'}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {careerPaths.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{c.icon}</div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {language === 'en' ? c.title : c.titleHi}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {language === 'en' ? c.description : c.descriptionHi}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {(language === 'en' ? c.exams : c.examsHi).join(', ')}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400">
                      <DollarSign className="w-3.5 h-3.5" />
                      {language === 'en' ? c.salary : c.salaryHi}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl p-6 text-white"
        >
          <h3 className="text-lg font-bold mb-3">
            {language === 'en' ? '📋 Quick Tips for Success' : '📋 सफलता के लिए त्वरित सुझाव'}
          </h3>
          <ul className="space-y-2 text-sm text-white/90">
            {(language === 'en'
              ? ['Start UPSC preparation alongside your M.A.', 'Clear UGC NET in your final semester', 'Build writing skills through answer writing practice', 'Stay updated with current affairs daily', 'Network with alumni and professionals on LinkedIn']
              : ['अपने M.A. के साथ UPSC की तैयारी शुरू करें', 'अपने अंतिम सेमेस्टर में UGC NET क्लियर करें', 'उत्तर लेखन अभ्यास के माध्यम से लेखन कौशल बनाएं', 'रोजाना करेंट अफेयर्स से अपडेट रहें', 'LinkedIn पर पूर्व छात्रों और पेशेवरों के साथ नेटवर्क करें']
            ).map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-white font-bold">•</span> {tip}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
