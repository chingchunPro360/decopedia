import { promises as fs } from 'fs'
import path from 'path'

export async function getMaterialContent(materialId: string) {
  const fullPath = path.join(process.cwd(), 'src/data/materials', `${materialId}.mdx`)
  
  try {
    const fileContents = await fs.readFile(fullPath, 'utf8')
    return fileContents
  } catch (error) {
    console.error(`Error reading material content for ${materialId}:`, error)
    return ''
  }
}
