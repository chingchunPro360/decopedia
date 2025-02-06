import { useParams, Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { categories } from '../data/categories'
import { useState, useEffect } from 'react'

// 將 materialContent 邏輯整合到組件中
function useMaterialContent(materialId) {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await fetch(`/content/${materialId}.md`)
        if (!response.ok) {
          throw new Error('Content not found')
        }
        const text = await response.text()
        setContent(text)
        setLoading(false)
      } catch (err) {
        console.error('Error loading material content:', err)
        setError(err)
        setLoading(false)
      }
    }

    fetchContent()
  }, [materialId])

  return { content, loading, error }
}

// 使用命名導出而不是默認導出
export function ItemPage() {
  const { categoryId, itemId } = useParams()
  const category = categories[categoryId]
  const item = category?.items.find(i => i.id === itemId)
  const { content, loading, error } = useMaterialContent(itemId)

  if (!category || !item) {
    return <div>找不到此項目</div>
  }

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb 
        items={[
          { name: category.name, path: `/category/${categoryId}` },
          { name: item.name }
        ]} 
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* 1. 名稱 */}
        <h1 className="text-4xl font-bold mb-6">{item.name}</h1>
        
        {/* 2. 簡介 */}
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-700">{item.description}</p>
        </div>

        {/* 3. 價格資訊 */}
        <section className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">價格參考</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-600">材料費用</h3>
              <p className="text-2xl font-bold text-blue-600">
                NT$ {item.price?.materialCost.min.toLocaleString()} - {item.price?.materialCost.max.toLocaleString()} / {item.price?.unit}
              </p>
              <p className="text-sm text-gray-500 mt-1">{item.price?.materialCost.note}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-600">施工費用</h3>
              <p className="text-2xl font-bold text-blue-600">
                NT$ {item.price?.constructionCost.min.toLocaleString()} - {item.price?.constructionCost.max.toLocaleString()} / {item.price?.unit}
              </p>
              <p className="text-sm text-gray-500 mt-1">{item.price?.constructionCost.note}</p>
            </div>
          </div>
        </section>

        {/* 4. 分類 */}
        {item.variants && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">款式分類</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {item.variants.map(variant => (
                <div key={variant.id} className="border rounded-lg overflow-hidden">
                  <img 
                    src={variant.imageUrl} 
                    alt={variant.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">{variant.name}</h3>
                    <p className="text-gray-600">{variant.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. 主要文章 */}
        <section className="prose max-w-none mb-12">
          <h2 className="text-2xl font-bold mb-6">詳細資訊</h2>
          {loading ? (
            <div>載入中...</div>
          ) : error ? (
            <div>載入內容時發生錯誤</div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          )}
        </section>

        {/* 6. 推薦產品 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">推薦產品</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {item.suppliers.map(supplier => (
              <div key={supplier.id} className="border rounded-lg p-6">
                <h3 className="font-bold mb-4">{supplier.name}</h3>
                <ul className="space-y-2">
                  {supplier.products.map(product => (
                    <li key={product.url}>
                      <a 
                        href={product.url}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {product.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 7. 推薦業者 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">合作廠商</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {item.contractors.map(contractor => (
              <div key={contractor.id} className="border rounded-lg p-6">
                <h3 className="font-bold mb-2">{contractor.name}</h3>
                <div className="mb-4">
                  <h4 className="text-sm text-gray-600">專長項目：</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {contractor.specialties.map(specialty => (
                      <span key={specialty} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={contractor.website}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  查看更多資訊
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 8. 替代方案 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">相關替代方案</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {item.alternatives.map(alternative => (
              <Link 
                key={alternative.id}
                to={alternative.url}
                className="block border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold mb-2">{alternative.name}</h3>
                <p className="text-gray-600">{alternative.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
