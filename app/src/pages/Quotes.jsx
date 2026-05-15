import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const quoteFiles = ['dune', 'starwars']

export default function Quotes() {
  return (
    <div>
      <h2 className="text-2xl font-serif border-b border-gray-300 pb-2 mb-4">Quotes</h2>
      <p className="text-sm text-gray-600 mb-4 font-sans">
        Memorable quotes from movies in the collection.
      </p>
      <ul className="space-y-2">
        {quoteFiles.map((name) => (
          <li key={name}>
            <Link
              to={`/quotes/${name}`}
              className="text-blue-700 hover:underline font-sans text-sm capitalize"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}