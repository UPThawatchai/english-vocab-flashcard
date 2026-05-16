import { useState, useMemo } from 'react'
import { vocabulary, categories, getByCategory, shuffleArray } from './data/vocabulary'
import { useProgress } from './hooks/useProgress'
import FlashCard from './components/FlashCard'
import QuizMode from './components/QuizMode'
import SpellingMode from './components/SpellingMode'
import CategoryPicker from './components/CategoryPicker'
import StatsPanel from './components/StatsPanel'
import Footer from './components/Footer'
import './index.css'

const MODES = {
  HOME: 'home',
  FLASHCARD: 'flashcard',
  QUIZ: 'quiz',
  SPELLING: 'spelling',
  STATS: 'stats',
}

export default function App() {
  const [mode, setMode] = useState(MODES.HOME)
  const [category, setCategory] = useState('all')
  const [currentIndex, setCurrentIndex] = useState(0)
  const { markCorrect, markWrong, getWordProgress, getTotalStats, resetProgress } = useProgress()

  const filteredWords = useMemo(() => getByCategory(category), [category])
  const shuffledWords = useMemo(() => shuffleArray(filteredWords), [filteredWords, mode])
  const currentWord = shuffledWords[currentIndex]

  const wordCounts = useMemo(() => {
    const counts = { all: vocabulary.length }
    categories.forEach(c => {
      if (c.id !== 'all') counts[c.id] = vocabulary.filter(v => v.category === c.id).length
    })
    return counts
  }, [])

  const stats = getTotalStats()

  function startFlashcard() {
    setCurrentIndex(0)
    setMode(MODES.FLASHCARD)
  }

  function startQuiz() {
    setCurrentIndex(0)
    setMode(MODES.QUIZ)
  }

  function startSpelling() {
    setCurrentIndex(0)
    setMode(MODES.SPELLING)
  }

  function handleNext() {
    if (currentIndex < shuffledWords.length - 1) {
      setCurrentIndex(i => i + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  function handleCorrect() {
    markCorrect(currentWord.id)
    setTimeout(handleNext, 1000)
  }

  function handleWrong() {
    markWrong(currentWord.id)
    setTimeout(handleNext, 800)
  }

  function handleCategoryChange(cat) {
    setCategory(cat)
    setCurrentIndex(0)
  }

  function handleReset() {
    if (window.confirm('รีเซ็ตความคืบหน้าทั้งหมด?')) {
      resetProgress()
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="text-white text-center pt-8 pb-4 px-4">
        <h1 className="text-3xl font-bold mb-1">🇬🇧 English Flashcard</h1>
        <p className="text-white/70 text-sm">เรียนคำศัพท์ภาษาอังกฤษ · {vocabulary.length} คำ</p>

        {/* Nav tabs */}
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {[
            { key: MODES.HOME, label: '🏠 หน้าหลัก' },
            { key: MODES.FLASHCARD, label: '📖 Flashcard' },
            { key: MODES.QUIZ, label: '✏️ ทดสอบ' },
            { key: MODES.SPELLING, label: '⌨️ สะกด' },
            { key: MODES.STATS, label: '📊 สถิติ' },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => {
                if (tab.key === MODES.FLASHCARD) startFlashcard()
                else if (tab.key === MODES.QUIZ) startQuiz()
                else if (tab.key === MODES.SPELLING) startSpelling()
                else setMode(tab.key)
              }}
              className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all
                ${mode === tab.key ? 'bg-white text-purple-700 shadow' : 'bg-white/15 hover:bg-white/25'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 px-4 pb-10">

        {/* HOME */}
        {mode === MODES.HOME && (
          <div className="max-w-lg mx-auto text-center">
            <div className="text-white mb-8">
              <div className="text-6xl mb-4">📚</div>
              <h2 className="text-2xl font-bold mb-2">ยินดีต้อนรับ!</h2>
              <p className="text-white/70">เลือกวิธีเรียนที่คุณชอบ แล้วเริ่มเรียนคำศัพท์ภาษาอังกฤษได้เลย</p>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-8">
              <button
                onClick={startFlashcard}
                className="bg-white rounded-2xl p-6 text-left transition-all shadow-xl active:scale-95 hover:shadow-2xl"
              >
                <div className="text-3xl mb-2">📖</div>
                <h3 className="font-bold text-gray-800 text-lg">Flashcard</h3>
                <p className="text-gray-500 text-sm">กลับไปกลับมาเพื่อดูคำแปล เหมาะสำหรับการทบทวน</p>
              </button>
              <button
                onClick={startQuiz}
                className="bg-white rounded-2xl p-6 text-left transition-all shadow-xl active:scale-95 hover:shadow-2xl"
              >
                <div className="text-3xl mb-2">✏️</div>
                <h3 className="font-bold text-gray-800 text-lg">ทดสอบ 4 ตัวเลือก</h3>
                <p className="text-gray-500 text-sm">ทดสอบความรู้ เลือกคำแปลที่ถูกต้อง</p>
              </button>
              <button
                onClick={startSpelling}
                className="bg-white rounded-2xl p-6 text-left transition-all shadow-xl active:scale-95 hover:shadow-2xl"
              >
                <div className="text-3xl mb-2">⌨️</div>
                <h3 className="font-bold text-gray-800 text-lg">สะกดคำ</h3>
                <p className="text-gray-500 text-sm">ดูคำแปลภาษาไทย แล้วพิมพ์คำภาษาอังกฤษ</p>
              </button>
            </div>

            {/* Progress summary */}
            <div className="bg-white/10 rounded-2xl p-4 text-white">
              <p className="text-sm opacity-70 mb-1">ความคืบหน้าของคุณ</p>
              <p className="text-2xl font-bold">{stats.learned} / {vocabulary.length} คำ</p>
              <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                <div
                  className="bg-yellow-300 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(stats.learned / vocabulary.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* FLASHCARD MODE */}
        {mode === MODES.FLASHCARD && (
          <div className="max-w-lg mx-auto">
            <div className="mb-5">
              <CategoryPicker
                selected={category}
                onSelect={handleCategoryChange}
                wordCounts={wordCounts}
              />
            </div>

            <div className="text-center text-white/60 text-sm mb-4">
              {currentIndex + 1} / {shuffledWords.length} คำ
              {filteredWords.length < vocabulary.length && ` · หมวด ${categories.find(c => c.id === category)?.label}`}
            </div>

            {currentWord && (
              <FlashCard
                key={currentWord.id + '-' + currentIndex}
                word={currentWord}
                onCorrect={handleCorrect}
                onWrong={handleWrong}
                wordProgress={getWordProgress(currentWord.id)}
              />
            )}

            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
                disabled={currentIndex === 0}
                className="bg-white/15 hover:bg-white/25 text-white px-5 py-2.5 rounded-xl font-medium transition-all disabled:opacity-30"
              >
                ← ก่อนหน้า
              </button>
              <button
                onClick={handleNext}
                className="bg-white/15 hover:bg-white/25 text-white px-5 py-2.5 rounded-xl font-medium transition-all"
              >
                ถัดไป →
              </button>
            </div>
          </div>
        )}

        {/* QUIZ MODE */}
        {mode === MODES.QUIZ && (
          <div className="max-w-lg mx-auto">
            <div className="mb-5">
              <CategoryPicker
                selected={category}
                onSelect={handleCategoryChange}
                wordCounts={wordCounts}
              />
            </div>
            <QuizMode
              key={category + '-quiz-' + mode}
              words={filteredWords}
              onCorrect={markCorrect}
              onWrong={markWrong}
              getWordProgress={getWordProgress}
            />
          </div>
        )}

        {/* SPELLING MODE */}
        {mode === MODES.SPELLING && (
          <div className="max-w-lg mx-auto">
            <div className="mb-5">
              <CategoryPicker
                selected={category}
                onSelect={handleCategoryChange}
                wordCounts={wordCounts}
              />
            </div>
            <SpellingMode
              key={category + '-spelling-' + mode}
              words={filteredWords}
              onCorrect={markCorrect}
              onWrong={markWrong}
            />
          </div>
        )}

        {/* STATS MODE */}
        {mode === MODES.STATS && (
          <div className="max-w-lg mx-auto mt-4">
            <StatsPanel
              stats={stats}
              totalWords={vocabulary.length}
              onReset={handleReset}
            />

            <div className="mt-6 bg-white/10 rounded-2xl p-5 text-white">
              <h3 className="font-bold mb-4">ความคืบหน้าแยกหมวด</h3>
              <div className="space-y-3">
                {categories.filter(c => c.id !== 'all').map(cat => {
                  const catWords = vocabulary.filter(v => v.category === cat.id)
                  const learned = catWords.filter(w => getWordProgress(w.id).learned).length
                  return (
                    <div key={cat.id}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{cat.emoji} {cat.label}</span>
                        <span className="opacity-70">{learned}/{catWords.length}</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-1.5">
                        <div
                          className="bg-yellow-300 h-1.5 rounded-full transition-all duration-500"
                          style={{ width: `${(learned / catWords.length) * 100}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
