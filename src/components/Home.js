import React, { Component } from 'react';
import Header from './Header';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header {...this.props} />
                <div>
                    <h1>React Redux Firebase</h1>
                    <p className="lead">
                        Use this document as a way to quickly start any new project.<br /> 
                        All you get is this text and a mostly barebones HTML document.
                    </p>
                    <p>React Redux Firebase</p>
                </div>
            </div>
        )
    }
}