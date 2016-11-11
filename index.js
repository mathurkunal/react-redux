import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configurestore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import routes from './routes';
import {loadCourses} from './actions/courseactions';
import {loadAuthors} from './actions/authoractions';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());



ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('app'));
