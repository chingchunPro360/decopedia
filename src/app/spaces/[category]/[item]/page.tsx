import { Breadcrumb } from '@/components/Breadcrumb'
import { spaceCategories } from '@/data/categories'
import { notFound } from 'next/navigation'

export default function SpaceItemPage({ 
  params 
}: { 
  params: { category: string; item: string } 
}) {
  const category = spaceCategories.find(c => c.id === params.category)
  const item = category?.items.find(i => i.id === params.item)
  
  if (!category || !item) {
    notFound()
  }

  return (
    <div>
      <Breadcrumb items={[
        { name: '空間規劃', href: '/spaces' },
        { name: category.name, href: `/spaces/${category.id}` },
        { name: item.name }
      ]} />
      
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-6">{item.name}</h1>
        <div className="aspect-video rounded bg-gray-100 mb-8" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">空間特性</h2>
              <div className="prose max-w-none">
                <p>{item.description}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">建議材料</h2>
              <div className="prose max-w-none">
                <ul>
                  <li>地板建議</li>
                  <li>牆面建議</li>
                  <li>天花板建議</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">設計重點</h2>
              <div className="prose max-w-none">
                <ul>
                  <li>空間配置</li>
                  <li>採光通風</li>
                  <li>收納規劃</li>
                </ul>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold mb-4">預算參考</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-600">基本裝修</h3>
                  <p className="text-2xl font-bold text-primary">
                    NT$ 10,000 - 30,000 / 坪
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-600">中高級裝修</h3>
                  <p className="text-2xl font-bold text-primary">
                    NT$ 30,000 - 60,000 / 坪
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  * 價格僅供參考，實際費用依需求而定
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
