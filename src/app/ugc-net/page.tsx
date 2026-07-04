'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { pyqBank, mcqBank, translations } from '@/lib/data';
import { ArrowLeft, Trophy, BookOpen, FileText, Target, Clock, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

export default function UGCNETPage() {
  const { language } = useAppStore();

  const totalPYQs = 6314;
  const papers = [
    { title: 'Paper 1 — Teaching & Research Aptitude', titleHi: 'पेपर 1 — शिक्षण और शोध अभियोग्यता', questions: 50, marks: 100 },
    { title: 'Paper 2 — Political Science', titleHi: 'पेपर 2 — राजनीति विज्ञान', questions: 100, marks: 200 },
  ];

  const topics = [
    { en: 'Political Theory', hi: 'राजनीतिक सिद्धांत', count: 450 },
    { en: 'Western Political Thought', hi: 'पश्चिमी राजनीतिक विचार', count: 600 },
    { en: 'Indian Political Thought', hi: 'भारतीय राजनीतिक विचार', count: 550 },
    { en: 'Comparative Politics', hi: 'तुलनात्मक राजनीति', count: 500 },
    { en: 'International Relations', hi: 'अंतर्राष्ट्रीय संबंध', count: 580 },
    { en: 'Indian Government & Politics', hi: 'भारतीय सरकार और राजनीति', count: 700 },
    { en: 'Public Administration', hi: 'लोक प्रशासन', count: 350 },
    { en: 'Political Ideologies', hi: 'राजनीतिक विचारधाराएं', count: 400 },
    { en: 'Constitutional Law', hi: 'संवैधानिक कानून', count: 650 },
    { en: 'Research Methodology', hi: 'शोध पद्धति', count: 534 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? '🎓 UGC NET Preparation' : '🎓 UGC NET तैयारी'}
            </h1>
            <p className="text-sm text-gray-500">
              {language === 'en' ? `Complete prep hub with ${totalPYQs.toLocaleString()}+ PYQs` : `${totalPYQs.toLocaleString()}+ PYQ के साथ संपूर्ण तैयारी हब`}
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { icon: FileText, val: totalPYQs.toLocaleString(), label: { en: 'Total PYQs', hi: 'कुल PYQ' }, color: 'text-blue-500' },
            { icon: BookOpen, val: '10', label: { en: 'Core Topics', hi: 'मुख्य विषय' }, color: 'text-purple-500' },
            { icon: Clock, val: '3 hrs', label: { en: 'Exam Duration', hi: 'परीक्षा अवधि' }, color: 'text-orange-500' },
            { icon: Target, val: '300', label: { en: 'Total Marks', hi: 'कुल अंक' }, color: 'text-green-500' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800 text-center"
            >
              <s.icon className={`w-6 h-6 ${s.color} mx-auto mb-2`} />
              <div className="text-xl font-bold text-gray-900 dark:text-white">{s.val}</div>
              <div className="text-xs text-gray-500">{language === 'en' ? s.label.en : s.label.hi}</div>
            </motion.div>
          ))}
        </div>

        {/* Paper structure */}
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
          {language === 'en' ? '📋 Exam Pattern' : '📋 परीक्षा पैटर्न'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {papers.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">
                {language === 'en' ? p.title : p.titleHi}
              </h3>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-500">{p.questions} {language === 'en' ? 'Q' : 'प्रश्न'}</span>
                <span className="text-primary-600 font-bold">{p.marks} {language === 'en' ? 'Marks' : 'अंक'}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Topic-wise breakdown */}
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
          {language === 'en' ? '📊 Topic-wise PYQ Distribution' : '📊 विषय-वार PYQ वितरण'}
        </h2>
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 space-y-3">
          {topics.map((topic, i) => {
            const maxCount = Math.max(...topics.map((t) => t.count));
            const width = (topic.count / maxCount) * 100;
            return (
              <div key={i} className="flex items-center gap-3">
                <span className="w-32 text-xs text-gray-600 dark:text-gray-400 text-right flex-shrink-0 truncate">
                  {language === 'en' ? topic.en : topic.hi}
                </span>
                <div className="flex-1 h-6 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-end pr-2"
                  >
                    <span className="text-[10px] text-white font-bold">{topic.count}</span>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 gap-3 mt-8">
          <Link href="/pyq" className="p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary-300 transition-all text-center">
            <FileText className="w-8 h-8 text-primary-500 mx-auto mb-2" />
            <div className="font-semibold text-sm text-gray-900 dark:text-white">
              {language === 'en' ? 'PYQ Bank' : 'PYQ बैंक'}
            </div>
            <div className="text-xs text-gray-500 mt-1">{language === 'en' ? 'Practice previous papers' : 'पिछले पेपर का अभ्यास करें'}</div>
          </Link>
          <Link href="/quiz" className="p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary-300 transition-all text-center">
            <Trophy className="w-8 h-8 text-amber-500 mx-auto mb-2" />
            <div className="font-semibold text-sm text-gray-900 dark:text-white">
              {language === 'en' ? 'Mock Test' : 'मॉक टेस्ट'}
            </div>
            <div className="text-xs text-gray-500 mt-1">{language === 'en' ? 'Timed MCQ quizzes' : 'समयबद्ध MCQ प्रश्नोत्तरी'}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
