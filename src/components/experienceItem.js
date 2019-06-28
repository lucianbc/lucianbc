import React from 'react';
import ReactModal from 'react-modal';

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
    const {imgUrl, alt} = this.props;

    return (
      <div className='item'>
        <img src={imgUrl} alt={alt} onClick={this.handleOpenModal}/>
        <ReactModal 
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <p>Modal here</p>
        </ReactModal>
      </div>
    );
  }
}