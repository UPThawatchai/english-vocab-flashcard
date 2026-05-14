import { categories } from '../data/vocabulary'

export default function CategoryPicker({ selected, onSelect, wordCounts }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 active:scale-95
            ${selected === cat.id
              ? 'bg-white text-purple-700 shadow-lg scale-105'
              : 'bg-white/15 text-white hover:bg-white/25'
            }`}
        >
          <span>{cat.emoji}</span>
          <span>{cat.label}</span>
          {wordCounts && (
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${selected === cat.id ? 'bg-purple-100 text-purple-600' : 'bg-white/20'}`}>
              {wordCounts[cat.id] || 0}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
