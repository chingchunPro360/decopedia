import { Breadcrumb } from '@/components/Breadcrumb'
import { materialCategories } from '@/data/categories'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getMaterialContent } from '@/lib/materials'

// 新增類型定義
type PriceInfo = {
  unit: string // 計價單位（坪、平方公尺等）
  materialCost: {
    min: number
    max: number
  }
  constructionCost: {
    min: number
    max: number
  }
}

type Variant = {
  id: string
  name: string
  description: string
  imageUrl: string
}

type Supplier = {
  id: string
  name: string
  website: string
  products: Array<{
    name: string
    url: string
  }>
}

type Contractor = {
  id: string
  name: string
  website: string
  specialties: string[]
}

type Alternative = {
  id: string
  name: string
  description: string
  url: string
}

export default async function MaterialItemPage({ 
  params 
}: { 
  params: { category: string; item: string } 
}) {
  const category = materialCategories.find(c => c.id === params.category)
  const item = category?.items.find(i => i.id === params.item)
  
  if (!category || !item) {
    notFound()
  }

  const safeCategory = category
  const safeItem = item

  const content = await getMaterialContent(params.item)

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[
        { name: safeCategory.name, href: `/materials/${safeCategory.id}` },
        { name: safeItem.name }
      ]} />
      
      <div className="container mx-auto px-4 py-8">
        {/* 1. 名稱 */}
        <h1 className="text-4xl font-bold mb-6">{safeItem.name}</h1>
        
        {/* 2. 簡介 */}
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-700">{safeItem.description}</p>
        </div>

        {/* 3. 價格資訊 */}
        <section className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">價格參考</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-600">材料費用</h3>
              <p className="text-2xl font-bold text-primary">
                NT$ {safeItem.price?.materialCost.min.toLocaleString()} - {safeItem.price?.materialCost.max.toLocaleString()} / {safeItem.price?.unit}
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-600">施工費用</h3>
              <p className="text-2xl font-bold text-primary">
                NT$ {safeItem.price?.constructionCost.min.toLocaleString()} - {safeItem.price?.constructionCost.max.toLocaleString()} / {safeItem.price?.unit}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            * 價格僅供參考，實際費用請洽專業廠商
          </p>
        </section>

        {/* 4. 分類 */}
        {safeItem.variants && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">款式分類</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {safeItem.variants.map(variant => (
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
        {content && (
          <section className="prose max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-6">詳細資訊</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </section>
        )}

        {/* 6. 推薦產品 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">推薦產品</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safeItem.suppliers.map(supplier => (
              <div key={supplier.id} className="border rounded-lg p-6">
                <h3 className="font-bold mb-4">{supplier.name}</h3>
                <ul className="space-y-2">
                  {supplier.products.map(product => (
                    <li key={product.url}>
                      <Link 
                        href={product.url}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                      >
                        {product.name}
                      </Link>
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
            {safeItem.contractors.map(contractor => (
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
                <Link 
                  href={contractor.website}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  查看更多資訊
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 8. 替代方案 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">您也可以參考</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safeItem.alternatives.map(alternative => (
              <Link 
                key={alternative.id}
                href={alternative.url}
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
