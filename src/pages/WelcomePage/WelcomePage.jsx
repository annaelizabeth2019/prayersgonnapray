import React, { Component } from 'react';
import './WelcomePage.scss';
import logo from '../../images/ezgif.com-crop.gif';
//the map
import MapContainer from '../../components/Map/Map'

class WelcomePage extends Component {
    render() {
        return (
            <div>

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
                {/* <MapContainer markers={this.props.locs} /> */}
            </div>
            );
        }
};

export default WelcomePage