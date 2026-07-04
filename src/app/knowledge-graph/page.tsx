'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { mindMaps, translations } from '@/lib/data';
import { ArrowLeft, ZoomIn, ZoomOut, Share2 } from 'lucide-react';
import Link from 'next/link';

const t = (key: string, lang: 'en' | 'hi') => translations[key]?.[lang] ?? key;

function MindMapNode({ node, lang, depth = 0 }: { node: any; lang: 'en' | 'hi'; depth?: number }) {
  const colors = ['border-primary-300 bg-primary-50 dark:bg-primary-900/20', 'border-accent-300 bg-accent-50 dark:bg-accent-900/20', 'border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20', 'border-amber-300 bg-amber-50 dark:bg-amber-900/20'];
  const color = colors[depth % colors.length];

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: depth * 0.15 }}
        className={`px-4 py-2.5 rounded-xl border-2 ${color} text-sm font-semibold text-gray-800 dark:text-gray-200 text-center max-w-[180px] shadow-sm`}
      >
        {lang === 'en' ? node.label : node.labelHi}
      </motion.div>
      {node.children && node.children.length > 0 && (
        <>
          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
          <div className="flex gap-6 flex-wrap justify-center">
            {node.children.map((child: any) => (
              <MindMapNode key={child.id} node={child} lang={lang} depth={depth + 1} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function KnowledgeGraphPage() {
  const { language } = useAppStore();
  const [selectedMap, setSelectedMap] = useState('western-thought');
  const [scale, setScale] = useState(1);

  const maps = Object.entries(mindMaps);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? '🔗 Knowledge Graph' : '🔗 नॉलेज ग्राफ'}
            </h1>
            <p className="text-sm text-gray-500">
              {language === 'en' ? 'Visual concept maps for key topics' : 'प्रमुख विषयों के लिए दृश्य अवधारणा मानचित्र'}
            </p>
          </div>
          <div className="flex gap-1">
            <button onClick={() => setScale(Math.max(0.5, scale - 0.1))} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
              <ZoomOut className="w-4 h-4" />
            </button>
            <button onClick={() => setScale(Math.min(2, scale + 0.1))} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Map selector */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {maps.map(([key, root]) => (
            <button
              key={key}
              onClick={() => setSelectedMap(key)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${selectedMap === key ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
            >
              {language === 'en' ? root.label : root.labelHi}
            </button>
          ))}
        </div>

        <motion.div
          key={selectedMap}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
          className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 overflow-auto min-h-[400px]"
        >
          {mindMaps[selectedMap] && (
            <MindMapNode node={mindMaps[selectedMap]} lang={language} />
          )}
        </motion.div>
      </div>
    </div>
  );
}
