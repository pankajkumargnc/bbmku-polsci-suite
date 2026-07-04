import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'en' | 'hi';
export type Theme = 'light' | 'dark';

export interface QuizResult {
  id: string;
  date: string;
  subject: string;
  total: number;
  correct: number;
  timeSpent: number;
}

export interface FlashcardProgress {
  id: string;
  deckId: string;
  known: number;
  review: number;
  unknown: number;
}

export interface Bookmark {
  id: string;
  type: 'pyq' | 'mcq' | 'flashcard' | 'note';
  itemId: string;
  title: string;
  date: string;
}

interface AppState {
  theme: Theme;
  language: Language;
  setTheme: (t: Theme) => void;
  setLanguage: (l: Language) => void;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

interface ProgressState {
  quizResults: QuizResult[];
  flashcardProgress: FlashcardProgress[];
  bookmarks: Bookmark[];
  streak: number;
  lastStudyDate: string;
  totalStudyMinutes: number;
  completedTopics: string[];
  addQuizResult: (r: QuizResult) => void;
  updateFlashcardProgress: (p: FlashcardProgress) => void;
  toggleBookmark: (b: Bookmark) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (itemId: string) => boolean;
  updateStreak: () => void;
  addStudyMinutes: (m: number) => void;
  toggleCompletedTopic: (topic: string) => void;
  isTopicCompleted: (topic: string) => boolean;
  resetProgress: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'light',
      language: 'en',
      setTheme: (t) => {
        set({ theme: t });
        if (typeof document !== 'undefined') {
          document.documentElement.classList.toggle('dark', t === 'dark');
        }
      },
      setLanguage: (l) => set({ language: l }),
      toggleTheme: () =>
        set((s) => {
          const next = s.theme === 'light' ? 'dark' : 'light';
          if (typeof document !== 'undefined') {
            document.documentElement.classList.toggle('dark', next === 'dark');
          }
          return { theme: next };
        }),
      toggleLanguage: () =>
        set((s) => ({ language: s.language === 'en' ? 'hi' : 'en' })),
    }),
    { name: 'bbmku-app-settings' }
  )
);

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      quizResults: [],
      flashcardProgress: [],
      bookmarks: [],
      streak: 0,
      lastStudyDate: '',
      totalStudyMinutes: 0,
      completedTopics: [],
      addQuizResult: (r) =>
        set((s) => ({ quizResults: [...s.quizResults.slice(-49), r] })),
      updateFlashcardProgress: (p) =>
        set((s) => ({
          flashcardProgress: [
            ...s.flashcardProgress.filter((f) => f.id !== p.id),
            p,
          ],
        })),
      toggleBookmark: (b) =>
        set((s) => {
          const exists = s.bookmarks.find(
            (bk) => bk.itemId === b.itemId
          );
          if (exists) {
            return { bookmarks: s.bookmarks.filter((bk) => bk.itemId !== b.itemId) };
          }
          return { bookmarks: [b, ...s.bookmarks] };
        }),
      removeBookmark: (id) =>
        set((s) => ({ bookmarks: s.bookmarks.filter((b) => b.id !== id) })),
      isBookmarked: (itemId) => get().bookmarks.some((b) => b.itemId === itemId),
      updateStreak: () => {
        const today = new Date().toISOString().split('T')[0];
        const { lastStudyDate, streak } = get();
        if (lastStudyDate === today) return;
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        if (lastStudyDate === yesterday) {
          set({ streak: streak + 1, lastStudyDate: today });
        } else {
          set({ streak: 1, lastStudyDate: today });
        }
      },
      addStudyMinutes: (m) =>
        set((s) => ({ totalStudyMinutes: s.totalStudyMinutes + m })),
      toggleCompletedTopic: (topic) =>
        set((s) => ({
          completedTopics: s.completedTopics.includes(topic)
            ? s.completedTopics.filter((t) => t !== topic)
            : [...s.completedTopics, topic],
        })),
      isTopicCompleted: (topic) => get().completedTopics.includes(topic),
      resetProgress: () =>
        set({
          quizResults: [],
          flashcardProgress: [],
          bookmarks: [],
          streak: 0,
          lastStudyDate: '',
          totalStudyMinutes: 0,
          completedTopics: [],
        }),
    }),
    { name: 'bbmku-progress' }
  )
);
