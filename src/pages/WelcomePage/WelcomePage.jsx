import React, { Component } from 'react';
import './WelcomePage.scss';
import logo from '../../images/ezgif.com-crop.gif';

class WelcomePage extends Component {
    render() {
        return (
            <header className="App-header">
            <div className="WelcomePage">
                <p>
                <code>W e l c o m e , &nbsp; P r a y e r .</code>
                </p>
                <img src={logo} className="App-logo" alt="logo" />
                <br /><br />
                <p>
                    <code> プ レ ー イ し ま し ょ う</code>
                </p>
            </div>
            </header>
            );
        }
};

export default WelcomePage