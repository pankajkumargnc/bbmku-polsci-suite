'use client';

import { motion } from 'framer-motion';
import { useAppStore, useProgressStore } from '@/lib/store';
import { translations, semesters, careerPaths } from '@/lib/data';
import Link from 'next/link';
import {
  BookOpen, FileText, Gamepad2, Brain, Timer, GitGraph, Compass,
  Library, Newspaper, PenTool, ScrollText, GraduationCap, Lightbulb,
  ArrowRight, Trophy, Target, Zap, Sparkles, Flame
} from 'lucide-react';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const { language, theme } = useAppStore();
  const { streak, totalStudyMinutes, completedTopics, quizResults } = useProgressStore();

  const features = [
    { href: '/syllabus', icon: BookOpen, label: t('syllabus', language), desc: language === 'en' ? '4 Semesters, detailed units, readings' : '4 सेमेस्टर, विस्तृत इकाइयां, रीडिंग', color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50 dark:bg-blue-950' },
    { href: '/pyq', icon: FileText, label: t('pyq', language), desc: language === 'en' ? `6,314+ UGC NET questions` : '6,314+ UGC NET प्रश्न', color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50 dark:bg-emerald-950' },
    { href: '/quiz', icon: Gamepad2, label: t('quiz', language), desc: language === 'en' ? 'MCQ quizzes with explanations' : 'स्पष्टीकरण के साथ MCQ प्रश्नोत्तरी', color: 'from-purple-500 to-pink-500', bg: 'bg-purple-50 dark:bg-purple-950' },
    { href: '/flashcards', icon: Brain, label: t('flashcards', language), desc: language === 'en' ? 'Swipe to learn key concepts' : 'प्रमुख अवधारणाएं सीखें', color: 'from-orange-500 to-red-500', bg: 'bg-orange-50 dark:bg-orange-950' },
    { href: '/matching', icon: Zap, label: t('matching', language), desc: language === 'en' ? 'Match thinkers to their works' : 'विचारकों को उनकी कृतियों से मिलाएं', color: 'from-rose-500 to-pink-500', bg: 'bg-rose-50 dark:bg-rose-950' },
    { href: '/chronology', icon: Timer, label: t('chronology', language), desc: language === 'en' ? 'Arrange events in order' : 'घटनाओं को क्रम में लगाएं', color: 'from-amber-500 to-yellow-500', bg: 'bg-amber-50 dark:bg-amber-950' },
    { href: '/pomodoro', icon: Target, label: t('pomodoro', language), desc: language === 'en' ? 'Focused study timer' : 'केंद्रित अध्ययन टाइमर', color: 'from-red-500 to-orange-500', bg: 'bg-red-50 dark:bg-red-950' },
    { href: '/knowledge-graph', icon: GitGraph, label: t('knowledgeGraph', language), desc: language === 'en' ? 'Visual concept connections' : 'दृश्य अवधारणा कनेक्शन', color: 'from-indigo-500 to-violet-500', bg: 'bg-indigo-50 dark:bg-indigo-950' },
    { href: '/political-compass', icon: Compass, label: t('politicalCompass', language), desc: language === 'en' ? 'Discover your ideology' : 'अपनी विचारधारा खोजें', color: 'from-fuchsia-500 to-purple-500', bg: 'bg-fuchsia-50 dark:bg-fuchsia-950' },
    { href: '/mock-parliament', icon: GraduationCap, label: t('mockParliament', language), desc: language === 'en' ? 'Simulate parliamentary debate' : 'संसदीय बहस का अनुकरण', color: 'from-sky-500 to-blue-500', bg: 'bg-sky-50 dark:bg-sky-950' },
    { href: '/current-affairs', icon: Newspaper, label: t('currentAffairs', language), desc: language === 'en' ? 'Stay updated, exam-relevant' : 'अपडेट रहें, परीक्षा-प्रासंगिक', color: 'from-green-500 to-emerald-500', bg: 'bg-green-50 dark:bg-green-950' },
    { href: '/constitution', icon: ScrollText, label: t('constitutionExplorer', language), desc: language === 'en' ? 'Articles, amendments, cases' : 'अनुच्छेद, संशोधन, मामले', color: 'from-stone-500 to-neutral-500', bg: 'bg-stone-50 dark:bg-stone-900' },
    { href: '/elibrary', icon: Library, label: t('eLibrary', language), desc: language === 'en' ? 'Curated readings & resources' : 'क्यूरेटेड रीडिंग और संसाधन', color: 'from-cyan-500 to-blue-500', bg: 'bg-cyan-50 dark:bg-cyan-950' },
    { href: '/answer-writing', icon: PenTool, label: t('answerWriting', language), desc: language === 'en' ? 'Practice structured answers' : 'संरचित उत्तरों का अभ्यास', color: 'from-lime-500 to-green-500', bg: 'bg-lime-50 dark:bg-lime-950' },
    { href: '/career', icon: Lightbulb, label: t('careerGuidance', language), desc: language === 'en' ? 'Paths after M.A. Pol Science' : 'M.A. राजनीति विज्ञान के बाद रास्ते', color: 'from-yellow-500 to-amber-500', bg: 'bg-yellow-50 dark:bg-yellow-950' },
  ];

  const latestQuiz = quizResults[quizResults.length - 1];
  const avgScore = quizResults.length > 0
    ? Math.round(quizResults.reduce((a, b) => a + (b.correct / b.total) * 100, 0) / quizResults.length)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-sm mb-6"
            >
              <Sparkles className="w-4 h-4" />
              {language === 'en' ? 'Your complete Political Science study companion' : 'आपका संपूर्ण राजनीति विज्ञान अध्ययन साथी'}
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              {t('appName', language)}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              {language === 'en'
                ? 'Master Political Science with curated syllabus, 6,314+ PYQs, gamified quizzes, flashcards, and more — all in one place.'
                : 'क्यूरेटेड पाठ्यक्रम, 6,314+ PYQ, गेमिफाइड क्विज़, फ्लैशकार्ड और बहुत कुछ — सब एक जगह पर राजनीति विज्ञान में महारत हासिल करें।'}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/syllabus"
                className="px-6 py-3 rounded-xl bg-white text-primary-700 font-semibold hover:bg-white/90 transition-colors shadow-lg flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                {language === 'en' ? 'Start Studying' : 'पढ़ाई शुरू करें'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/quiz"
                className="px-6 py-3 rounded-xl bg-white/15 text-white font-semibold hover:bg-white/25 transition-colors border border-white/20 flex items-center gap-2"
              >
                <Gamepad2 className="w-5 h-5" />
                {language === 'en' ? 'Take a Quiz' : 'प्रश्नोत्तरी लें'}
              </Link>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10 max-w-3xl mx-auto"
          >
            {[
              { icon: Flame, val: streak, label: language === 'en' ? 'Day Streak' : 'दिन स्ट्रीक', color: 'text-orange-400' },
              { icon: Target, val: `${Math.floor(totalStudyMinutes / 60)}h`, label: language === 'en' ? 'Total Study' : 'कुल अध्ययन', color: 'text-blue-400' },
              { icon: Trophy, val: `${avgScore}%`, label: language === 'en' ? 'Avg. Score' : 'औसत स्कोर', color: 'text-green-400' },
              { icon: Zap, val: completedTopics.length, label: language === 'en' ? 'Topics Done' : 'विषय पूर्ण', color: 'text-purple-400' },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10">
                <s.icon className={`w-5 h-5 ${s.color} mx-auto mb-1`} />
                <div className="text-2xl font-bold text-white">{s.val}</div>
                <div className="text-xs text-white/70">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 📖 Unified Semester Notes Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 md:pt-16 pb-4">
        <Link
          href="/syllabus"
          className="block p-5 md:p-6 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white hover:from-blue-700 hover:via-indigo-700 hover:to-purple-800 transition-all shadow-xl hover:shadow-2xl group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10" />
          <div className="flex items-center gap-4 relative">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
              📘
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold bg-white/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">Sem I, II, III & IV</span>
                <span className="text-xs text-white/70">All 16 Papers Ready!</span>
              </div>
              <h2 className="text-lg md:text-xl font-bold">
                {language === 'en' ? 'Semester I, II, III & IV — Detailed Bilingual Notes Ready!' : 'सेमेस्टर I, II, III और IV — विस्तृत द्विभाषी नोट्स तैयार!'}
              </h2>
              <p className="text-sm text-white/80 mt-1">
                {language === 'en' ? 'PSC-F-101 to PSC-D-416 fully complete! 5-part exam structure, MCQs, UGC NET Prep.' : 'PSC-F-101 से PSC-D-416 तक पूरी तरह से पूर्ण! 5-भाग संरचना, MCQ, UGC NET तैयारी।'}
              </p>
            </div>
            <div className="flex flex-col gap-1.5 flex-shrink-0">
              <span className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-indigo-700 font-semibold text-xs group-hover:bg-white/95 transition-colors">
                Explore Syllabus <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4"
        >
          {features.map((feat, i) => (
            <motion.div key={feat.href} variants={item}>
              <Link href={feat.href} className="block group">
                <div className="card-hover bg-white dark:bg-gray-900 rounded-2xl p-4 md:p-5 border border-gray-100 dark:border-gray-800 h-full">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feat.color} flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                    <feat.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">{feat.label}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{feat.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Quick Links — Semester Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 md:pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
            {language === 'en' ? '📚 Semester-wise Syllabus' : '📚 सेमेस्टर-वार पाठ्यक्रम'}
          </h2>
          <Link href="/syllabus" className="text-sm text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center gap-1">
            {language === 'en' ? 'View All' : 'सभी देखें'} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {semesters.map((sem, i) => {
            const isSem1 = sem.id === 'sem1';
            const isSem2 = sem.id === 'sem2';
            const isSem3 = sem.id === 'sem3';
            const isSem4 = sem.id === 'sem4';
            const isReady = isSem1 || isSem2 || isSem3 || isSem4;
            return (
            <motion.div
              key={sem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {isReady && (
                <span className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg animate-pulse-soft">
                  {sem.topics.length} {language === 'en' ? 'Papers Ready' : 'पेपर तैयार'}
                </span>
              )}
              <Link href={`/syllabus?sem=${sem.id}#${sem.id}`} className="card-hover block bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 h-full">
                <div className="text-xs font-mono text-primary-600 dark:text-primary-400 mb-2">{sem.code}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-tight mb-1">
                  {language === 'en' ? sem.name : sem.nameHi}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {sem.topics.length} {language === 'en' ? 'papers' : 'पेपर'}
                </p>
                {isReady && (
                  <div className="mt-2 space-y-0.5">
                    <span className="inline-block text-[10px] text-amber-600 dark:text-amber-400 font-medium leading-tight">
                      📖 {isSem1 ? 'PSC-F-101, C-102, C-103, C-104' : isSem2 ? 'PSC-S-205, C-206, C-207, C-208' : isSem3 ? 'PSC-A-309, C-310, C-311, C-312' : 'PSC-E-413, E-414, C-415, D-416'} →
                    </span>
                  </div>
                )}
              </Link>
            </motion.div>
          )})}
        </div>
      </section>

      {/* Career Paths */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
            {language === 'en' ? '💼 Career Paths after M.A.' : '💼 M.A. के बाद करियर पथ'}
          </h2>
          <Link href="/career" className="text-sm text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center gap-1">
            {language === 'en' ? 'Explore All' : 'सभी देखें'} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {careerPaths.slice(0, 3).map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-hover bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800"
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {language === 'en' ? c.title : c.titleHi}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-2">
                {language === 'en' ? c.description : c.descriptionHi}
              </p>
              <div className="text-xs font-medium text-primary-600 dark:text-primary-400">
                {language === 'en' ? c.salary : c.salaryHi}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
