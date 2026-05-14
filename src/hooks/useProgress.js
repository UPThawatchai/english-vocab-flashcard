import { useState, useEffect } from 'react'

const STORAGE_KEY = 'eng_vocab_progress'

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : {}
  } catch {
    return {}
  }
}

function saveProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // ignore storage errors
  }
}

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  function markCorrect(wordId) {
    setProgress(prev => {
      const entry = prev[wordId] || { correct: 0, wrong: 0, learned: false }
      const updated = { ...entry, correct: entry.correct + 1 }
      if (updated.correct >= 3) updated.learned = true
      return { ...prev, [wordId]: updated }
    })
  }

  function markWrong(wordId) {
    setProgress(prev => {
      const entry = prev[wordId] || { correct: 0, wrong: 0, learned: false }
      return { ...prev, [wordId]: { ...entry, wrong: entry.wrong + 1, learned: false } }
    })
  }

  function getWordProgress(wordId) {
    return progress[wordId] || { correct: 0, wrong: 0, learned: false }
  }

  function getTotalStats() {
    const total = Object.values(progress)
    const learned = total.filter(p => p.learned).length
    const totalCorrect = total.reduce((sum, p) => sum + (p.correct || 0), 0)
    const totalWrong = total.reduce((sum, p) => sum + (p.wrong || 0), 0)
    return { learned, totalCorrect, totalWrong }
  }

  function resetProgress() {
    setProgress({})
  }

  return { markCorrect, markWrong, getWordProgress, getTotalStats, resetProgress }
}
