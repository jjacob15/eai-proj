import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement(document.getElementById('root'));

export default class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: props.isModalOpen,
    };

    this.handleYes = this.handleYes.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps(nxt) {
    const { modalIsOpen } = this.state;
    if (modalIsOpen !== nxt.isModalOpen) {
      this.setState({
        modalIsOpen: nxt.isModalOpen,
      });
    }
  }

  handleYes() {
    this.props.handleDelete();
  }

  handleClose() {
    this.props.handleCloseModal();
  }

  render() {
    const { title } = this.props;
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Delete program">
        <div style={{ position: 'absolute', top: 0, right: 5 }}>
          <i className="fa fa-times close-card" onClick={this.closeModal} onKeyPress={this.closeModal} />
        </div>
        <div className="modal-title">Delete program</div>
        <div>
          <p>
            Are you sure you would like to delete
            {title}? It will no longer be available to any user.
          </p>
        </div>
        <div className="btn-group" style={{ float: 'right' }}>
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={this.handleYes}>
            Yes
          </button>
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={this.handleClose}>
            Cancel
          </button>
        </div>
      </Modal>
    );
  }
}
