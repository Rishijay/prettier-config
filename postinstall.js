const package = require('./package.json')

console.log('End of installation');

//Example using properties from package.json
if (package.version.includes('alpha')) {
  console.log('Warning: Alpha version!')
}