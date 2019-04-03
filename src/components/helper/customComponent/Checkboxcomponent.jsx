import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router';

class Checkboxcomponent extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {

        return (
            <label
                className={this.props.checkboxClass}>
                <input
                    type="checkbox"
                    name={this.props.checkboxName}
                    value={this.props.checkboxValue}
                    disabled={this.props.checkboxDisabled}
                    onChange={this.props.checkboxHandle.bind(this)}
                />
                {this.props.checkboxLable}</label>

        );
    }
}

export default Checkboxcomponent;