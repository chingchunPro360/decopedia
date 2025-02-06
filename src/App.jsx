import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import { ItemPage } from './pages/ItemPage.jsx' // 修改導入方式
import { CategoryPage } from './pages/CategoryPage.jsx' // 修改導入方式

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/category/:categoryId/:itemId" element={<ItemPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
