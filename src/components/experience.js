import React from 'react';

import "./experience.scss"

import imgUb from "../assets/unibuc.png"
import imgGtl from "../assets/gtl.jpeg"
import imgAmz from "../assets/logo-amazon-square.jpg"

import Item from "./experienceItem"

export default () => (
  <section id="experience">
    <div className='container columns'>
      <article className='column'>
        <div>
          <h2 className='text-2'>
            Education
          </h2>

          <div>
            <Item imgUrl={imgUb} alt="Logo Unibuc" />
          </div>
          
        </div>
      </article>
      <article className='column'>
        <div>
          <h2 className='text-2'>
            Work
          </h2>
          <div>
            <Item imgUrl={imgAmz} alt="Logo Amazon" />
            <Item imgUrl={imgGtl} alt="Logo Gtl" />
          </div>
        </div>
      </article>
    </div>
  </section>
)