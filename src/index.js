import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home';
import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="content">
                <Switch>
                    <Route path="/app" component={App} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();