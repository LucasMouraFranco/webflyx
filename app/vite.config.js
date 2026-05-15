import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const dataDir = path.resolve(__dirname, '..')

function dataPlugin() {
  return {
    name: 'serve-data',
    configureServer(server) {
      server.middlewares.use('/api/data', (req, res) => {
        const filePath = path.join(dataDir, req.url.replace(/^\//, ''))
        if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
          res.statusCode = 404
          res.end('Not found')
          return
        }
        const ext = path.extname(filePath)
        const contentTypes = {
          '.md': 'text/plain',
          '.csv': 'text/plain',
          '.html': 'text/html',
          '.txt': 'text/plain',
        }
        res.setHeader('Content-Type', contentTypes[ext] || 'text/plain')
        res.end(fs.readFileSync(filePath))
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), dataPlugin()],
})