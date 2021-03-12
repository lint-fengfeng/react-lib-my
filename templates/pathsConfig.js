const path = require("path")

module.exports = [{
  type: 'add',
  path: 'lib/{{name}}/index.tsx',
  templateFile: path.join(__dirname, './', 'class.hbs')
}, {
  type: 'add',
  path: 'lib/{{name}}/index.scss',
  templateFile: path.join(__dirname, './', 'style.hbs')
}, {
  type: 'append',
  path: path.join(__dirname, '../lib', 'index.ts'),
  pattern: /\/\/ -- APPEND LIB TO HERE --/gi,
  template: "import {{name}} from './{{name}}'"
}, {
  type: 'append',
  path: path.join(__dirname, '../lib', 'index.ts'),
  pattern: /\/\/ -- APPEND EXPORT TO HERE --/gi,
  template: "  {{name}},"
}]

