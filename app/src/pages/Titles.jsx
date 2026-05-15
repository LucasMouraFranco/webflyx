import { useData } from '../hooks/useData'
import ReactMarkdown from 'react-markdown'

export default function Titles() {
  const { data, loading } = useData('/titles.md')

  if (loading) return <div className="text-gray-400 animate-pulse">Loading...</div>

  return (
    <div>
      <h2 className="text-2xl font-serif border-b border-gray-300 pb-2 mb-4">Titles</h2>
      <p className="text-sm text-gray-600 mb-4 font-sans">
        The following is a list of titles in the WebFlyx collection.
      </p>
      <div className="prose prose-serif">
        {data && <ReactMarkdown>{data}</ReactMarkdown>}
      </div>
    </div>
  )
}