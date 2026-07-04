'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { politicalCompassQuestions, translations } from '@/lib/data';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import Link from 'next/link';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

interface Scores { economic: number; social: number }

export default function PoliticalCompassPage() {
  const { language } = useAppStore();
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Scores>({ economic: 0, social: 0 });
  const [done, setDone] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions = politicalCompassQuestions;

  const handleAnswer = (optIdx: number) => {
    const q = questions[currentQ];
    const opt = q.options[optIdx];
    const newScores = { economic: scores.economic + opt.scores.economic, social: scores.social + opt.scores.social };
    setScores(newScores);
    setAnswers([...answers, optIdx]);

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setScores({ economic: 0, social: 0 });
    setDone(false);
    setAnswers([]);
  };

  if (done) {
    const maxEconomic = questions.length * 5;
    const maxSocial = questions.length * 5;
    const econPct = scores.economic / maxEconomic;
    const socPct = scores.social / maxSocial;

    // Determine quadrant
    const quadrant = econPct > 0 ? (socPct > 0 ? 'Auth Right' : 'Lib Right') : (socPct > 0 ? 'Auth Left' : 'Lib Left');
    const quadrantLabels: Record<string, { en: string; hi: string; desc: string; descHi: string }> = {
      'Auth Right': { en: 'Authoritarian Right', hi: 'सत्तावादी दक्षिणपंथ', desc: 'You favor traditional values, strong authority, and free-market economics.', descHi: 'आप पारंपरिक मूल्यों, मजबूत प्राधिकार और मुक्त बाजार अर्थशास्त्र के पक्षधर हैं।' },
      'Auth Left': { en: 'Authoritarian Left', hi: 'सत्तावादी वामपंथ', desc: 'You favor economic equality and state intervention, combined with traditional social values.', descHi: 'आप पारंपरिक सामाजिक मूल्यों के साथ आर्थिक समानता और राज्य हस्तक्षेप के पक्षधर हैं।' },
      'Lib Right': { en: 'Libertarian Right', hi: 'स्वतंत्रतावादी दक्षिणपंथ', desc: 'You favor free markets and individual liberty with minimal government intervention.', descHi: 'आप न्यूनतम सरकारी हस्तक्षेप के साथ मुक्त बाजार और व्यक्तिगत स्वतंत्रता के पक्षधर हैं।' },
      'Lib Left': { en: 'Libertarian Left', hi: 'स्वतंत्रतावादी वामपंथ', desc: 'You favor social equality, individual freedom, and progressive economic policies.', descHi: 'आप सामाजिक समानता, व्यक्तिगत स्वतंत्रता और प्रगतिशील आर्थिक नीतियों के पक्षधर हैं।' },
    };

    const ql = quadrantLabels[quadrant];

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-md w-full border border-gray-100 dark:border-gray-800 shadow-xl">
          <div className="text-6xl mb-4 text-center">🧭</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
            {language === 'en' ? ql.en : ql.hi}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
            {language === 'en' ? ql.desc : ql.descHi}
          </p>

          {/* Mini compass */}
          <div className="relative w-48 h-48 mx-auto mb-6 border-2 border-gray-200 dark:border-gray-700 rounded-2xl bg-gray-50 dark:bg-gray-800">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 mt-1 font-semibold">Auth</div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 mb-1 font-semibold">Lib</div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 ml-1 font-semibold">Left</div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 mr-1 font-semibold">Right</div>
            <motion.div
              initial={{ x: '50%', y: '50%' }}
              animate={{
                x: `${50 + (econPct - 0) * 40}%`,
                y: `${50 + (socPct - 0) * 40}%`,
              }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute w-4 h-4 bg-accent-500 rounded-full shadow-lg -translate-x-1/2 -translate-y-1/2 border-2 border-white"
            />
          </div>

          <div className="flex justify-center gap-3">
            <button onClick={restart} className="px-5 py-2.5 rounded-xl bg-primary-600 text-white font-medium flex items-center gap-2 hover:bg-primary-700 transition-colors">
              <RotateCcw className="w-4 h-4" /> {language === 'en' ? 'Retake' : 'दोबारा लें'}
            </button>
            <Link href="/" className="px-5 py-2.5 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
              {language === 'en' ? 'Home' : 'होम'}
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? '🧭 Political Compass' : '🧭 राजनीतिक कम्पास'}
            </h1>
            <p className="text-sm text-gray-500">{currentQ + 1}/{questions.length}</p>
          </div>
        </div>

        <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mb-6 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
            animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              {language === 'en' ? q.question : q.questionHi}
            </h2>
            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  className="w-full text-left px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {language === 'en' ? opt.text : opt.textHi}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
