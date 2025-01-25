import fs from 'fs'

const filePath = './public/search.json'

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, '{}', 'utf-8')
}

console.log('Ensured public/search.json exists.')
