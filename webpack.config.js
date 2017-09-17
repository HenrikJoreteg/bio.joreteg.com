require('babel-register')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const getConfig = require('hjs-webpack')
const Bio = require('./src/bio').default

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function (context) {
    var html = renderToStaticMarkup(React.createElement(Bio))
    return '<!doctype html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/><link rel="stylesheet" href="' + context.css + '"/></head><body>' + html + '</body>'
  }
})
