export async function getMaterialContent(materialId) {
  try {
    const response = await fetch(`/content/${materialId}.md`)
    if (!response.ok) {
      throw new Error('Content not found')
    }
    const content = await response.text()
    // 這裡可以添加 markdown 轉換邏輯
    return content
  } catch (error) {
    console.error('Error loading material content:', error)
    return ''
  }
}
