import { useState, useEffect } from 'react'

export function useData(filePath) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(`/api/data${filePath}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${filePath}`)
        return res.text()
      })
      .then((text) => {
        setData(text)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [filePath])

  return { data, loading, error }
}

export function parseCsv(text) {
  const lines = text.trim().split('\n')
  const headers = lines[0].split(',').map((h) => h.trim())
  const rows = lines.slice(1).map((line) => {
    const values = line.split(',').map((v) => v.trim())
    const obj = {}
    headers.forEach((h, i) => {
      obj[h] = values[i] || ''
    })
    return obj
  })
  return { headers, rows }
}