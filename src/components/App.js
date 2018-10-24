import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import TodoLineItem from './TodoLineItem';

class App extends Component {
    state = { inputText: '' }

    componentWillMount() {
        if (!this.props.auth.uid) {
            console.log('you need to be logged in!');
            this.props.history.push('/');
        }
        this.props.dataSelect();
    }

    _addData = () => {
        this.props.dataInsert(this.props.auth.uid, this.state.inputText);
        this.setState({inputText: ''});
    }

    _renderList = () => {
        return  _.map(this.props.data, (value, key) => {
            return <TodoLineItem key={key} id={key} value={value} />
        });
    }
    render() {
        return (
            <div>
                <Header />
                <div>
                    <form className="form-inline">
                        <div className="form-group mb-2">
                            <label className="sr-only">Say Something</label>
                            <input
                                type="text"
                                className="form-control-plaintext"
                                id="messageText"
                                placeholder="Hello world!"
                                value={this.state.inputText}
                                onChange={e => this.setState({inputText: e.target.value})}
                                />
                        </div>
                    </form>
                    <button className="btn btn-primary mb-2" onClick={this._addData}>Post</button>
                </div>
                <div>
                    <ul className="list-group">
                        {this._renderList()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        data: state.data
    }
}

export default connect(mapStateToProps, actions)(App);