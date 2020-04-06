/*eslint-disable  @typescript-eslint/no-var-requires */
/*eslint-env node*/

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./index.html', './src/**/*.tsx'],

  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}
