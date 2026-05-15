import { useData } from '../hooks/useData'
import ReactMarkdown from 'react-markdown'

export default function About() {
  const { data: mdData, loading: mdLoading } = useData('/advert.md')
  const { data: htmlData, loading: htmlLoading } = useData('/advert.html')

  if (mdLoading || htmlLoading) return <div className="text-gray-400 animate-pulse">Loading...</div>

  return (
    <div>
      <h2 className="text-2xl font-serif border-b border-gray-300 pb-2 mb-4">About WebFlyx</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-serif mb-2">Markdown Version</h3>
          <div className="border border-gray-200 rounded p-4 bg-gray-50">
            <div className="prose prose-serif">
              {mdData && <ReactMarkdown>{mdData}</ReactMarkdown>}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-serif mb-2">HTML Version</h3>
          <div
            className="border border-gray-200 rounded p-4 bg-gray-50"
            dangerouslySetInnerHTML={{ __html: htmlData || '' }}
          />
        </div>
      </div>
    </div>
  )
}