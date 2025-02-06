import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

const materials = [
  {
    id: 'stone',
    name: '石材',
    description: '大理石、花崗岩等天然石材'
  },
  {
    id: 'brick',
    name: '磚材',
    description: '各式地磚、壁磚與文化石'
  },
  {
    id: 'wood',
    name: '木材',
    description: '實木、合板與木地板'
  }
]

function MaterialsPage() {
  return (
    <div>
      <Breadcrumb items={[{ name: '建材分類' }]} />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">建材分類</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <Link
              key={material.id}
              to={`/materials/${material.id}`}
              className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="aspect-video bg-gray-100 rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">{material.name}</h2>
              <p className="text-gray-600">{material.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MaterialsPage
