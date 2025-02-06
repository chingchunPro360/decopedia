'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export function SearchSection() {
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 實作搜尋功能
  }

  return (
    <section className="container py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">搜尋建材資訊</h2>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="輸入建材名稱、空間類型..."
            className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:outline-none focus:border-primary text-lg"
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-primary/90"
          >
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
        </form>
        <div className="mt-4 space-x-2">
          <span className="text-gray-500">熱門搜尋：</span>
          {['大理石', '防水建材', '實木地板', '磁磚'].map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="text-primary hover:underline"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
