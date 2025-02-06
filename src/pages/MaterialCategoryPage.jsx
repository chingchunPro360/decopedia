import { useParams, Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

const materialDetails = {
  stone: {
    name: '石材',
    description: '大理石、花崗岩等天然石材',
    items: [
      { id: 'marble', name: '大理石', description: '優雅紋理，適合高級場所' },
      { id: 'granite', name: '花崗岩', description: '堅固耐用，適合廚房檯面' },
      { id: 'slate', name: '板岩', description: '自然質感，適合戶外空間' }
    ]
  },
  brick: {
    name: '磚材',
    description: '各式地磚、壁磚與文化石',
    items: [
      { id: 'ceramic', name: '瓷磚', description: '防水易清潔，適合浴室' },
      { id: 'porcelain', name: '拋光磚', description: '耐磨美觀，適合客廳' },
      { id: 'culture-stone', name: '文化石', description: '裝飾效果佳，適合牆面' }
    ]
  },
  wood: {
    name: '木材',
    description: '實木、合板與木地板',
    items: [
      { id: 'solid-wood', name: '實木', description: '天然溫潤，適合臥室' },
      { id: 'plywood', name: '合板', description: '價格實惠，適合隔間' },
      { id: 'laminate', name: '複合地板', description: '安裝便利，適合租屋' }
    ]
  }
}

function MaterialCategoryPage() {
  const { categoryId } = useParams()
  const category = materialDetails[categoryId]

  if (!category) {
    return <div>找不到此分類</div>
  }

  return (
    <div>
      <Breadcrumb items={[{ name: category.name }]} />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{category.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.items.map((item) => (
            <Link
              key={item.id}
              to={`/category/${categoryId}/${item.id}`}
              className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="aspect-video bg-gray-100 rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MaterialCategoryPage
