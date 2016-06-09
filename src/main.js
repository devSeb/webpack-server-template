
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './components/App.js';
import Dog from './components/views/Dog.js';
import Cat from './components/views/Cat.js';

require('./main.scss');
//ReactDOM.render( <App />, document.getElementById('content'));

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="dog" component={Dog}/>
        <Route path="cat" component={Cat}/>
    </Router>
), document.getElementById('content'));