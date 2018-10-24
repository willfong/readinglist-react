import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HeaderLogin extends Component {
    render() {
        return (
            <div>
                <Link className="btn btn btn-light" to="/login">
                    Login
                </Link>
                <a href="#" className="social-signin" onClick={this.props.authSignIn}>
                    <i className="fa fa-google social-signin-icon" />
                    Sign In With Google
                </a>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, actions)(HeaderLogin);