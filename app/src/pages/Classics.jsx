import { useData, parseCsv } from '../hooks/useData'

export default function Classics() {
  const { data, loading } = useData('/classics.csv')

  if (loading) return <div className="text-gray-400 animate-pulse">Loading...</div>

  const { headers, rows } = data ? parseCsv(data) : { headers: [], rows: [] }

  return (
    <div>
      <h2 className="text-2xl font-serif border-b border-gray-300 pb-2 mb-4">Classics</h2>
      <p className="text-sm text-gray-600 mb-4 font-sans">
        A list of classic movies with their directors and release years.
      </p>
      <table className="w-full border-collapse font-sans text-sm">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((h) => (
              <th key={h} className="border border-gray-300 px-3 py-2 text-left capitalize">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50">
              {headers.map((h) => (
                <td key={h} className="border border-gray-300 px-3 py-2">
                  {row[h]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}