'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore, useProgressStore } from '@/lib/store';
import { matchingPairs, translations } from '@/lib/data';
import { ArrowLeft, Trophy, RotateCcw, Shuffle } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MatchingPage() {
  const { language } = useAppStore();
  const { updateStreak, addStudyMinutes } = useProgressStore();
  const [gameId, setGameId] = useState<string>('game1');
  const [shuffledPairs, setShuffledPairs] = useState(matchingPairs.filter((p) => p.gameId === 'game1'));
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrongAttempt, setWrongAttempt] = useState<{ left: string; right: string } | null>(null);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const games = useMemo(() => {
    const unique = new Map<string, { id: string; name: string; nameHi: string }>();
    matchingPairs.forEach((p) => {
      if (!unique.has(p.gameId)) unique.set(p.gameId, { id: p.gameId, name: p.gameName, nameHi: p.gameNameHi });
    });
    return Array.from(unique.values());
  }, []);

  const leftItems = useMemo(() => shuffle(shuffledPairs.map((p) => ({ id: p.id, text: language === 'en' ? p.left : p.leftHi }))), [shuffledPairs, language]);
  const rightItems = useMemo(() => shuffle(shuffledPairs.map((p) => ({ id: p.id, text: language === 'en' ? p.right : p.rightHi }))), [shuffledPairs, language]);

  useEffect(() => {
    if (matched.size === shuffledPairs.length && shuffledPairs.length > 0) {
      setTimeout(() => {
        setGameComplete(true);
        updateStreak();
        addStudyMinutes(5);
      }, 500);
    }
  }, [matched, shuffledPairs]);

  const handleLeftClick = (id: string) => {
    if (matched.has(id)) return;
    setSelectedLeft(id);
    setWrongAttempt(null);
    if (selectedRight) {
      setAttempts((p) => p + 1);
      if (id === selectedRight) {
        setMatched((prev) => new Set([...prev, id]));
        setScore((p) => p + 1);
        toast.success(language === 'en' ? 'Match!' : 'मिलान!');
      } else {
        setWrongAttempt({ left: id, right: selectedRight });
        setTimeout(() => setWrongAttempt(null), 600);
      }
      setSelectedLeft(null);
      setSelectedRight(null);
    }
  };

  const handleRightClick = (id: string) => {
    if (matched.has(id)) return;
    setSelectedRight(id);
    setWrongAttempt(null);
    if (selectedLeft) {
      setAttempts((p) => p + 1);
      if (selectedLeft === id) {
        setMatched((prev) => new Set([...prev, id]));
        setScore((p) => p + 1);
        toast.success(language === 'en' ? 'Match!' : 'मिलान!');
      } else {
        setWrongAttempt({ left: selectedLeft, right: id });
        setTimeout(() => setWrongAttempt(null), 600);
      }
      setSelectedLeft(null);
      setSelectedRight(null);
    }
  };

  const switchGame = (id: string) => {
    setGameId(id);
    const pairs = matchingPairs.filter((p) => p.gameId === id);
    setShuffledPairs(pairs);
    setMatched(new Set());
    setScore(0);
    setAttempts(0);
    setGameComplete(false);
    setSelectedLeft(null);
    setSelectedRight(null);
  };

  const restart = () => {
    setShuffledPairs([...shuffledPairs]);
    setMatched(new Set());
    setScore(0);
    setAttempts(0);
    setGameComplete(false);
    setSelectedLeft(null);
    setSelectedRight(null);
  };

  if (gameComplete) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-sm w-full text-center border border-gray-100 dark:border-gray-800 shadow-xl">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {language === 'en' ? 'Game Complete!' : 'खेल पूर्ण!'}
          </h2>
          <p className="text-gray-500 mb-1">{score}/{shuffledPairs.length} {language === 'en' ? 'matches' : 'मिलान'}</p>
          <p className="text-sm text-gray-400 mb-6">{attempts} {language === 'en' ? 'attempts' : 'प्रयास'}</p>
          <div className="flex gap-2 justify-center">
            <button onClick={restart} className="px-5 py-2.5 rounded-xl bg-primary-600 text-white font-medium flex items-center gap-2 hover:bg-primary-700 transition-colors">
              <RotateCcw className="w-4 h-4" /> {language === 'en' ? 'Play Again' : 'फिर से खेलें'}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? '🔗 Matching Game' : '🔗 मिलान खेल'}
            </h1>
            <p className="text-sm text-gray-500">{score}/{shuffledPairs.length} • {attempts} {language === 'en' ? 'tries' : 'प्रयास'}</p>
          </div>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {games.map((g) => (
            <button
              key={g.id}
              onClick={() => switchGame(g.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${gameId === g.id ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
            >
              {language === 'en' ? g.name : g.nameHi}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {/* Left column */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 text-center">
              {language === 'en' ? 'Thinkers/Concepts' : 'विचारक/अवधारणाएं'}
            </h3>
            {leftItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleLeftClick(item.id)}
                animate={{
                  scale: matched.has(item.id) ? 0.95 : selectedLeft === item.id ? 1.03 : 1,
                  opacity: matched.has(item.id) ? 0.5 : 1,
                  backgroundColor: wrongAttempt?.left === item.id ? 'rgba(239,68,68,0.2)' : selectedLeft === item.id ? 'rgba(59,130,246,0.15)' : '',
                }}
                className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm ${
                  matched.has(item.id) ? 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20' :
                  selectedLeft === item.id ? 'border-primary-400 bg-primary-50 dark:bg-primary-900/20' :
                  'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                {item.text}
              </motion.button>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 text-center">
              {language === 'en' ? 'Works/Answers' : 'कृतियां/उत्तर'}
            </h3>
            {rightItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleRightClick(item.id)}
                animate={{
                  scale: matched.has(item.id) ? 0.95 : selectedRight === item.id ? 1.03 : 1,
                  opacity: matched.has(item.id) ? 0.5 : 1,
                  backgroundColor: wrongAttempt?.right === item.id ? 'rgba(239,68,68,0.2)' : selectedRight === item.id ? 'rgba(59,130,246,0.15)' : '',
                }}
                className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm ${
                  matched.has(item.id) ? 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20' :
                  selectedRight === item.id ? 'border-primary-400 bg-primary-50 dark:bg-primary-900/20' :
                  'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                {item.text}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
