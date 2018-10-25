import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
    _goToConsole = () => {
        this.props.history.push('/app');
    }

    authenticate = () => {
        if (this.props.auth.uid) {
            return (
                <button type="button" className="btn btn-light" onClick={this._goToConsole}>Go to your List</button>
            )
        } else {
            return (
                <a href="#" className="social-signin" onClick={this.props.authSignIn}>
                    <i className="fa fa-google social-signin-icon" />
                    Sign In With Google
                </a>
            )
        }
    }

    render() {
        return (
            <div>
                <p className="lead">Keep track of the books you have read, and what you'll read next. Share with the world.</p>
                <p>Just a pet project.</p>
                {this.authenticate()}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps, actions)(Home);
  