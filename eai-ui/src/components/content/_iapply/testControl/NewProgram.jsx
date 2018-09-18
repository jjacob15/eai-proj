import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { setTestControlView, saveTcProgram } from '../../../../actions';

class NewProgram extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      desc: '',
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSave = this.onSave.bind(this);

    this.input = React.createRef();
  }

  componentDidMount() {
    this.input.current.focus();
  }

  onCancel() {
    this.props.onCancel(null);
  }

  onSave() {
    const { title, desc } = this.state;
    this.props.onSave(title, desc);
  }

  onTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onDescChange(e) {
    this.setState({
      desc: e.target.value,
    });
  }

  render() {
    const { title, desc } = this.state;
    const saveBtn = classnames({
      'btn btn-primary btn-sm': true,
      'btn-disabled': title === '',
    });
    return (
      <div className="container-fluid">
        <div className="row margin-bottom">
          <div className="col-md-4 col-xl-4">
            <h5>New Program</h5>
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Name"
                onChange={this.onTitleChange}
                value={title}
                ref={this.input}
              />
            </div>
            <div className="input-group">
              <textarea
                rows="4"
                cols="50"
                placeholder="Description"
                className="form-control form-control-sm"
                onChange={this.onDescChange}
                value={desc}
              />
            </div>
            <div className="btn-group">
              <button
                type="button"
                className={saveBtn}
                style={{ marginRight: '1em' }}
                onClick={this.onSave}
                disabled={title === ''}>
                Save
              </button>
              <button type="button" className="btn btn-default btn-sm" onClick={this.onCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function actions(dispatch) {
  return {
    onCancel: () => dispatch(setTestControlView(null)),
    onSave(name, desc) {
      dispatch(saveTcProgram(name, desc));
    },
  };
}
export default connect(
  () => ({}),
  actions
)(NewProgram);
