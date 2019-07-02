import React from 'react';

import './projects.scss'

export default () => (
  <section className='container' id='projects'>
    <h2 className='text-2'>Projects</h2>
    <div className='columns'>
      {
        projects.map((el, ix) => (
          <article className='column' key={ix}>
            <a className='card elevatable' href={el.link} target="_blank" rel="noopener noreferrer">
              <h3>{el.title}</h3>
              <p>{el.description}</p>
            </a>
          </article>
        ))
      }
    </div>
    <div className='columns'>
      <a className='elevatable text-1' href="https://github.com/lucianbc" target="_blank" rel="noopener noreferrer">More...</a>
    </div>
  </section>
)

const projects = [
  {
    title: 'Fairytale',
    description: 'Blogging and creative writing with a touch of AI.    ',
    link: 'https://github.com/lucianbc/fairytale'
  },
  {
    title: 'Drop',
    description: 'Arduino falling ball game.',
    link: 'https://github.com/lucianbc/drop'
  }
]