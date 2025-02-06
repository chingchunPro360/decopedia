import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container py-12 text-center">
      <h2 className="text-4xl font-bold mb-4">找不到頁面</h2>
      <p className="text-xl text-gray-600 mb-8">
        抱歉，您要找的頁面不存在。
      </p>
      <Link 
        href="/"
        className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90"
      >
        返回首頁
      </Link>
    </div>
  )
}
