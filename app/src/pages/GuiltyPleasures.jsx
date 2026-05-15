import { useData } from '../hooks/useData'
import ReactMarkdown from 'react-markdown'

export default function GuiltyPleasures() {
  const { data, loading } = useData('/guilty_pleasures.md')

  if (loading) return <div className="text-gray-400 animate-pulse">Loading...</div>

  return (
    <div>
      <h2 className="text-2xl font-serif border-b border-gray-300 pb-2 mb-4">Guilty pleasures</h2>
      <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mb-4 text-sm font-sans">
        <strong>Disclaimer:</strong> The existence of this list is officially denied.
      </div>
      <div className="prose prose-serif">
        {data && <ReactMarkdown>{data}</ReactMarkdown>}
      </div>
    </div>
  )
}