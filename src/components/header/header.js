import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

class Header extends React.Component {
  render() {
    return (
      <header className='navbar text-1'>
        <div className='container columns'>
          <div className='navbar-brand column'>
            <Link className='navbar-item' to="/">LUCIAN BOACĂ</Link>
          </div>
          <nav className='navbar-menu column'>
            <ul>
              <li><a href="#home" className='navbar-item'>Home</a></li>
              <li><a href="#blog" className='navbar-item'>Blog</a></li>
              <li><a href="#projects" className='navbar-item'>Projects</a></li>
              <li><a href="#contact" className='navbar-item'>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
