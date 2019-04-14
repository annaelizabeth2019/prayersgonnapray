import React, { Component } from 'react';
import './YourPrayers.css'
import PrayerList from '../../components/PrayerList/PrayerList';
import headerImg from '../../images/sculpture.png'
import Loading from '../../components/Loading/Loading'
import GlitchBtn from '../../components/GlitchBtn/GlitchBtn'

class YourPrayers extends Component {
    render() {
        return (
            <div className="YourPrayers flex-column">
                <div className="container row">
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
                    <img src={ headerImg } alt="a sculpture of a holy woman" className="user-dash-pic right hide-on-small-only"  />    
                </div>
            </div>
                <p>Perhaps you would like to </p><GlitchBtn link="'/prayerrequest'"/>
                {/* 
                - an anchor scroll

                - a component that renders a map of my prayers

                - STATS!? */}
                
            </div>
            );
    }
};

export default YourPrayers