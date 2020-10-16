const fs = require('fs-extra');
const concat = require('concat');

(async function build(){
  const files = [
    './dist/socialApp/runtime.js',
    './dist/socialApp/polyfills.js',
    './dist/socialApp/main.js'
  ]
  await fs.ensureDir('elements');
  await concat(files, 'elements/social-buttons.js');
  await fs.copyFile('./dist/socialApp/styles.css', 'elements/styles.css');

})()
