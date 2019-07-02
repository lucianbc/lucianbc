import React from 'react';

import "./contact.scss"
import Links from "../links/links"

export default () => (
  <section id="contact" className='accent-background'>
    <div className='container'>
      <h2 className='text-2'>Contact</h2>
      <p>Find me on social networks: </p>
      <Links color='#fff'/>
      <p>You can also contact me on email at <a href="mailto:lucianboaca97@gmail.com">lucianboaca97@gmail.com.</a></p>
    </div>
  </section>
)