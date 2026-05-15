import { NavLink, Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center gap-6">
          <h1 className="text-2xl font-serif font-normal tracking-wide">
            <NavLink to="/" className="text-gray-800 no-underline">WebFlyx</NavLink>
          </h1>
          <span className="text-sm text-gray-500 font-sans">The Free Content Encyclopedia</span>
        </div>
      </header>
      <div className="flex flex-1 max-w-[1200px] mx-auto w-full">
        <Sidebar />
        <main className="flex-1 px-6 py-4 border-l border-gray-200 min-h-[80vh]">
          <Outlet />
        </main>
      </div>
      <footer className="border-t border-gray-300 text-center py-3 text-xs text-gray-500 font-sans">
        WebFlyx — Content is available under the terms of the WebFlyx License
      </footer>
    </div>
  )
}