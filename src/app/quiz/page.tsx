'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore, useProgressStore } from '@/lib/store';
import { mcqBank, translations } from '@/lib/data';
import { ArrowLeft, CheckCircle2, XCircle, Timer, Trophy, RotateCcw, ChevronRight, Bookmark } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

export default function QuizPage() {
  const { language } = useAppStore();
  const { addQuizResult, toggleBookmark, isBookmarked, updateStreak, addStudyMinutes } = useProgressStore();
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<{ idx: number; selected: number; correct: boolean }[]>([]);
  const [quizDone, setQuizDone] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 min

  const questions = useMemo(() => {
    const shuffled = [...mcqBank].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  }, []);

  const current = questions[currentIdx];

  const handleSelect = (optIdx: number) => {
    if (selected !== null) return;
    setSelected(optIdx);
    const correct = optIdx === current.correct;
    setAnswers((prev) => [...prev, { idx: currentIdx, selected: optIdx, correct }]);

    if (correct) {
      toast.success(language === 'en' ? 'Correct!' : 'सही!');
    } else {
      toast.error(language === 'en' ? `Correct answer: ${current.options[current.correct]}` : `सही उत्तर: ${current.optionsHi[current.correct]}`);
    }
  };

  const next = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setQuizDone(true);
      const correct = answers.filter((a) => a.correct).length;
      addQuizResult({
        id: Date.now().toString(),
        date: new Date().toISOString(),
        subject: 'Mixed',
        total: questions.length,
        correct,
        timeSpent: 600 - timeLeft,
      });
      updateStreak();
      addStudyMinutes(Math.round((600 - timeLeft) / 60));
    }
  };

  const restart = () => {
    window.location.reload();
  };

  if (quizDone) {
    const correct = answers.filter((a) => a.correct).length;
    const pct = Math.round((correct / questions.length) * 100);
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-md w-full text-center border border-gray-100 dark:border-gray-800 shadow-xl">
          <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ delay: 0.3 }} className="text-6xl mb-4">
            {pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '📚'}
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {language === 'en' ? 'Quiz Complete!' : 'प्रश्नोत्तरी पूर्ण!'}
          </h2>
          <div className="text-5xl font-black text-primary-600 my-4">{pct}%</div>
          <p className="text-gray-500 dark:text-gray-400 mb-2">
            {correct}/{questions.length} {language === 'en' ? 'correct' : 'सही'}
          </p>
          <div className="flex gap-2 justify-center mt-6">
            <button onClick={restart} className="px-5 py-2.5 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors flex items-center gap-2">
              <RotateCcw className="w-4 h-4" /> {language === 'en' ? 'Try Again' : 'फिर से प्रयास'}
            </button>
            <Link href="/" className="px-5 py-2.5 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
              {language === 'en' ? 'Home' : 'होम'}
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? '🎮 MCQ Quiz' : '🎮 MCQ प्रश्नोत्तरी'}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{currentIdx + 1}/{questions.length}</span>
              <span className="flex items-center gap-1"><Timer className="w-3.5 h-3.5" />{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mb-6 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
            animate={{ width: `${((currentIdx + (selected !== null ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm"
          >
            {/* Difficulty badge */}
            <div className="flex items-center justify-between mb-4">
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                current.difficulty === 'easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                current.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
              }`}>
                {current.difficulty.toUpperCase()}
              </span>
              <button
                onClick={() => {
                  toggleBookmark({
                    id: Date.now().toString(),
                    type: 'mcq',
                    itemId: current.id,
                    title: language === 'en' ? current.question.slice(0, 40) : current.questionHi.slice(0, 40),
                    date: new Date().toISOString(),
                  });
                  toast.success(isBookmarked(current.id) ? 'Bookmark removed' : 'Bookmarked!');
                }}
                className={`p-1.5 rounded-lg transition-colors ${isBookmarked(current.id) ? 'text-accent-500 bg-accent-50 dark:bg-accent-900/20' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Bookmark className="w-4 h-4" fill={isBookmarked(current.id) ? 'currentColor' : 'none'} />
              </button>
            </div>

            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              {language === 'en' ? current.question : current.questionHi}
            </h2>

            <div className="space-y-2.5">
              {(language === 'en' ? current.options : current.optionsHi).map((opt, i) => {
                let btnClass = 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20';
                if (selected !== null) {
                  if (i === current.correct) btnClass = 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400';
                  else if (i === selected) btnClass = 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400';
                  else btnClass = 'opacity-50';
                }
                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={selected !== null}
                    className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center gap-3 ${btnClass}`}
                  >
                    <span className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-sm">{opt}</span>
                    {selected !== null && i === current.correct && <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto" />}
                    {selected !== null && i === selected && i !== current.correct && <XCircle className="w-4 h-4 text-red-500 ml-auto" />}
                  </button>
                );
              })}
            </div>

            {selected !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50"
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'en' ? current.explanation : current.explanationHi}
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {selected !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mt-6">
            <button
              onClick={next}
              className="px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors flex items-center gap-2 shadow-lg"
            >
              {currentIdx + 1 < questions.length ? (
                <>{language === 'en' ? 'Next Question' : 'अगला प्रश्न'} <ChevronRight className="w-4 h-4" /></>
              ) : (
                <>{language === 'en' ? 'View Results' : 'परिणाम देखें'} <Trophy className="w-4 h-4" /></>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
