import React, {Component} from 'react'

export default class Bio extends Component {
  render () {
    return (
      <main className='container'>
        <header role='banner'>
          <h1>Henrik Joreteg</h1>
          <p>Definitive source for bio and pics for conferences, etc.</p>
        </header>

        <dl>
          <dt>pronunciation:</dt>
          <dd>hen-rick your-eh-tehg</dd>
          <dt>twitter:</dt>
          <dd><a href='http://twitter.com/henrikjoreteg'>@HenrikJoreteg</a></dd>
          <dt>github:</dt>
          <dd><a href='http://github.com/henrikjoreteg'>github.com/HenrikJoreteg</a></dd>
        </dl>

        <p>
          <a href='http://static.joreteg.com/henrik_large.jpg'>
            <figure className='media-outlined'>
              <img width='200' height='200' src='http://static.joreteg.com/henrik_large.jpg' />
              <figcaption>Large 1200 x 1200</figcaption>
            </figure>
          </a>

          <a href='http://static.joreteg.com/medium.jpg'>
            <figure className='media-outlined'>
              <img width='150' height='150' src='http://static.joreteg.com/henrik_medium.jpg' />
              <figcaption>Large 600 x 600</figcaption>
            </figure>
          </a>

          <a href='http://static.joreteg.com/henrik_small.jpg'>
            <figure className='media-outlined'>
              <img width='100' height='100' src='http://static.joreteg.com/henrik_small.jpg' />
              <figcaption>Large 150 x 150</figcaption>
            </figure>
          </a>
        </p>

        <h2>Bio:</h2>
        <p>Henrik Joreteg is a JavaScript developer, author, speaker, and educator.</p>
        <p>He has pioneered many techniques and tools for building JavaScript apps especially those with a realtime aspect. Most recently, he lead development on the <a href='http://ampersandjs.com'>Ampersand.js framework</a> that has seen rapid adoption by the likes of WhatsApp, FlipKart, Shutterfly and many others. He also created the <a href="http://simplewebrtc.com">SimpleWebRTC</a> library, <a href="https://talky.io/">Talky.io</a>, is the author of the book <a href="http://humanjavascript.com">“Human JavaScript”</a>, and frequently speaks at JS events.</p>
        <p>Having released <a href='https://www.npmjs.com/~henrikjoreteg'>over 200 JavaScript libraries</a>, Henrik is a huge proponent of open source and wants to help developers push the web to the next level.</p>
        <p>You can follow him on Twitter at <a href='http://twitter.com/henrikjoreteg'>@HenrikJoreteg</a> or keep an eye out for his posts at <a href='http://joreteg.com'>joreteg.com</a>.</p>

      </main>
    )
  }
}
