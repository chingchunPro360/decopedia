export function PopularMaterials() {
  const popularArticles = [
    {
      id: 1,
      title: '2025年最受歡迎的環保建材',
      description: '探索最新環保建材趨勢，為地球盡一份心力。',
      date: '2023-11-20'
    },
    {
      id: 2,
      title: '如何選擇適合的浴室地板材料',
      description: '從防滑、防水到耐用性，完整解析浴室地板選材重點。',
      date: '2023-11-18'
    },
    {
      id: 3,
      title: '廚房檯面材質大比拼',
      description: '石英石、人造石、不鏽鋼，哪種最適合您的廚房？',
      date: '2023-11-15'
    }
  ]

  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold mb-8">熱門文章</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {popularArticles.map((article) => (
          <a
            key={article.id}
            href={`/articles/${article.id}`}
            className="group block"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4 placeholder-bg">
              <div className="absolute inset-0 group-hover:bg-black/10 transition-colors" />
            </div>
            <div className="space-y-2">
              <span className="text-sm text-gray-500">{article.date}</span>
              <h3 className="text-xl font-semibold group-hover:text-primary">
                {article.title}
              </h3>
              <p className="text-gray-600">{article.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
