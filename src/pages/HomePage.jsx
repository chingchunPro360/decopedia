import { Link } from 'react-router-dom'
import { categories } from '../data/categories'

function HomePage() {
  const materials = Object.values(categories).filter(cat => cat.type === 'material')
  const spaces = Object.values(categories).filter(cat => cat.type === 'space')

  return (
    <div className="space-y-16 py-8">
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">建材分類</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <Link
              key={material.id}
              to={`/category/${material.id}`}
              className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="aspect-video bg-gray-100 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{material.name}</h3>
              <p className="text-gray-600">{material.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">空間規劃</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space) => (
            <Link
              key={space.id}
              to={`/category/${space.id}`}
              className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="aspect-video bg-gray-100 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{space.name}</h3>
              <p className="text-gray-600">{space.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
