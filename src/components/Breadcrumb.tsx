import Link from 'next/link'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

interface BreadcrumbItem {
  name: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="container py-4">
      <ol className="flex items-center space-x-2 text-gray-600">
        <li>
          <Link href="/" className="flex items-center hover:text-primary">
            <HomeIcon className="h-5 w-5" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRightIcon className="h-5 w-5 text-gray-400" />
            {item.href ? (
              <Link href={item.href} className="ml-2 hover:text-primary">
                {item.name}
              </Link>
            ) : (
              <span className="ml-2 text-gray-900">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
