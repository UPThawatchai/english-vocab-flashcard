import { useState, useEffect, useRef } from 'react'
import { shuffleArray } from '../data/vocabulary'
import { useSpeech } from '../hooks/useSpeech'

export default function SpellingMode({ words, onCorrect, onWrong }) {
  const [quizWords] = useState(() => shuffleArray(words))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null) // 'correct' | 'wrong' | null
  const [score, setScore] = useState({ correct: 0, wrong: 0 })
  const [showHint, setShowHint] = useState(false)
  const inputRef = useRef(null)
  const { speak } = useSpeech()

  const currentWord = quizWords[currentIndex]

  useEffect(() => {
    setInput('')
    setResult(null)
    setShowHint(false)
    inputRef.current?.focus()
  }, [currentIndex])

  if (!currentWord) {
    return (
      <div className="text-center text-white py-12">
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="text-3xl font-bold mb-2">เสร็จแล้ว!</h2>
        <p className="text-xl opacity-80 mb-6">พิมพ์ถูก {score.correct} / {quizWords.length} คำ</p>
        <div className="text-5xl">
          {score.correct === quizWords.length ? '⭐⭐⭐' :
           score.correct >= quizWords.length * 0.7 ? '⭐⭐' : '⭐'}
        </div>
      </div>
    )
  }

  const hint = currentWord.english.slice(0, Math.ceil(currentWord.english.length / 2)) + '...'

  function handleSubmit(e) {
    e.preventDefault()
    if (result !== null) return
    const trimmed = input.trim().toLowerCase()
    const correct = currentWord.english.toLowerCase()
    if (trimmed === correct) {
      setResult('correct')
      setScore(s => ({ ...s, correct: s.correct + 1 }))
      onCorrect(currentWord.id)
      speak(currentWord.english)
      setTimeout(() => setCurrentIndex(i => i + 1), 1500)
    } else {
      setResult('wrong')
      setScore(s => ({ ...s, wrong: s.wrong + 1 }))
      onWrong(currentWord.id)
    }
  }

  function handleNext() {
    setCurrentIndex(i => i + 1)
  }

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-md mx-auto">
      {/* Progress */}
      <div className="w-full">
        <div className="flex justify-between text-white/70 text-sm mb-1">
          <span>คำที่ {currentIndex + 1} / {quizWords.length}</span>
          <span>✅ {score.correct} | ❌ {score.wrong}</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div
            className="bg-yellow-300 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentIndex / quizWords.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">พิมพ์คำภาษาอังกฤษ</p>
        <h2 className="text-4xl font-bold text-gray-800 mb-1">{currentWord.thai}</h2>
        <p className="text-sm text-gray-500 mt-1 italic">"{currentWord.example}"</p>
        {showHint && (
          <p className="text-sm text-purple-500 mt-2 font-mono">힌트: {hint}</p>
        )}
      </div>

      {/* Input form */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={result !== null}
          placeholder="พิมพ์คำภาษาอังกฤษที่นี่..."
          autoComplete="off"
          autoCapitalize="none"
          className={`w-full px-5 py-4 rounded-xl text-lg font-medium text-center outline-none border-2 transition-all
            ${result === 'correct' ? 'border-green-400 bg-green-50 text-green-700' :
              result === 'wrong' ? 'border-red-400 bg-red-50 text-red-700' :
              'border-white/40 bg-white text-gray-800 focus:border-purple-400'}`}
        />

        {result === null && (
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setShowHint(h => !h)}
              className="flex-1 bg-white/15 hover:bg-white/25 text-white py-3 rounded-xl font-medium transition-all"
            >
              💡 {showHint ? 'ซ่อนใบ้' : 'ใบ้'}
            </button>
            <button
              type="submit"
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-3 rounded-xl transition-all active:scale-95"
            >
              ตรวจคำตอบ ✓
            </button>
          </div>
        )}

        {result === 'correct' && (
          <div className="text-center text-green-300 text-2xl font-bold bounce-in">
            🎉 ถูกต้อง!
          </div>
        )}

        {result === 'wrong' && (
          <div className="flex flex-col gap-2 bounce-in">
            <div className="text-center text-red-300 text-lg font-bold">
              ❌ ไม่ถูก — คำที่ถูกคือ <span className="text-white underline">{currentWord.english}</span>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => speak(currentWord.english)}
                className="flex-1 bg-white/15 hover:bg-white/25 text-white py-3 rounded-xl transition-all"
              >
                🔊 ฟังการออกเสียง
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 bg-white text-purple-700 font-bold py-3 rounded-xl transition-all active:scale-95"
              >
                ถัดไป →
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
