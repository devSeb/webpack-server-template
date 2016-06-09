import React, { Component } from 'react';
import MessageList from './views/MessageList.js';
import { Link } from 'react-router'

class App extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div>
                 <div>
                     <h1>App</h1>
                     <ul>
                        <li><Link to="/dog">Dog</Link></li>
                        <li><Link to="/cat">Cat</Link></li>
                     </ul>
                     <MessageList />
                 </div>
            </div>
        );
    }

}



export default App;