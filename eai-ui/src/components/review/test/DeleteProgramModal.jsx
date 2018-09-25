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

Modal.defaultStyles.overlay.backgroundColor = 'rgba(111, 111, 111, 0.75)';
Modal.defaultStyles.overlay.zIndex = '1000';

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
        <div style={{ marginTop: '20px' }}>
          <p>
            Are you sure you would like to delete <b>{title}</b>? It will no longer be available to any user.
          </p>
        </div>
        <div style={{ float: 'right' }}>
          <button type="button" className="btn btn-primary btn-sm" onClick={this.handleYes}>
            Yes
          </button>
          <button type="button" className="btn btn-link btn-sm" onClick={this.handleClose}>
            Cancel
          </button>
        </div>
      </Modal>
    );
  }
}
