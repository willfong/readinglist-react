import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TodoLineItem extends Component {
  state = { edit: false }

  _editText = () => {
    this.setState({edit: this.props.value.data});
  }

  _handleFocus = e => {
    e.target.select();
  }

  _delData = () => {
    this.props.dataDelete(this.props.auth.uid, this.props.id);
  }

  _updateData = () => {
    this.props.dataUpdate(this.props.auth.uid, this.props.id, this.state.edit);
    this.setState({edit: false});
  }

  _renderText = () => {
    if (this.state.edit) {
      return (
        <div>
          <input
            type="text"
            className="form-control-plaintext"
            id="messageText"
            placeholder="Hello world!"
            value={this.state.edit}
            onChange={e => this.setState({edit: e.target.value})}
            onFocus={this._handleFocus}
            autoFocus
          />
          <button 
            type="button" 
            className="btn btn-outline-secondary btn-sm" 
            disabled={this.state.edit === this.props.value.data}
            onClick={this._updateData}
          >
            Update
          </button>
        </div>
        
      )
    } else {
      return (
        <a id={this.props.id} href="#" onClick={this._editText}>
          {this.props.value.data}
        </a>
      );
    }
  }

  render() {
    return (
      <li className="list-group-item">
        {this._renderText()}
        <span className="float-right">
            <button type="button" className="btn btn-outline-danger btn-sm" onClick={this._delData} id={this.props.id}>&#10006;</button>
        </span>
      </li>
    )
  }
}

function mapStateToprops(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToprops, actions)(TodoLineItem);