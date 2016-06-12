import React, { Component } from 'react';
import MessageList from './views/MessageList.js';
import { Link } from 'react-router'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TestActions from './redux/actions/TestActions';

/** State **/
const mapStateToProps = (state) => ({
            element: state.textTest.element
});
/** Action **/
const mapDispatchToProps = (dispatch) => ({
        TestActions: bindActionCreators(TestActions, dispatch)
});


class App extends Component {

    static propTypes = {};

    constructor() {
        super();
    }


    render() {
        console.log("element", this.props.element.text);

        return(
            <div>
                <div>
                    <h1>App</h1>
                    <p> {"my props : " + this.props.element.text} </p>
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
export default  connect(mapStateToProps, mapDispatchToProps)(App);
