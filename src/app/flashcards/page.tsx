'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore, useProgressStore } from '@/lib/store';
import { flashcards, translations } from '@/lib/data';
import { ArrowLeft, RotateCcw, ChevronLeft, ChevronRight, Shuffle, Layers } from 'lucide-react';
import Link from 'next/link';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

export default function FlashcardsPage() {
  const { language } = useAppStore();
  const { updateStreak, addStudyMinutes } = useProgressStore();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [deckId, setDeckId] = useState<string>('all');
  const [direction, setDirection] = useState(0);

  const decks = useMemo(() => {
    const unique = new Map<string, { id: string; name: string; nameHi: string; count: number }>();
    flashcards.forEach((fc) => {
      if (unique.has(fc.deckId)) {
        unique.get(fc.deckId)!.count++;
      } else {
        unique.set(fc.deckId, { id: fc.deckId, name: fc.deckName, nameHi: fc.deckNameHi, count: 1 });
      }
    });
    return Array.from(unique.values());
  }, []);

  const cards = useMemo(() => {
    if (deckId === 'all') return flashcards;
    return flashcards.filter((f) => f.deckId === deckId);
  }, [deckId]);

  const current = cards[currentIdx] || cards[0];

  const goNext = () => {
    setDirection(1);
    setIsFlipped(false);
    setCurrentIdx((prev) => (prev + 1) % cards.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setIsFlipped(false);
    setCurrentIdx((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const shuffleCards = () => {
    setCurrentIdx(Math.floor(Math.random() * cards.length));
    setIsFlipped(false);
  };

  if (cards.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">{t('noResults', language)}</p>
          <Link href="/" className="text-primary-500 mt-4 inline-block">{t('home', language)}</Link>
        </div>
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
              {language === 'en' ? '🃏 Flashcards' : '🃏 फ्लैशकार्ड'}
            </h1>
            <p className="text-sm text-gray-500">{currentIdx + 1} / {cards.length}</p>
          </div>
        </div>

        {/* Deck selector */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => { setDeckId('all'); setCurrentIdx(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${deckId === 'all' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
          >
            {language === 'en' ? 'All Decks' : 'सभी डेक'} ({flashcards.length})
          </button>
          {decks.map((d) => (
            <button
              key={d.id}
              onClick={() => { setDeckId(d.id); setCurrentIdx(0); setIsFlipped(false); }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${deckId === d.id ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
            >
              {language === 'en' ? d.name : d.nameHi} ({d.count})
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="relative" style={{ minHeight: '320px' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIdx + (isFlipped ? '-flipped' : '')}
              custom={direction}
              initial={{ x: direction * 100, opacity: 0, rotateY: isFlipped ? 180 : 0 }}
              animate={{ x: 0, opacity: 1, rotateY: isFlipped ? 180 : 0 }}
              exit={{ x: -direction * 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsFlipped(!isFlipped)}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg cursor-pointer select-none min-h-[300px] flex flex-col items-center justify-center text-center"
            >
              {!isFlipped ? (
                <>
                  <div className="text-xs text-primary-500 font-medium mb-3 uppercase tracking-wider">
                    {current.category}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    {language === 'en' ? current.front : current.frontHi}
                  </div>
                  <p className="text-xs text-gray-400 mt-6">
                    {language === 'en' ? 'Tap to reveal answer' : 'उत्तर देखने के लिए टैप करें'}
                  </p>
                </>
              ) : (
                <div className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {language === 'en' ? current.back : current.backHi}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button onClick={goPrev} className="p-3 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={shuffleCards} className="p-3 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm">
            <Shuffle className="w-5 h-5" />
          </button>
          <button onClick={goNext} className="p-3 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Know / Don't Know */}
        <div className="flex justify-center gap-3 mt-4">
          <button className="px-4 py-2 rounded-xl bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium hover:bg-red-200 transition-colors">
            {language === 'en' ? '😕 Still Learning' : '😕 अभी सीख रहा हूं'}
          </button>
          <button onClick={goNext} className="px-4 py-2 rounded-xl bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium hover:bg-green-200 transition-colors">
            {language === 'en' ? '✅ Got It!' : '✅ समझ आ गया!'}
          </button>
        </div>
      </div>
    </div>
  );
}
