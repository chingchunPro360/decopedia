import Link from 'next/link'

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

const spaces = [
  {
    id: 'kitchen',
    name: '廚房',
    description: '廚房空間規劃與材料選擇'
  },
  {
    id: 'bathroom',
    name: '浴室',
    description: '衛浴空間防水與材料應用'
  },
  {
    id: 'living',
    name: '客廳',
    description: '客廳空間設計與材料搭配'
  }
]

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">建材分類</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <Link
              key={material.id}
              href={`/materials/${material.id}`}
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
              href={`/spaces/${space.id}`}
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
