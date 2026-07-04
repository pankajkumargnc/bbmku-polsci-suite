'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useAppStore, useProgressStore } from '@/lib/store';
import { translations } from '@/lib/data';
import { ArrowLeft, Play, Pause, RotateCcw, Coffee, Brain } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

const MODES = [
  { key: 'focus', label: 'Focus', labelHi: 'फोकस', minutes: 25, icon: Brain, color: 'from-primary-500 to-primary-700' },
  { key: 'shortBreak', label: 'Short Break', labelHi: 'छोटा ब्रेक', minutes: 5, icon: Coffee, color: 'from-green-500 to-emerald-600' },
  { key: 'longBreak', label: 'Long Break', labelHi: 'लंबा ब्रेक', minutes: 15, icon: Coffee, color: 'from-orange-500 to-amber-600' },
];

export default function PomodoroPage() {
  const { language } = useAppStore();
  const { addStudyMinutes, updateStreak } = useProgressStore();
  const [mode, setMode] = useState('focus');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [sessions, setSessions] = useState(0);

  const currentMode = MODES.find((m) => m.key === mode)!;

  useEffect(() => {
    setTimeLeft(currentMode.minutes * 60);
    setIsRunning(false);
  }, [mode]);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          if (mode === 'focus') {
            setSessions((s) => s + 1);
            addStudyMinutes(currentMode.minutes);
            updateStreak();
            toast.success(language === 'en' ? 'Focus session complete! Take a break 🎉' : 'फोकस सेशन पूरा! ब्रेक लें 🎉');
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, mode]);

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => { setIsRunning(false); setTimeLeft(currentMode.minutes * 60); };

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const progress = 1 - timeLeft / (currentMode.minutes * 60);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/" className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {language === 'en' ? '⏱️ Pomodoro Timer' : '⏱️ पोमोडोरो टाइमर'}
          </h1>
        </div>

        {/* Mode Selector */}
        <div className="flex bg-gray-200 dark:bg-gray-800 rounded-2xl p-1 mb-8">
          {MODES.map((m) => (
            <button
              key={m.key}
              onClick={() => setMode(m.key)}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${
                mode === m.key
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700'
              }`}
            >
              <m.icon className="w-3.5 h-3.5" />
              {language === 'en' ? m.label : m.labelHi}
            </button>
          ))}
        </div>

        {/* Timer Circle */}
        <div className="flex justify-center mb-8">
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3" className="text-gray-200 dark:text-gray-700" />
              <motion.circle
                cx="50" cy="50" r="45" fill="none" strokeWidth="3"
                strokeLinecap="round"
                className={`text-transparent`}
                style={{
                  stroke: mode === 'focus' ? '#3b82f6' : mode === 'shortBreak' ? '#22c55e' : '#f97316',
                  strokeDasharray: 2 * Math.PI * 45,
                  strokeDashoffset: 2 * Math.PI * 45 * (1 - progress),
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
                key={`${mins}-${secs}`}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="text-6xl font-black text-gray-900 dark:text-white tabular-nums tracking-tight"
              >
                {mins.toString().padStart(2, '0')}:{secs.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-sm text-gray-500 mt-2">
                {language === 'en' ? 'sessions: ' : 'सेशन: '}{sessions}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4">
          <button
            onClick={toggleTimer}
            className={`px-8 py-4 rounded-2xl font-semibold text-white shadow-lg transition-all hover:scale-105 flex items-center gap-2 ${
              isRunning ? 'bg-amber-500 hover:bg-amber-600' : `bg-gradient-to-r ${currentMode.color}`
            }`}
          >
            {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            {isRunning ? (language === 'en' ? 'Pause' : 'रोकें') : (language === 'en' ? 'Start' : 'शुरू करें')}
          </button>
          <button
            onClick={resetTimer}
            className="px-4 py-4 rounded-2xl bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
