'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAppStore, useProgressStore } from '@/lib/store';
import { translations } from '@/lib/data';
import { ArrowLeft, Timer, Save, RotateCcw, CheckCircle2, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

const PROMPTS = [
  { en: 'Discuss Plato\'s theory of justice and its relevance in modern governance.', hi: 'प्लेटो के न्याय सिद्धांत और आधुनिक शासन में इसकी प्रासंगिकता पर चर्चा करें।', marks: 15, time: 20 },
  { en: 'Analyze the Basic Structure doctrine with reference to key Supreme Court judgments.', hi: 'प्रमुख सर्वोच्च न्यायालय के निर्णयों के संदर्भ में मूल ढांचा सिद्धांत का विश्लेषण करें।', marks: 15, time: 20 },
  { en: 'Compare the social contract theories of Hobbes, Locke, and Rousseau.', hi: 'हॉब्स, लॉक और रूसो के सामाजिक अनुबंध सिद्धांतों की तुलना करें।', marks: 15, time: 20 },
  { en: 'Critically examine India\'s foreign policy under the NDA government.', hi: 'NDA सरकार के तहत भारत की विदेश नीति का आलोचनात्मक परीक्षण करें।', marks: 15, time: 20 },
  { en: 'Discuss Ambedkar\'s views on social democracy and constitutionalism.', hi: 'सामाजिक लोकतंत्र और संविधानवाद पर आंबेडकर के विचारों पर चर्चा करें।', marks: 15, time: 20 },
];

export default function AnswerWritingPage() {
  const { language } = useAppStore();
  const { addStudyMinutes, updateStreak } = useProgressStore();
  const [selectedPrompt, setSelectedPrompt] = useState<number | null>(null);
  const [answer, setAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startWriting = (idx: number) => {
    setSelectedPrompt(idx);
    setAnswer('');
    setSubmitted(false);
    const totalSecs = PROMPTS[idx].time * 60;
    setTimeLeft(totalSecs);
    setIsRunning(true);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) { setIsRunning(false); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  const handleChange = (text: string) => {
    setAnswer(text);
    setWordCount(text.trim().split(/\s+/).filter(Boolean).length);
  };

  const submit = () => {
    setIsRunning(false);
    if (timerRef.current) clearInterval(timerRef.current);
    setSubmitted(true);
    addStudyMinutes(PROMPTS[selectedPrompt!].time);
    updateStreak();
  };

  const reset = () => {
    setSelectedPrompt(null);
    setAnswer('');
    setSubmitted(false);
    setIsRunning(false);
    setWordCount(0);
  };

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  if (selectedPrompt === null) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? '✍️ Answer Writing' : '✍️ उत्तर लेखन'}
            </h1>
          </div>

          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {language === 'en' ? 'Choose a question to practice structured answer writing. Timer starts when you begin.' : 'संरचित उत्तर लेखन का अभ्यास करने के लिए एक प्रश्न चुनें। शुरू होने पर टाइमर चालू हो जाता है।'}
          </p>

          <div className="space-y-3">
            {PROMPTS.map((p, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => startWriting(i)}
                className="w-full text-left p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-2 py-0.5 rounded-full">
                    {p.marks} marks • {p.time} min
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {language === 'en' ? p.en : p.hi}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const prompt = PROMPTS[selectedPrompt];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button onClick={reset} className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? 'Answer Writing' : 'उत्तर लेखन'}
            </h1>
          </div>
          {!submitted && (
            <div className="flex items-center gap-3">
              <span className={`text-lg font-mono font-bold ${timeLeft < 60 ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>
                {mins}:{secs.toString().padStart(2, '0')}
              </span>
              <span className="text-xs text-gray-400">{wordCount} words</span>
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 mb-4">
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            {language === 'en' ? prompt.en : prompt.hi}
          </p>
          <span className="text-xs text-gray-400">{prompt.marks} marks • {prompt.time} min</span>
        </div>

        {!submitted ? (
          <>
            <textarea
              value={answer}
              onChange={(e) => handleChange(e.target.value)}
              placeholder={language === 'en' ? 'Start writing your answer here...\n\n• Introduction\n• Body\n• Conclusion' : 'अपना उत्तर यहां लिखना शुरू करें...\n\n• परिचय\n• मुख्य भाग\n• निष्कर्ष'}
              className="w-full h-64 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 resize-none text-sm outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
              disabled={!isRunning}
            />
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={reset} className="px-4 py-2.5 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 flex items-center gap-2 hover:bg-gray-300 transition-colors">
                <RotateCcw className="w-4 h-4" /> {language === 'en' ? 'Reset' : 'रीसेट'}
              </button>
              <button
                onClick={submit}
                disabled={answer.trim().length < 50}
                className="px-5 py-2.5 rounded-xl bg-primary-600 text-white font-medium flex items-center gap-2 hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="w-4 h-4" /> {language === 'en' ? 'Submit' : 'जमा करें'}
              </button>
            </div>
          </>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
            <div className="text-center mb-4">
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {language === 'en' ? 'Answer Submitted!' : 'उत्तर जमा किया गया!'}
              </h3>
              <p className="text-sm text-gray-500">{wordCount} {language === 'en' ? 'words written' : 'शब्द लिखे गए'}</p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/20">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium text-amber-800 dark:text-amber-200">
                  {language === 'en' ? 'Self-Evaluation Tips' : 'स्व-मूल्यांकन सुझाव'}
                </span>
              </div>
              <ul className="text-xs text-amber-700 dark:text-amber-300 space-y-1">
                {(language === 'en'
                  ? ['Did you address all parts of the question?', 'Is your answer structured (Intro-Body-Conclusion)?', 'Did you cite relevant thinkers/theories?', 'Is your argument balanced with multiple perspectives?', 'Check word limit — aim for concise, precise answers.']
                  : ['क्या आपने प्रश्न के सभी भागों को संबोधित किया?', 'क्या आपका उत्तर संरचित (परिचय-मुख्य-निष्कर्ष) है?', 'क्या आपने प्रासंगिक विचारकों/सिद्धांतों का उल्लेख किया?', 'क्या आपका तर्क कई दृष्टिकोणों के साथ संतुलित है?', 'शब्द सीमा जांचें — संक्षिप्त, सटीक उत्तरों का लक्ष्य रखें।']
                ).map((tip, i) => (
                  <li key={i} className="flex gap-2">• {tip}</li>
                ))}
              </ul>
            </div>
            <button onClick={reset} className="mt-4 w-full py-2.5 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors">
              {language === 'en' ? 'Try Another Question' : 'दूसरा प्रश्न आज़माएं'}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
