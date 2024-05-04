import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rgFilePath = path.resolve(__dirname, 'match.json')

export const getPadroesDoc = () => {
  try {
    const docData = fs.readFileSync(rgFilePath, 'utf8')
    return JSON.parse(docData)
  } catch (error) {
    console.error('Erro ao ler o arquivo de match:', error)
    return []
  }
}