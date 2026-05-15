import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Titles from './pages/Titles'
import Classics from './pages/Classics'
import Quotes from './pages/Quotes'
import QuotePage from './pages/QuotePage'
import GuiltyPleasures from './pages/GuiltyPleasures'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/titles" element={<Titles />} />
        <Route path="/classics" element={<Classics />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/:name" element={<QuotePage />} />
        <Route path="/guilty-pleasures" element={<GuiltyPleasures />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}