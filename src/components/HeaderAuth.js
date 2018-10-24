import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HeaderAuth extends Component {
    _goToConsole = () => {
        this.props.history.push('/app');
    }
    render() {
        return (
            <div>
                <button type="button" className="btn btn-light" onClick={this._goToConsole}>Console</button>
                <button type="button" className="btn btn-light" onClick={this.props.authSignOut}>Logout</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}
export default connect(mapStateToProps, actions)(HeaderAuth);