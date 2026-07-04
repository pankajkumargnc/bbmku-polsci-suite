'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { translations } from '@/lib/data';
import { ArrowLeft, Users, Mic, MicOff, Play, RotateCcw, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

const BILLS = [
  {
    en: 'The Data Protection and Privacy Bill, 2025',
    hi: 'डेटा संरक्षण और गोपनीयता विधेयक, 2025',
    desc: { en: 'A bill to regulate the collection, processing, and storage of personal data of Indian citizens.', hi: 'भारतीय नागरिकों के व्यक्तिगत डेटा के संग्रह, प्रसंस्करण और भंडारण को विनियमित करने वाला विधेयक।' },
    for: { en: 'Ruling Party (Government)', hi: 'सत्ता पक्ष (सरकार)' },
    against: { en: 'Opposition Party', hi: 'विपक्षी दल' },
  },
  {
    en: 'The Uniform Civil Code Bill, 2025',
    hi: 'समान नागरिक संहिता विधेयक, 2025',
    desc: { en: 'A bill to establish a common set of personal laws for all citizens irrespective of religion.', hi: 'धर्म की परवाह किए बिना सभी नागरिकों के लिए व्यक्तिगत कानूनों का एक सामान्य सेट स्थापित करने वाला विधेयक।' },
    for: { en: 'Ruling Party (Government)', hi: 'सत्ता पक्ष (सरकार)' },
    against: { en: 'Opposition Party', hi: 'विपक्षी दल' },
  },
  {
    en: 'The Electoral Reforms Bill, 2025',
    hi: 'चुनाव सुधार विधेयक, 2025',
    desc: { en: 'A bill to introduce state funding of elections and strengthen the Election Commission.', hi: 'चुनावों के राज्य वित्तपोषण और चुनाव आयोग को मजबूत करने वाला विधेयक।' },
    for: { en: 'Ruling Party (Government)', hi: 'सत्ता पक्ष (सरकार)' },
    against: { en: 'Opposition Party', hi: 'विपक्षी दल' },
  },
];

const ROLES = [
  { en: 'Prime Minister', hi: 'प्रधानमंत्री', side: 'for' },
  { en: 'Leader of Opposition', hi: 'विपक्ष के नेता', side: 'against' },
  { en: 'Speaker', hi: 'अध्यक्ष', side: 'neutral' },
  { en: 'Finance Minister', hi: 'वित्त मंत्री', side: 'for' },
  { en: 'Opposition MP', hi: 'विपक्षी सांसद', side: 'against' },
  { en: 'Ruling Party MP', hi: 'सत्ता पक्ष सांसद', side: 'for' },
];

export default function MockParliamentPage() {
  const { language } = useAppStore();
  const [step, setStep] = useState<'select' | 'roles' | 'debate' | 'done'>('select');
  const [selectedBill, setSelectedBill] = useState(0);
  const [selectedRole, setSelectedRole] = useState<number | null>(null);
  const [speeches, setSpeeches] = useState<{ role: string; text: string; side: string }[]>([]);
  const [currentSpeech, setCurrentSpeech] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const bill = BILLS[selectedBill];
  const role = selectedRole !== null ? ROLES[selectedRole] : null;

  const addSpeech = () => {
    if (!currentSpeech.trim() || !role) return;
    setSpeeches([...speeches, { role: language === 'en' ? role.en : role.hi, text: currentSpeech, side: role.side }]);
    setCurrentSpeech('');
  };

  const reset = () => {
    setStep('select');
    setSelectedRole(null);
    setSpeeches([]);
    setCurrentSpeech('');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? '🏛️ Mock Parliament' : '🏛️ मॉक संसद'}
            </h1>
            <p className="text-sm text-gray-500">
              {language === 'en' ? 'Simulate parliamentary debates' : 'संसदीय बहस का अनुकरण करें'}
            </p>
          </div>
        </div>

        {step === 'select' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {language === 'en' ? '📋 Choose a Bill to Debate' : '📋 बहस के लिए एक विधेयक चुनें'}
            </h2>
            {BILLS.map((b, i) => (
              <button
                key={i}
                onClick={() => { setSelectedBill(i); setStep('roles'); }}
                className="w-full text-left p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary-300 transition-all"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {language === 'en' ? b.en : b.hi}
                </h3>
                <p className="text-xs text-gray-500">{language === 'en' ? b.desc.en : b.desc.hi}</p>
              </button>
            ))}
          </motion.div>
        )}

        {step === 'roles' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                {language === 'en' ? bill.en : bill.hi}
              </h3>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {language === 'en' ? '🎭 Choose Your Role' : '🎭 अपनी भूमिका चुनें'}
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {ROLES.map((r, i) => (
                <button
                  key={i}
                  onClick={() => { setSelectedRole(i); setStep('debate'); }}
                  className={`p-4 rounded-xl border text-sm font-medium transition-all ${
                    r.side === 'for'
                      ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 text-green-800 dark:text-green-200'
                      : r.side === 'against'
                      ? 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 text-red-800 dark:text-red-200'
                      : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <div className="text-lg mb-1">{r.side === 'for' ? '🏛️' : r.side === 'against' ? '🗣️' : '⚖️'}</div>
                  {language === 'en' ? r.en : r.hi}
                </button>
              ))}
            </div>
            <button onClick={() => setStep('select')} className="text-sm text-gray-500 hover:underline">
              ← {language === 'en' ? 'Choose different bill' : 'अलग विधेयक चुनें'}
            </button>
          </motion.div>
        )}

        {step === 'debate' && role && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {language === 'en' ? role.en : role.hi}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  role.side === 'for' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                  role.side === 'against' ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {role.side === 'for' ? (language === 'en' ? 'For' : 'पक्ष') :
                   role.side === 'against' ? (language === 'en' ? 'Against' : 'विपक्ष') :
                   (language === 'en' ? 'Neutral' : 'तटस्थ')}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'en' ? bill.desc.en : bill.desc.hi}
              </p>
            </div>

            {/* Debate transcript */}
            <div className="space-y-2 mb-4 max-h-64 overflow-y-auto">
              <AnimatePresence>
                {speeches.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`p-3 rounded-xl text-sm ${
                      s.side === 'for' ? 'bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800/20 ml-0 mr-8' :
                      s.side === 'against' ? 'bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-800/20 ml-8 mr-0' :
                      'bg-gray-50 dark:bg-gray-800 mx-4'
                    }`}
                  >
                    <span className="text-xs font-bold text-gray-500">{s.role}: </span>
                    <span className="text-gray-700 dark:text-gray-300">{s.text}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={currentSpeech}
                onChange={(e) => setCurrentSpeech(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addSpeech()}
                placeholder={language === 'en' ? 'Type your speech... (press Enter to speak)' : 'अपना भाषण टाइप करें... (बोलने के लिए Enter दबाएं)'}
                className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button onClick={addSpeech} className="px-4 py-3 rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>

            <div className="flex justify-center gap-3 mt-6">
              <button onClick={reset} className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-600 text-sm font-medium hover:bg-gray-300 transition-colors flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5" /> {language === 'en' ? 'Reset' : 'रीसेट'}
              </button>
              <button onClick={() => setStep('done')} className="px-4 py-2 rounded-xl bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors">
                {language === 'en' ? 'End Session' : 'सत्र समाप्त करें'}
              </button>
            </div>
          </motion.div>
        )}

        {step === 'done' && (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
            <div className="text-6xl mb-4">🏛️</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {language === 'en' ? 'Session Adjourned!' : 'सत्र स्थगित!'}
            </h2>
            <p className="text-gray-500 mb-2">{speeches.length} {language === 'en' ? 'speeches delivered' : 'भाषण दिए गए'}</p>
            <p className="text-sm text-gray-400 mb-6">
              {language === 'en' ? 'Great job participating in the democratic process!' : 'लोकतांत्रिक प्रक्रिया में भाग लेने के लिए बहुत अच्छा!'}
            </p>
            <button onClick={reset} className="px-6 py-3 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors inline-flex items-center gap-2">
              <RotateCcw className="w-4 h-4" /> {language === 'en' ? 'New Debate' : 'नई बहस'}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
