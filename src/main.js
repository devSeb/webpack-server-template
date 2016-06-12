
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './components/App.js';
import Dog from './components/views/Dog.js';
import Cat from './components/views/Cat.js';


import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import textTest from './components/redux/reducers/textTest'

const rootReducer = combineReducers({
    textTest
});
let store = createStore(rootReducer);


require('./main.scss');

render((
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="dog" component={Dog}/>
        <Route path="cat" component={Cat}/>
    </Router>
    </Provider>
), document.getElementById('content'));