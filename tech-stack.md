# 技術規範
本專案採用 Next.js（React 框架），以提升 SEO 與效能：
- **SSR + SSG** 混合架構
- **內建 API 路由**（/api）
- **使用 next/image 進行圖片優化**
❌ 不允許使用 Vite，因為：
1. Vite 主要為 CSR（客戶端渲染），SEO 效果不佳
2. 無內建 ISR、SSG 支持
3. 可能影響內部連結的預加載功能
