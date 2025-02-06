export function CategoryGrid() {
  const materialCategories = [
    {
      id: 1,
      name: '石材',
      description: '大理石、花崗岩等天然石材'
    },
    {
      id: 2,
      name: '磚材',
      description: '各式地磚、壁磚與文化石'
    },
    {
      id: 3,
      name: '木材',
      description: '實木、合板與木地板'
    },
    {
      id: 4,
      name: '塗料',
      description: '室內外油漆與防水材料'
    }
  ]

  const spaceCategories = [
    {
      id: 1,
      name: '廚房',
      description: '廚房空間規劃與材料選擇'
    },
    {
      id: 2,
      name: '浴室',
      description: '衛浴空間防水與材料應用'
    },
    {
      id: 3,
      name: '客廳',
      description: '客廳空間設計與材料搭配'
    },
    {
      id: 4,
      name: '臥室',
      description: '臥室空間規劃與材質選擇'
    }
  ]

  return (
    <section className="container py-16">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">建材分類</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {materialCategories.map((category) => (
            <a
              key={category.id}
              href={`/materials/${category.id}`}
              className="group block"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4 placeholder-bg">
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {category.name}
                  </span>
                </div>
              </div>
              <p className="text-gray-600">{category.description}</p>
            </a>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8">空間規劃</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {spaceCategories.map((category) => (
            <a
              key={category.id}
              href={`/spaces/${category.id}`}
              className="group block"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4 placeholder-bg">
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {category.name}
                  </span>
                </div>
              </div>
              <p className="text-gray-600">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
