const fs = require('fs')
const path = require('path')

const searchIndex = {} // Your logic to generate the search index
const outputPath = path.join(__dirname, '../public/search.json')

fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2), 'utf-8')
console.log('search.json has been generated')
