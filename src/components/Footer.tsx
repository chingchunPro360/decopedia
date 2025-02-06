export function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">關於建材百科</h3>
            <p className="text-gray-300">
              提供完整建材資訊，協助您選擇適合的裝修材料與工班
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">聯絡資訊</h3>
            <p className="text-gray-300">
              有任何問題？歡迎與我們聯繫
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© 2023 建材百科. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
