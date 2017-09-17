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
          <a href='https://static.joreteg.com/henrik_large.jpg'>
            <figure className='media-outlined'>
              <img width='200' height='200' src='https://static.joreteg.com/henrik_large.jpg' />
              <figcaption>Large 1200 x 1200</figcaption>
            </figure>
          </a>

          <a href='https://static.joreteg.com/medium.jpg'>
            <figure className='media-outlined'>
              <img width='150' height='150' src='https://static.joreteg.com/henrik_medium.jpg' />
              <figcaption>Medium 600 x 600</figcaption>
            </figure>
          </a>

          <a href='https://static.joreteg.com/henrik_small.jpg'>
            <figure className='media-outlined'>
              <img width='100' height='100' src='https://static.joreteg.com/henrik_small.jpg' />
              <figcaption>Small 150 x 150</figcaption>
            </figure>
          </a>
        </p>

        <h2>Short Bio:</h2>
        <p>Progressive Web App developer, consultant, author, and educator. I believe the Web is the future of mobile and IoT.</p>

        <h2>Bio:</h2>
        <p>Henrik Joreteg is a JavaScript developer, consultant, author, speaker, and educator.</p>
        <p>He does <a href='http://consulting.joreteg.com/'>independent contracting</a> heavily focused on building <a href='http://stackoverflow.com/tags/progressive-web-apps/info'>Progressive Web Apps</a> with tools like Redux and React/Preact. Currently he&apos;s working with Starbucks; before that <a href='https://www.groovehq.com'>Groove</a>, Microsoft, and others.</p>

        <p>Henrik is a huge proponent of the web as a mobile app platform and wants to help developers push it to the next level. To that end, you may have seen his blog posts on topics such as <a href='https://joreteg.com/blog/why-i-switched-to-android'>abandoning iOS for the sake of the web</a> or <a href='https://joreteg.com/blog/installing-web-apps-for-real'>installng web apps</a> or seen some of his talks, such as this one on <a href='https://www.youtube.com/watch?v=okk0BGV9oY0'>pocket-sized JavaScript</a>. He has also taught workshops for <a href='http://frontendmasters.com/'>Frontend Masters</a> and <a href='http://conferences.oreilly.com/fluent/javascript-html-us/public/schedule/detail/47769'>O&apos;Reilly</a>, co-developed the <a href='http://ampersandjs.com'>Ampersand.js framework</a>, authored <a href='http://humanjavascript.com'>Human JavaScript</a>, created <a href='https://talky.io/'>Talky.io</a>, and has open sourced libraries such as <a href='http://simplewebrtc.com'>SimpleWebRTC</a>, <a href='https://github.com/HenrikJoreteg/hjs-webpack'>hjs-webpack</a>, and <a href='https://www.npmjs.com/~henrikjoreteg'>many others</a>.</p>
        <p>You can follow him on Twitter at <a href='http://twitter.com/henrikjoreteg'>@HenrikJoreteg</a> or keep an eye out for his posts at <a href='http://joreteg.com'>joreteg.com</a>.</p>

      </main>
    )
  }
}
