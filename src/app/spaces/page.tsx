import { Breadcrumb } from '@/components/Breadcrumb'
import { spaceCategories } from '@/data/categories'
import Link from 'next/link'

export default function SpacesPage() {
  return (
    <div>
      <Breadcrumb items={[
        { name: '空間規劃' }
      ]} />
      
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8">空間規劃</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaceCategories.map((category) => (
            <Link
              key={category.id}
              href={`/spaces/${category.id}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 group"
            >
              <div className="aspect-video rounded bg-gray-100 mb-4" />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary">
                {category.name}
              </h2>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
