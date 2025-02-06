import { Breadcrumb } from '@/components/Breadcrumb'
import { spaceCategories } from '@/data/categories'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function SpaceCategoryPage({ 
  params 
}: { 
  params: { category: string } 
}) {
  const category = spaceCategories.find(c => c.id === params.category)
  
  if (!category) {
    notFound()
  }

  return (
    <div>
      <Breadcrumb items={[
        { name: '空間規劃', href: '/spaces' },
        { name: category.name }
      ]} />
      
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8">{category.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.items.map((item) => (
            <Link
              key={item.id}
              href={`/spaces/${category.id}/${item.id}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 group"
            >
              <div className="aspect-video rounded bg-gray-100 mb-4" />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary">
                {item.name}
              </h2>
              <p className="text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
