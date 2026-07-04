'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore, useProgressStore } from '@/lib/store';
import { translations } from '@/lib/data';
import { papers, semesterMeta, type PaperMeta } from '@/lib/papers';
import { ChevronDown, BookOpen, ArrowLeft, FileText, GraduationCap, Clock, Award, Users, ExternalLink, Sparkles, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

const typeColors: Record<string, string> = {
  F: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400 border-sky-200 dark:border-sky-800',
  C: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400 border-violet-200 dark:border-violet-800',
  S: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800',
  A: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
  E: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 border-rose-200 dark:border-rose-800',
  D: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700',
};

const typeIcons: Record<string, string> = {
  F: '🏛️', C: '📖', S: '🛠️', A: '🌍', E: '🎯', D: '📝',
};

function SyllabusContent() {
  const { language } = useAppStore();
  const { completedTopics } = useProgressStore();
  const [expandedSem, setExpandedSem] = useState<string | null>('sem1');
  const searchParams = useSearchParams();
  const semParam = searchParams.get('sem');

  useEffect(() => {
    let targetId = semParam;
    
    // Fallback to hash if query param is not present
    if (!targetId && window.location.hash) {
      targetId = window.location.hash.replace('#', '');
    }

    if (targetId && ['sem1', 'sem2', 'sem3', 'sem4'].includes(targetId)) {
      setExpandedSem(targetId);
      // Wait for UI to render the expanded accordion before scrolling
      setTimeout(() => {
        const el = document.getElementById(targetId as string);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    }
  }, [semParam]);

  const getPapersForSem = (semId: string) => papers.filter(p => p.semId === semId);
  const totalTopics = papers.reduce((a, p) => a + p.topicsCount, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Link href="/" className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? '📚 Semester-wise Syllabus' : '📚 सेमेस्टर-वार पाठ्यक्रम'}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {language === 'en' ? `BBMKU M.A. Political Science — 16 Papers across 4 Semesters` : `BBMKU M.A. राजनीति विज्ञान — 4 सेमेस्टर में 16 पेपर`}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {language === 'en' ? 'Overall Progress' : 'कुल प्रगति'}
            </span>
            <span className="text-sm font-bold text-primary-600">
              {completedTopics.length} / {totalTopics} {language === 'en' ? 'topics' : 'विषय'}
            </span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(100, Math.round((completedTopics.length / totalTopics) * 100))}%` }}
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
            />
          </div>
        </div>

        {/* Semesters */}
        <div className="space-y-5">
          {semesterMeta.map((semMeta) => {
            const semPapers = getPapersForSem(semMeta.id);
            const isExpanded = expandedSem === semMeta.id;
            const hasNotes = semPapers.some(p => p.detailedSlug);
            const notesCount = semPapers.filter(p => p.detailedSlug).length;
            const totalPapers = semPapers.length;

            return (
              <motion.div
                key={semMeta.id}
                id={semMeta.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm"
              >
                {/* Semester Header */}
                <button
                  onClick={() => setExpandedSem(isExpanded ? null : semMeta.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${semMeta.color} flex items-center justify-center text-white text-xl shadow-md`}>
                      {semMeta.icon}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                        {language === 'en' ? semMeta.name : semMeta.nameHi}
                      </h2>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {totalPapers} {language === 'en' ? 'Papers' : 'पेपर'} • {semPapers.reduce((a,p) => a + p.topicsCount, 0)} {language === 'en' ? 'Topics' : 'विषय'}
                        </span>
                        {hasNotes && (
                          <span className="text-[10px] font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5" />
                            {notesCount} {language === 'en' ? 'Notes Ready' : 'नोट्स तैयार'}
                          </span>
                        )}
                        {!hasNotes && (
                          <span className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <AlertCircle className="w-2.5 h-2.5" />
                            {language === 'en' ? 'Coming Soon' : 'शीघ्र आ रहा'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>

                {/* Papers Grid */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-gray-100 dark:border-gray-800"
                    >
                      <div className="p-4 space-y-3">
                        {semPapers.map((paper) => (
                          <PaperCard key={paper.code} paper={paper} language={language} />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
          <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
            {language === 'en' ? 'Paper Type Legend' : 'पेपर प्रकार किंवदंती'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              { type:'F', label:'Foundation', hi:'फाउंडेशन' },
              { type:'C', label:'Core', hi:'कोर' },
              { type:'S', label:'SEC (Skill)', hi:'SEC (कौशल)' },
              { type:'A', label:'Open Elective', hi:'ओपन इलेक्टिव' },
              { type:'E', label:'DCE (Elective)', hi:'DCE (वैकल्पिक)' },
              { type:'D', label:'Dissertation', hi:'शोध प्रबंध' },
            ].map((l) => (
              <span key={l.type} className={`text-[10px] px-2.5 py-1 rounded-full font-medium border ${typeColors[l.type]}`}>
                {typeIcons[l.type]} {l.type} = {language === 'en' ? l.label : l.hi}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SyllabusPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div></div>}>
      <SyllabusContent />
    </Suspense>
  );
}

/* ─── Single Paper Card ─── */
function PaperCard({ paper, language }: { paper: PaperMeta; language: 'en' | 'hi' }) {
  const hasNotes = !!paper.detailedSlug;
  const content = (
    <div className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 ${
      hasNotes
        ? 'bg-gradient-to-r from-white to-amber-50 dark:from-gray-900 dark:to-amber-950/20 border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-600 cursor-pointer shadow-sm hover:shadow-md'
        : 'bg-gray-50 dark:bg-gray-800/30 border-gray-100 dark:border-gray-800'
    }`}>
      {/* Paper Icon */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${
        hasNotes ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700'
      }`}>
        {typeIcons[paper.type] || '📄'}
      </div>

      {/* Paper Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className="text-xs font-mono font-bold text-gray-600 dark:text-gray-400">{paper.code}</span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${typeColors[paper.type]}`}>
            {paper.type} — {paper.typeLabel}
          </span>
          {hasNotes && (
            <span className="text-[10px] font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full animate-pulse-soft">
              📖 {language === 'en' ? 'Notes Ready' : 'नोट्स तैयार'}
            </span>
          )}
        </div>

        <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white leading-snug mb-1.5">
          {language === 'en' ? paper.title : paper.titleHi}
        </h3>

        {/* Marks & Credits Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1"><GraduationCap className="w-3.5 h-3.5 text-purple-400" /> {paper.credits}</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-blue-400" /> {paper.lectures}</span>
          <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5 text-amber-400" /> {paper.fullMarks} ({paper.endSem}+{paper.internal})</span>
          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-emerald-400" /> {paper.topicsCount} {language === 'en' ? 'topics' : 'विषय'}</span>
        </div>

        {hasNotes && (
          <div className="mt-2 flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400">
            <ExternalLink className="w-3 h-3" />
            {language === 'en' ? 'Tap to open detailed bilingual notes →' : 'विस्तृत द्विभाषी नोट्स खोलें →'}
          </div>
        )}
        {!hasNotes && (
          <div className="mt-2 text-xs text-gray-400 italic">
            {language === 'en' ? 'Detailed notes coming soon...' : 'विस्तृत नोट्स शीघ्र आ रहे हैं...'}
          </div>
        )}
      </div>

      {hasNotes && (
        <div className="flex-shrink-0 self-center">
          <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center">
            <ChevronDown className="w-4 h-4 text-amber-500 -rotate-90" />
          </div>
        </div>
      )}
    </div>
  );

  if (hasNotes) {
    return <Link href={paper.detailedSlug!}>{content}</Link>;
  }
  return <div>{content}</div>;
}
