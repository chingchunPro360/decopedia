export function Hero() {
  return (
    <div className="relative h-[600px] placeholder-bg">
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              專業建材知識庫
              <br />
              打造理想居家空間
            </h1>
            <p className="text-xl mb-8">
              從選材到施工，一站式解決您的裝修疑難
            </p>
            <div className="space-x-4">
              <a 
                href="/materials" 
                className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium"
              >
                探索建材
              </a>
              <a 
                href="/guide" 
                className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium"
              >
                裝修指南
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
