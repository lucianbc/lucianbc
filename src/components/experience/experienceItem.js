import React from 'react';
import ReactModal from 'react-modal';
import { FaCalendarAlt, FaMapMarker, FaAngleRight, FaTimes } from 'react-icons/fa';
import Img from "gatsby-image"

import './experienceItem.scss';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    ReactModal.setAppElement('#main');
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    const { model } = this.props;
    // debugger;
    return (
      <div className='item elevatable'>
        <span onClick={this.handleOpenModal}>
          <Img 
            fluid={model.optImg.childImageSharp.fluid} 
            alt={model.alt}
            className='itmImage' 
          />
        </span>
        

        <ReactModal 
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          {/* <img src={model.image} alt={model.alt} /> */}
          <Img 
            fluid={model.optImg.childImageSharp.fluid} 
            alt={model.alt}
            className='itmImage' 
          />
          <FaTimes className='closeBtn' onClick={this.handleCloseModal}/>
          {this.title(model)}
          <div className='detail'><FaCalendarAlt/>{model.period}</div>
          {model.location ? <div className='detail'><FaMapMarker/>{model.location}</div> : null}
          <div className='bullets'>
            {model.bullets.map((el, ix) => <div className='detail' key={ix}><FaAngleRight/><span dangerouslySetInnerHTML={{__html: el}}></span></div>)}
          </div>
        </ReactModal>
      </div>
    );
  }

  title(model) {
    if (model.title) {
      return <h3>{model.title}  <br/>@<br/> {model.vendor}</h3>
    } else {
      return <h3>{model.vendor}</h3>
    }
  }
}
