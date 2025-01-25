const fs = require('fs')
const path = require('path')

// Define the path to the public directory and the search.json file
const publicDir = path.join(__dirname, '../public')
const searchFile = path.join(publicDir, 'search.json')

// Ensure the public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true }) // Create the public directory if it doesn't exist
}

// Now you can safely write to search.json
const searchData = {
  /* your search data */
}

fs.writeFileSync(searchFile, JSON.stringify(searchData, null, 2), 'utf-8')
console.log('search.json file has been generated!')
