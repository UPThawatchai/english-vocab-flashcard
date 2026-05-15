import { useState, useEffect, useCallback } from 'react'
import { shuffleArray } from '../data/vocabulary'
import { useSpeech } from '../hooks/useSpeech'

function generateChoices(word, allWords) {
  const wrong = shuffleArray(allWords.filter(w => w.id !== word.id)).slice(0, 3)
  const choices = shuffleArray([word, ...wrong])
  return choices
}

export default function QuizMode({ words, onCorrect, onWrong, getWordProgress }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [choices, setChoices] = useState([])
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState({ correct: 0, wrong: 0 })
  const [quizWords] = useState(() => shuffleArray(words))
  const [showEnglish, setShowEnglish] = useState(true) // true = show english, guess thai
  const { speak } = useSpeech()

  const currentWord = quizWords[currentIndex]

  const setupChoices = useCallback(() => {
    if (currentWord) {
      setChoices(generateChoices(currentWord, words))
    }
  }, [currentWord, words])

  useEffect(() => {
    setupChoices()
    setSelected(null)
  }, [currentIndex, setupChoices])

  if (!currentWord) {
    return (
      <div className="text-center text-white py-12">
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="text-3xl font-bold mb-2">ทำแบบทดสอบเสร็จแล้ว!</h2>
        <p className="text-xl opacity-80 mb-6">ตอบถูก {score.correct} / {quizWords.length} ข้อ</p>
        <div className="text-5xl">
          {score.correct === quizWords.length ? '⭐⭐⭐' :
           score.correct >= quizWords.length * 0.7 ? '⭐⭐' : '⭐'}
        </div>
      </div>
    )
  }

  function handleSelect(choice) {
    if (selected !== null) return
    setSelected(choice.id)
    if (choice.id === currentWord.id) {
      setScore(s => ({ ...s, correct: s.correct + 1 }))
      onCorrect(currentWord.id)
    } else {
      setScore(s => ({ ...s, wrong: s.wrong + 1 }))
      onWrong(currentWord.id)
    }
    setTimeout(() => {
      setCurrentIndex(i => i + 1)
    }, 1200)
  }

  const question = showEnglish ? currentWord.english : currentWord.thai
  const getChoiceLabel = (choice) => showEnglish ? choice.thai : choice.english
  const isCorrect = (choice) => choice.id === currentWord.id
  const isSelected = (choice) => selected === choice.id

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-md mx-auto">
      {/* Progress bar */}
      <div className="w-full">
        <div className="flex justify-between text-white/70 text-sm mb-1">
          <span>ข้อที่ {currentIndex + 1} / {quizWords.length}</span>
          <span>✅ {score.correct} | ❌ {score.wrong}</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div
            className="bg-yellow-300 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentIndex / quizWords.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Mode toggle */}
      <button
        onClick={() => setShowEnglish(e => !e)}
        className="text-white/60 text-xs hover:text-white transition-colors"
      >
        {showEnglish ? 'โหมด: ดูอังกฤษ → เลือกไทย 🔄' : 'โหมด: ดูไทย → เลือกอังกฤษ 🔄'}
      </button>

      {/* Question card */}
      <div className="w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <p className="text-xs text-gray-400 mb-2 uppercase">{showEnglish ? 'คำภาษาอังกฤษ' : 'คำภาษาไทย'}</p>
        <h2 className="text-4xl font-bold text-gray-800 mb-1">{question}</h2>
        {showEnglish && (
          <>
            <p className="text-sm text-gray-400 font-mono">{currentWord.pronunciation}</p>
            <button
              onClick={() => speak(currentWord.english)}
              className="mt-1 text-purple-400 hover:text-purple-600 text-xl transition-colors"
              title="ฟังการออกเสียง"
            >
              🔊
            </button>
          </>
        )}
        <p className="text-sm text-gray-500 mt-2">"{currentWord.example}"</p>
      </div>

      {/* Choices */}
      <div className="grid grid-cols-2 gap-3 w-full">
        {choices.map((choice) => {
          let btnClass = 'bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40'
          if (selected !== null) {
            if (isCorrect(choice)) btnClass = 'bg-green-500 text-white border-2 border-green-400 scale-105'
            else if (isSelected(choice)) btnClass = 'bg-red-500 text-white border-2 border-red-400 shake'
            else btnClass = 'bg-white/5 text-white/40 border-2 border-white/10'
          }
          return (
            <button
              key={choice.id}
              onClick={() => handleSelect(choice)}
              className={`py-4 px-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-95 ${btnClass}`}
            >
              {getChoiceLabel(choice)}
            </button>
          )
        })}
      </div>
    </div>
  )
}
