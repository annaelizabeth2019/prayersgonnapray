//this is where a user can view all their prayers

import React, { Component } from 'react';
import './YourPrayers.css';
import happyLittleCloud from '../../images/cloud.png'

const YourPrayers = (props) => {
    return (
        <div className="YourPrayers">
            <header>
            <h1>Your Prayers!</h1>
            </header>
            {/* a component that renders a list of prayers */}

            <img src={ happyLittleCloud } alt="a happy little pink cloud"  />
            {/* an anchor scroll

            a component that renders a map of my prayers

            STATS!? */}
            
        </div>
        );  
};

export default YourPrayers