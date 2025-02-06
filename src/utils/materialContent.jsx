import { useState, useEffect } from 'react'

export default function useMaterialContent(materialId) {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await fetch(`/content/${materialId}.md`)
        if (!response.ok) {
          throw new Error('Content not found')
        }
        const text = await response.text()
        setContent(text)
        setLoading(false)
      } catch (err) {
        console.error('Error loading material content:', err)
        setError(err)
        setLoading(false)
      }
    }

    fetchContent()
  }, [materialId])

  return { content, loading, error }
}
