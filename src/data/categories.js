export const categories = {
  stone: {
    id: 'stone',
    name: '石材',
    description: '大理石、花崗岩等天然石材',
    type: 'material',
    items: [
      {
        id: 'marble',
        name: '大理石',
        description: `大理石是一種變質岩，主要由碳酸鈣組成。因其獨特的紋理和光澤，常被用於高級建築的室內裝修。大理石具有典雅的外觀，每塊石材都有獨特的紋路，能為空間增添自然且高貴的氣息。然而，大理石較為軟性且具有孔隙，需要定期保養維護，並避免接觸酸性物質。適合用於客廳、玄關等較少水漬的區域，不建議使用在廚房等易接觸油污的空間。`,
        price: {
          unit: '平方公尺',
          materialCost: {
            min: 2000,
            max: 8000,
            note: '價格依品質、產地而異'
          },
          constructionCost: {
            min: 1500,
            max: 3000,
            note: '包含底層處理、鋪設、填縫、拋光'
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
            url: '/category/stone/granite'
          },
          {
            id: 'artificial-stone',
            name: '人造石',
            description: '價格較實惠，且較易保養',
            url: '/category/stone/artificial-stone'
          }
        ]
      },
      // ... 其他石材項目
    ]
  },
  // ... 其他分類
}
