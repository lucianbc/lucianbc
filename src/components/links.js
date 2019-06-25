import React from 'react';

import './links.scss'

import gh from '../assets/Octicons-mark-github.svg'
import lin from '../assets/linkedin-logo.svg'

export default () => (
  <div className="links">
    <IconLink to='https://github.com/lucianbc' color='#000' alt='GitHub' icon={gh} id="gitHub"/>
    <IconLink to='https://www.linkedin.com/in/lucianbc' color = '#000' alt='LinkedIn' icon={lin} id="linkedIn"/>
  </div>
)

const IconLink = ({to, icon, color, alt, id}) => (
  <a className='anim-btn media-btn' href={to} id={id}>
    <svg viewBox="0 0 146 146">
      <circle className="contour" fill="none" stroke={color} strokeWidth="3" strokeMiterlimit="10" cx="73" cy="73" r="71"  transform="rotate(-90, 73, 73)"/>
      <path fill="none" stroke={color} strokeMiterlimit="10" d="M142.5 73c0 38.39-31.12 69.5-69.5 69.5 -38.37  0-69.5-31.11-69.5-69.5C3.5 34.63 34.63 3.5 73 3.5 111.38 3.5 142.5 34.63 142.5 73z"/>
    </svg>
    <div className='iconContainer'>
      <img src={icon} alt={alt}/>
    </div>
  </a>
)