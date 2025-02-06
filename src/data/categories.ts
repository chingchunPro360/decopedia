export type MaterialItem = {
  id: string
  name: string
  description: string
  price: {
    unit: string
    materialCost: {
      min: number
      max: number
    }
    constructionCost: {
      min: number
      max: number
    }
  }
  variants: Array<{
    id: string
    name: string
    description: string
    imageUrl: string
  }>
  suppliers: Array<{
    id: string
    name: string
    website: string
    products: Array<{
      name: string
      url: string
    }>
  }>
  contractors: Array<{
    id: string
    name: string
    website: string
    specialties: string[]
  }>
  alternatives: Array<{
    id: string
    name: string
    description: string
    url: string
  }>
}

export type MaterialCategory = {
  id: string
  name: string
  description: string
  items: MaterialItem[]
}

export const materialCategories: MaterialCategory[] = [
  {
    id: 'stone',
    name: '石材',
    description: '大理石、花崗岩等天然石材',
    items: [
      {
        id: 'marble',
        name: '大理石',
        description: '大理石是一種變質岩，主要由碳酸鈣組成。因其獨特的紋理和光澤，常被用於高級建築的室內裝修。具有典雅的外觀，但需要定期保養維護。',
        price: {
          unit: '平方公尺',
          materialCost: {
            min: 2000,
            max: 8000
          },
          constructionCost: {
            min: 1500,
            max: 3000
          }
        },
        variants: [
          {
            id: 'white-marble',
            name: '白色大理石',
            description: '純淨的白色底色，帶有細緻的灰色紋理',
            imageUrl: '/images/materials/marble/white.jpg'
          },
          {
            id: 'beige-marble',
            name: '米色大理石',
            description: '溫暖的米色調，適合營造優雅空間',
            imageUrl: '/images/materials/marble/beige.jpg'
          },
          {
            id: 'grey-marble',
            name: '灰色大理石',
            description: '現代感十足的灰色調，搭配性強',
            imageUrl: '/images/materials/marble/grey.jpg'
          }
        ],
        suppliers: [
          {
            id: 'supplier-1',
            name: '永大石材',
            website: 'https://example.com/supplier1',
            products: [
              {
                name: '義大利白雲石',
                url: 'https://example.com/supplier1/product1'
              },
              {
                name: '希臘白大理石',
                url: 'https://example.com/supplier1/product2'
              }
            ]
          },
          {
            id: 'supplier-2',
            name: '冠軍石材',
            website: 'https://example.com/supplier2',
            products: [
              {
                name: '土耳其米黃大理石',
                url: 'https://example.com/supplier2/product1'
              }
            ]
          }
        ],
        contractors: [
          {
            id: 'contractor-1',
            name: '大眾石材工程',
            website: 'https://example.com/contractor1',
            specialties: ['地坪施工', '牆面施工', '拋光維護']
          },
          {
            id: 'contractor-2',
            name: '宏昌工程行',
            website: 'https://example.com/contractor2',
            specialties: ['精品住宅', '商業空間', '飯店裝修']
          }
        ],
        alternatives: [
          {
            id: 'granite',
            name: '花崗岩',
            description: '較大理石耐用，但價格相對較高',
            url: '/materials/stone/granite'
          },
          {
            id: 'artificial-stone',
            name: '人造石',
            description: '價格較實惠，且較易保養',
            url: '/materials/stone/artificial-stone'
          }
        ]
      },
      { id: 'granite', name: '花崗岩', description: '堅固耐用，適合廚房檯面' },
      { id: 'slate', name: '板岩', description: '自然質感，適合戶外空間' }
    ]
  },
  {
    id: 'brick',
    name: '磚材',
    description: '各式地磚、壁磚與文化石',
    items: [
      { id: 'ceramic', name: '瓷磚', description: '防水易清潔，適合浴室' },
      { id: 'porcelain', name: '拋光磚', description: '耐磨美觀，適合客廳' },
      { id: 'culture-stone', name: '文化石', description: '裝飾效果佳，適合牆面' }
    ]
  },
  {
    id: 'wood',
    name: '木材',
    description: '實木、合板與木地板',
    items: [
      { id: 'solid-wood', name: '實木', description: '天然溫潤，適合臥室' },
      { id: 'plywood', name: '合板', description: '價格實惠，適合隔間' },
      { id: 'laminate', name: '複合地板', description: '安裝便利，適合租屋' }
    ]
  }
]

export const spaceCategories = [
  {
    id: 'kitchen',
    name: '廚房',
    description: '廚房空間規劃與材料選擇',
    items: [
      { id: 'counter', name: '檯面', description: '耐高溫、防刮材質' },
      { id: 'cabinet', name: '櫥櫃', description: '防潮、好清理' },
      { id: 'floor', name: '地板', description: '防滑、防水材質' }
    ]
  },
  {
    id: 'bathroom',
    name: '浴室',
    description: '衛浴空間防水與材料應用',
    items: [
      { id: 'wall', name: '牆面', description: '防水、防霉處理' },
      { id: 'floor', name: '地板', description: '止滑、易清潔' },
      { id: 'cabinet', name: '浴櫃', description: '防潮、耐用材質' }
    ]
  },
  {
    id: 'living',
    name: '客廳',
    description: '客廳空間設計與材料搭配',
    items: [
      { id: 'floor', name: '地板', description: '耐磨、好清理' },
      { id: 'wall', name: '牆面', description: '裝飾、隔音處理' },
      { id: 'ceiling', name: '天花板', description: '造型、照明設計' }
    ]
  }
]
