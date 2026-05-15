import { useParams } from 'react-router-dom'
import { useData } from '../hooks/useData'
import ReactMarkdown from 'react-markdown'

export default function QuotePage() {
  const { name } = useParams()
  const { data, loading } = useData(`/quotes/${name}.md`)

  if (loading) return <div className="text-gray-400 animate-pulse">Loading...</div>

  return (
    <div>
      <h2 className="text-2xl font-serif border-b border-gray-300 pb-2 mb-4 capitalize">
        {name} — Quotes
      </h2>
      <div className="prose prose-serif">
        {data && <ReactMarkdown>{data}</ReactMarkdown>}
      </div>
    </div>
  )
}