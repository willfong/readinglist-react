import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Moment from 'react-moment';
import 'moment-timezone';


class App extends Component {
    state = { inputText: '' }

    componentWillMount() {
        if (!this.props.auth.uid) {
            console.log('you need to be logged in!');
            this.props.history.push('/');
        }
        this.props.dataSelect(this.props.auth.uid);
    }

    _addData = () => {
        this.props.dataInsert(this.props.auth.uid, this.state.inputText);
        this.setState({inputText: ''});
    }

    _deleteBook = e => {
        this.props.dataDelete(this.props.auth.uid, e.target.id);
    }

    _renderList = () => {
        return  _.map(this.props.books, payload => {
            return (
                <li className="list-group-item" key={payload.key}>{payload.name} <span className="float-right"><small>Started: <Moment date={payload.startedOn} fromNow/></small> | <a href="#" onClick={this._deleteBook} id={payload.key}>Delete</a></span></li>
            )
        });
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <form className="form-inline">
                            <input 
                                type="text" 
                                className="form-control mb-2 mr-sm-2" 
                                id="newBookName" 
                                placeholder="Book Name" 
                                value={this.state.inputText}
                                onChange={e => this.setState({inputText: e.target.value})}
                                />
                            <button type="button" className="btn btn-primary mb-2" onClick={this._addData}>Add</button>
                        </form>
                    </li>
                    {this._renderList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    var books = []
    for (const key in state.data) {
        books.push({...state.data[key], key});
    }
    return {
        auth: state.auth,
        books
    }
}

export default connect(mapStateToProps, actions)(App);