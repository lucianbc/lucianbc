import React from 'react';

import "./experience.scss"

import imgUb from "../assets/unibuc.png"
import imgGtl from "../assets/gtl.jpeg"
import imgAmz from "../assets/logo-amazon-square.jpg"

export default () => (
  <section id="experience">
    <div className='container columns'>
      <article className='column'>
        <div>
          <h2 className='text-2'>
            Education
          </h2>

          <div>
            <div className='item'>
              <img src={imgUb} alt="Logo Unibuc"/>
            </div>  
          </div>
          
        </div>
      </article>
      <article className='column'>
        <div>
          <h2 className='text-2'>
            Work
          </h2>
          <div>
            <div className='item'>
              <img src={imgAmz} alt="Logo Amazon"/>
            </div>
            <div className='item'>
              <img src={imgGtl} alt="Logo Gtl"/>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
)