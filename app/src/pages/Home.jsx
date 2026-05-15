import { useData } from '../hooks/useData'
import ReactMarkdown from 'react-markdown'

export default function Home() {
  const { data, loading } = useData('/contents.md')

  if (loading) return <div className="text-gray-400">Loading...</div>

  return (
    <div>
      <h2 className="text-2xl font-serif border-b border-gray-300 pb-2 mb-4">WebFlyx</h2>
      <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6 text-sm font-sans">
        <strong>Welcome to WebFlyx,</strong> the free-content encyclopedia that anyone can read.
        This wiki covers the entire WebFlyx content catalog.
      </div>
      {data && <ReactMarkdown>{data}</ReactMarkdown>}
    </div>
  )
}