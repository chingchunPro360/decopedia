import { useParams, Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { categories } from '../data/categories'

export function CategoryPage() {
  const { categoryId } = useParams()
  const category = categories[categoryId]

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
