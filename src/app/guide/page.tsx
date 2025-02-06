export default function GuidePage() {
  const guides = [
    {
      id: 1,
      title: '新手裝修指南',
      description: '從預算規劃到工程驗收，一次了解裝修流程。'
    },
    {
      id: 2,
      title: '建材選購要點',
      description: '教你如何選購適合的建材，避免踩雷。'
    },
    {
      id: 3,
      title: '防水工程重點',
      description: '浴室、廚房防水工程的關鍵細節。'
    }
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">裝修指南</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map((guide) => (
          <div key={guide.id} className="block">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4 placeholder-bg" />
            <h2 className="text-2xl font-semibold mb-2">
              {guide.title}
            </h2>
            <p className="text-gray-600">{guide.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
