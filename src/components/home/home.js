import React from 'react';

import Links from '../links/links';

import coderImg from '../../assets/undraw_coding_6mjf.svg';
import './home.scss';

export default () => (
  <main id="home">
    <div className='container columns'>
      <div className='column'>
        <p>Hi there,</p>
        <p className='text-2'>I'm Lucian</p>
        <p>Software Developer with a passion for <b>high quality code</b> that solves <b>real world problems</b>.</p>
        <Links />
      </div>
      <div className='column'>
        <img className='hero' src={coderImg} alt="Illustration"/>
      </div>
    </div>
  </main>
)