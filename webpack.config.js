require('babel/register')
var React = require('react')
var getConfig = require('hjs-webpack')
var Bio = require('./src/bio')

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function (context) {
    var html = React.renderToStaticMarkup(React.createElement(Bio))
    return '<!doctype html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/><link rel="stylesheet" href="' + context.css + '"/></head><body>' + html + '</body>'
  }
})
