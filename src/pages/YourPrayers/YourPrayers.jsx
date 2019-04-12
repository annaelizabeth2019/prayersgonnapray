import React, { Component } from 'react';
import styles from './YourPrayers.css'
import PrayerList from '../../components/PrayerList/PrayerList';
import happyLittleCloud from '../../images/cloud.png'

class YourPrayers extends Component {
    render() {
        return (
            <div className="YourPrayers">
                <div className="container row">
                <header>
                    <h1>Your Prayers!</h1>
                </header>
                <div className="col s6">
                    <table>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Higher Power</th>
                                <th>Prayer</th>
                            </tr>
                        </thead>
                        <tbody>
                    {this.props.prayers.length > 1 ? this.props.prayers.map((prayer, idx) => 
                        //This will make a table of prayers. It takes a moment to load
                        <PrayerList 
                        higherPower={prayer.higherPower}
                        text={prayer.text}
                        isx={idx}
                        />
                    ): 
                    //This is what it says when the user doesn't have a prayer!
                    <p>no prayers</p>} 
                        </tbody>
                    </table>
                </div>
                <div className="col s6">
                    <img src={ happyLittleCloud } alt="a happy little pink cloud" className="user-dash-cloud"  />    
                </div>
            </div>
                {/* 
                - an anchor scroll

                - a component that renders a map of my prayers

                - STATS!? */}
                
            </div>
            );
    }
};

export default YourPrayers