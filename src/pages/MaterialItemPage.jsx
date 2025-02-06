import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

const materialDetails = {
  stone: {
    name: '石材',
    items: {
      marble: {
        name: '大理石',
        description: '優雅紋理，適合高級場所',
        features: [
          '天然紋理獨特',
          '質地堅硬耐用',
          '適合室內裝飾'
        ],
        applications: [
          '客廳地板',
          '牆面裝飾',
          '檯面材料'
        ],
        price: {
          material: '2000-5000',
          installation: '1500-3000'
        }
      }
      // ... 其他石材項目
    }
  }
  // ... 其他材料類別
}

function MaterialItemPage() {
  const { categoryId, itemId } = useParams()
  const category = materialDetails[categoryId]
  const item = category?.items[itemId]

  if (!category || !item) {
    return <div>找不到此項目</div>
  }

  return (
    <div>
      <Breadcrumb 
        items={[
          { name: category.name, path: `/category/${categoryId}` },
          { name: item.name }
        ]} 
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{item.name}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">產品特性</h2>
              <ul className="list-disc list-inside space-y-2">
                {item.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">適用範圍</h2>
              <ul className="list-disc list-inside space-y-2">
                {item.applications.map((application, index) => (
                  <li key={index} className="text-gray-700">{application}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold mb-4">價格參考</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-600">材料費用</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    NT$ {item.price.material} / 坪
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-600">施工費用</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    NT$ {item.price.installation} / 坪
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  * 價格僅供參考，實際費用請洽專業廠商
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaterialItemPage
