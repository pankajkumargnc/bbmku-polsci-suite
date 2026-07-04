'use client';

import { useState, useMemo } from 'react';
import { motion, Reorder } from 'framer-motion';
import { useAppStore, useProgressStore } from '@/lib/store';
import { chronologyEvents, translations } from '@/lib/data';
import { ArrowLeft, Trophy, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

export default function ChronologyPage() {
  const { language } = useAppStore();
  const { updateStreak, addStudyMinutes } = useProgressStore();
  const [gameId, setGameId] = useState('chrono1');
  const [items, setItems] = useState(() => {
    const events = chronologyEvents.filter((e) => e.gameId === 'chrono1');
    return [...events].sort(() => Math.random() - 0.5).map((e) => e.id);
  });
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const games = useMemo(() => {
    const unique = new Map<string, { id: string; name: string; nameHi: string }>();
    chronologyEvents.forEach((e) => {
      if (!unique.has(e.gameId)) unique.set(e.gameId, { id: e.gameId, name: e.gameName, nameHi: e.gameNameHi });
    });
    return Array.from(unique.values());
  }, []);

  const events = useMemo(() => chronologyEvents.filter((e) => e.gameId === gameId), [gameId]);

  const getEvent = (id: string) => events.find((e) => e.id === id)!;

  const checkOrder = () => {
    const correct = [...events].sort((a, b) => a.year - b.year).map((e) => e.id);
    let correctCount = 0;
    items.forEach((id, i) => { if (id === correct[i]) correctCount++; });
    setScore(correctCount);
    setSubmitted(true);
    updateStreak();
    addStudyMinutes(3);
    if (correctCount === events.length) {
      toast.success(language === 'en' ? 'Perfect! All in correct order!' : 'बिल्कुल सही! सब सही क्रम में!');
    }
  };

  const switchGame = (id: string) => {
    setGameId(id);
    const evts = chronologyEvents.filter((e) => e.gameId === id);
    setItems([...evts].sort(() => Math.random() - 0.5).map((e) => e.id));
    setSubmitted(false);
    setScore(0);
  };

  const restart = () => {
    setItems([...events].sort(() => Math.random() - 0.5).map((e) => e.id));
    setSubmitted(false);
    setScore(0);
  };

  const correctOrder = [...events].sort((a, b) => a.year - b.year).map((e) => e.id);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? '📅 Chronology Game' : '📅 कालक्रम खेल'}
            </h1>
            <p className="text-sm text-gray-500">
              {language === 'en' ? 'Arrange events in chronological order' : 'घटनाओं को कालानुक्रमिक क्रम में व्यवस्थित करें'}
            </p>
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

        <div className="space-y-2 mb-6">
          {items.map((id, idx) => {
            const evt = getEvent(id);
            const isCorrect = submitted && id === correctOrder[idx];
            return (
              <motion.div
                key={id}
                layout
                className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
                  submitted
                    ? isCorrect
                      ? 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20'
                      : 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'
                }`}
                whileHover={{ scale: submitted ? 1 : 1.01 }}
                drag={submitted ? false : 'y'}
                dragConstraints={{ top: 0, bottom: 0 }}
                onDragEnd={(_, info) => {
                  if (submitted) return;
                  const offset = Math.round(info.offset.y / 60);
                  const newIdx = Math.max(0, Math.min(items.length - 1, idx + offset));
                  if (newIdx !== idx) {
                    const newItems = [...items];
                    [newItems[idx], newItems[newIdx]] = [newItems[newIdx], newItems[idx]];
                    setItems(newItems);
                  }
                }}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-bold text-gray-500 flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-gray-900 dark:text-white">
                    {language === 'en' ? evt.event : evt.eventHi}
                  </div>
                  {submitted && (
                    <div className="text-xs text-gray-500 mt-0.5">
                      {evt.year} — {language === 'en' ? evt.description : evt.descriptionHi}
                    </div>
                  )}
                </div>
                <div className="flex-shrink-0 text-right">
                  {!submitted && <span className="text-xs text-gray-400">{evt.year}</span>}
                  {submitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                  {submitted && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
                </div>
                {!submitted && (
                  <div className="text-gray-300 dark:text-gray-600 cursor-grab text-lg">⋮⋮</div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center gap-3">
          {!submitted ? (
            <button
              onClick={checkOrder}
              className="px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors flex items-center gap-2 shadow-lg"
            >
              <Trophy className="w-4 h-4" /> {language === 'en' ? 'Check Order' : 'क्रम जांचें'}
            </button>
          ) : (
            <>
              <div className="text-center mr-4">
                <div className="text-2xl font-bold text-primary-600">{score}/{events.length}</div>
                <div className="text-xs text-gray-500">{language === 'en' ? 'correct' : 'सही'}</div>
              </div>
              <button onClick={restart} className="px-5 py-3 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                <RotateCcw className="w-4 h-4" /> {language === 'en' ? 'Try Again' : 'फिर से प्रयास'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
