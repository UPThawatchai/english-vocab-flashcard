import { useState } from 'react'

export default function FlashCard({ word, onCorrect, onWrong, wordProgress }) {
  const [flipped, setFlipped] = useState(false)
  const [answered, setAnswered] = useState(null) // 'correct' | 'wrong' | null

  function handleFlip() {
    if (!answered) setFlipped(f => !f)
  }

  function handleCorrect() {
    setAnswered('correct')
    onCorrect()
    setTimeout(() => {
      setFlipped(false)
      setAnswered(null)
    }, 1000)
  }

  function handleWrong() {
    setAnswered('wrong')
    onWrong()
    setTimeout(() => {
      setFlipped(false)
      setAnswered(null)
    }, 800)
  }

  const difficultyStars = '⭐'.repeat(word.difficulty)

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
      {/* Word count & progress badge */}
      <div className="flex items-center gap-2 text-white/80 text-sm">
        <span>{difficultyStars}</span>
        {wordProgress.learned && (
          <span className="bg-green-400 text-green-900 px-2 py-0.5 rounded-full text-xs font-bold">เรียนรู้แล้ว ✓</span>
        )}
        <span className="opacity-60">ตอบถูก {wordProgress.correct}x</span>
      </div>

      {/* Flash card */}
      <div className="card-flip w-full cursor-pointer" style={{ height: '220px' }} onClick={handleFlip}>
        <div className={`card-flip-inner w-full h-full ${flipped ? 'flipped' : ''}`}>
          {/* Front - English */}
          <div className="card-face absolute inset-0 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6">
            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">English</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">{word.english}</h2>
            <p className="text-sm text-gray-400 font-mono">{word.pronunciation}</p>
            <p className="text-xs text-purple-400 mt-3 animate-pulse">แตะเพื่อดูคำแปล</p>
          </div>

          {/* Back - Thai */}
          <div className={`card-face card-back rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 ${answered === 'correct' ? 'bg-green-500' : answered === 'wrong' ? 'bg-red-400' : 'bg-purple-600'}`}>
            <p className="text-xs text-white/60 mb-2 uppercase tracking-wide">ภาษาไทย</p>
            <h2 className="text-3xl font-bold text-white mb-3">{word.thai}</h2>
            <p className="text-sm text-white/80 italic text-center px-2">"{word.example}"</p>
          </div>
        </div>
      </div>

      {/* Action buttons - only show when flipped */}
      {flipped && !answered && (
        <div className="flex gap-4 bounce-in">
          <button
            onClick={handleWrong}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all active:scale-95"
          >
            ❌ ยังไม่รู้
          </button>
          <button
            onClick={handleCorrect}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all active:scale-95"
          >
            ✅ รู้แล้ว!
          </button>
        </div>
      )}

      {answered && (
        <div className={`text-2xl font-bold bounce-in ${answered === 'correct' ? 'text-green-300' : 'text-red-300'}`}>
          {answered === 'correct' ? '🎉 เก่งมาก!' : '💪 ลองใหม่นะ!'}
        </div>
      )}
    </div>
  )
}
