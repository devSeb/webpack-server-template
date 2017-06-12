import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Message extends Component {

    static propTypes = {
        msg: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        var self = this;
        console.log("ok");
        return (
            <div style={{color: "ok"}}>
                <p> {self.props.msg} </p>

            </div>
        );
    }

}
