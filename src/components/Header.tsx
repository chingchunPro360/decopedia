import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            建材百科
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/materials" className="text-gray-600 hover:text-blue-600">
              建材分類
            </Link>
            <Link href="/spaces" className="text-gray-600 hover:text-blue-600">
              空間規劃
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
