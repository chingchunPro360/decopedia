import { Link } from 'react-router-dom'

function Breadcrumb({ items }) {
  return (
    <nav className="container mx-auto px-4 py-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link to="/" className="hover:text-blue-600">
            首頁
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            {item.path ? (
              <Link to={item.path} className="hover:text-blue-600">
                {item.name}
              </Link>
            ) : (
              <span className="text-gray-900">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
