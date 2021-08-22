import React from 'react';

import './projects.scss'

export default () => (
  <section className='container' id='projects'>
    <h2 className='text-2'>Projects</h2>
    <div className='columns'>
      {
        projects.map((el, ix) => (
          <article className='column' key={ix}>
            <a className='card elevatable' href={el.link} target="_blank" rel="noopener noreferrer" style={{height: '100%'}}>
              <h3>{el.title}</h3>
              <p>{el.description}</p>
              <p><b>Tech stack:</b> {el.techStack.join(', ')}</p>
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
    title: 'ReceiptScan',
    description: 'Android app that scans receipts and extracts the products and prices.',
    link: 'https://github.com/lucianbc/ReceiptScan',
    techStack: ['Jetpack Compose', 'RxJava', 'Room', 'Firebase OCR']
  },
  {
    title: 'Photos Portfolio',
    description: 'My photography portfolio',
    link: 'https://github.com/lucianbc/photo-portfolio',
    techStack: ['React', 'Gatsby', 'Netlify']
  }
]