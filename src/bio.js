import React, {Component} from 'react'

export default class Bio extends Component {
  render () {
    return (
      <main className='container'>
        <header role='banner'>
          <h1>Henrik Joreteg</h1>
          <p>Bio and pics for conferences, etc.</p>
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
              <figcaption>Medium 600 x 600</figcaption>
            </figure>
          </a>

          <a href='http://static.joreteg.com/henrik_small.jpg'>
            <figure className='media-outlined'>
              <img width='100' height='100' src='http://static.joreteg.com/henrik_small.jpg' />
              <figcaption>Small 150 x 150</figcaption>
            </figure>
          </a>
        </p>

        <h2>Short Bio:</h2>
        <p>Progressive Web App developer, consultant, author, and educator. I believe the Web is the future of mobile and IoT.</p>

        <h2>Bio:</h2>
        <p>Henrik Joreteg is a JavaScript developer, consultant, author, speaker, and educator.</p>
        <p>He&apos;s currently doing <a href='http://consulting.joreteg.com/'>independent contracting</a> heavily focused on building <a href='http://stackoverflow.com/tags/progressive-web-apps/info'>Progressive Web Apps</a> with tools like Redux and React.</p>
        <p>Henrik is a huge proponent of the web as a mobile platform and wants to help developers push it to the next level. To that end, his recent post on <a href='https://joreteg.com/blog/why-i-switched-to-android'>abandoning iOS for the sake of the web</a> received much acclaim.</p>
        <p>He&apos;s also taught for <a href='http://frontendmasters.com/'>Frontend Masters</a> and <a href='http://conferences.oreilly.com/fluent/javascript-html-us/public/schedule/detail/47769'>O’Reilly</a>, co-developed the <a href='http://ampersandjs.com'>Ampersand.js framework</a>, authored <a href='http://humanjavascript.com'>“Human JavaScript”</a>, created <a href='https://talky.io/'>Talky.io</a>, and has open sourced libraries like <a href='http://simplewebrtc.com'>SimpleWebRTC</a> and <a href='https://www.npmjs.com/~henrikjoreteg'>several hundred others</a>.</p>
        <p>You can follow him on Twitter at <a href='http://twitter.com/henrikjoreteg'>@HenrikJoreteg</a> or keep an eye out for his posts at <a href='http://joreteg.com'>joreteg.com</a>.</p>

      </main>
    )
  }
}
