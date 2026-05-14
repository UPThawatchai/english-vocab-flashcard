export default function StatsPanel({ stats, totalWords, onReset }) {
  const accuracy = stats.totalCorrect + stats.totalWrong > 0
    ? Math.round((stats.totalCorrect / (stats.totalCorrect + stats.totalWrong)) * 100)
    : 0

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-white w-full max-w-md mx-auto">
      <h3 className="font-bold text-lg mb-4 text-center">📊 สถิติของคุณ</h3>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="text-center bg-white/10 rounded-xl p-3">
          <div className="text-2xl font-bold text-green-300">{stats.learned}</div>
          <div className="text-xs opacity-70 mt-1">เรียนรู้แล้ว</div>
        </div>
        <div className="text-center bg-white/10 rounded-xl p-3">
          <div className="text-2xl font-bold text-yellow-300">{totalWords - stats.learned}</div>
          <div className="text-xs opacity-70 mt-1">ยังไม่รู้</div>
        </div>
        <div className="text-center bg-white/10 rounded-xl p-3">
          <div className="text-2xl font-bold text-blue-300">{accuracy}%</div>
          <div className="text-xs opacity-70 mt-1">ความแม่นยำ</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs opacity-70 mb-1">
          <span>ความคืบหน้า</span>
          <span>{stats.learned}/{totalWords} คำ</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(stats.learned / totalWords) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex gap-3 text-sm justify-center mb-3">
        <span>✅ ถูก: <b>{stats.totalCorrect}</b></span>
        <span>❌ ผิด: <b>{stats.totalWrong}</b></span>
      </div>

      <button
        onClick={onReset}
        className="w-full mt-1 text-xs text-white/50 hover:text-white/80 transition-colors underline"
      >
        รีเซ็ตความคืบหน้าทั้งหมด
      </button>
    </div>
  )
}
