import React, { Component } from 'react';
import './YourPrayers.css'
import PrayerList from '../../components/PrayerList/PrayerList';
import headerImg from '../../images/sculpture.png'
import Loading from '../../components/Loading/Loading'
import GlitchBtn from '../../components/GlitchBtn/GlitchBtn'
import MapContainer from '../../components/Map/Map'

class YourPrayers extends Component {
    render() {
        return (
            <div className="YourPrayers">
                <div className=" row ">
                <div className="col col s12 m9 prayer-table z-depth-6 YP-container">
                <header>
                    <h4>YOUR &nbsp; P R A Y E R S</h4>
                </header>
                {this.props.prayers ? 
                    <table className="highlight">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Higher Power</th>
                                <th>Prayer</th>
                            </tr>
                        </thead>
                        <tbody>
                    {this.props.prayers.length >= 1 ? this.props.prayers.map((prayer, idx) => 
                        //This will make a table of prayers. It takes a moment to load
                        <PrayerList 
                        higherPower={prayer.higherPower}
                        text={prayer.text}
                        date={Date(prayer.createdAt)}
                        idx={idx}
                        />
                    ): 
                    //This is what it says when the user doesn't have a prayer!
                    <div>
                        <Loading />
                    </div>} 
                        </tbody>
                    </table>
                
            : <p> you have no prayers yet. </p>
                }
                </div>
                <div className="col s3 YP-container right">
                    <img src={ headerImg } alt="a sculpture of a holy woman" className="user-dash-pic responsive-img hide-on-small-only"  />    
                </div>
            </div>
            <div className="row center">
                <p>Perhaps you would like to </p><GlitchBtn link="prayerrequest"
                text="PRAY!" />
            </div>
            <div className="row">
            //check that a prayer has prayers and that there are locations
                {this.props.prayers && this.props.prayers.location ? 
                //the map component       
                    <MapContainer 
                    markers={this.props.prayers.location}
                    /> : 
                    //wah wah
                    <p>No Prayer locations</p>
                }  
            </div>
                {/* 
                - an anchor scroll
                - STATS!? */}
                
            </div>
            );
    }
};

export default YourPrayers