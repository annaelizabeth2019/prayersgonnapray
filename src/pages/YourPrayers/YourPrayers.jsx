import React, { Component } from 'react';
// import styles from './YourPrayers.css'
import PrayerList from '../../components/PrayerList/PrayerList';
import headerImg from '../../images/sculpture.png'
import Loading from '../../components/Loading/Loading'

class YourPrayers extends Component {
    render() {
        return (
            <div className="YourPrayers flex-column">
                <div className="container row ">
                <div className="col s8 prayer-table z-depth-6">
                <header>
                    <h4>YOUR &nbsp; P R A Y E R S</h4>
                    {/* <img src={headerImg} alt="" class="your-prayers-header" /> */}
                </header>
                    <table className="highlight">
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
                    <div>
                        <Loading />
                    </div>} 
                        </tbody>
                    </table>
                </div>
                <div className="col s4">
                    <img src={ headerImg } alt="a happy little pink cloud" className="user-dash-cloud z-depth-3 hide-on-small-only"  />    
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