import React, { Component } from 'react';
import './YourPrayers.css'
import PrayerList from '../../components/PrayerList/PrayerList';
import headerImg from '../../images/sculpture.png'
import Loading from '../../components/Loading/Loading'
import GlitchBtn from '../../components/GlitchBtn/GlitchBtn'
import MapContainer from '../../components/Map/Map'
// import prayerService from '../../utils/prayerService'
import { CollapsibleItem, Collapsible } from 'react-materialize'
import EditForm from '../../components/EditForm/EditForm'

class YourPrayers extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''}
      }
    
      updateMessage = (msg) => {
        this.setState({message: msg});
      }

    render() {
        return (
            <div className="YourPrayers">
                <div className=" row ">
                <div className="col col s12 m9 prayer-table z-depth-6 YP-container">
                    <header>
                        <h4>YOUR &nbsp; P R A Y E R S</h4>
                    </header> 
                    
                        <Collapsible>
                        {this.props.prayers && this.props.prayers.length >= 1 ? this.props.prayers.map((prayer, idx) => 
                        //This will make a table of prayers. It takes a moment to load
                            <CollapsibleItem 
                            className="black" 
                            header={
                                <PrayerList 
                                className="black"
                                higherPower={prayer.higherPower}
                                text={prayer.text}
                                date={Date(prayer.createdAt)}
                                idx={idx}
                            />}>
                                    <EditForm 
                                    {...this.props} 
                                    location={prayer.location}
                                    updateMessage={this.updateMessage}
                                    higherPower={prayer.higherPower}
                                    text={prayer.text}
                                    date={Date(prayer.createdAt)}
                                    key={idx}
                                    id={prayer._id}
                                    />

                            </CollapsibleItem>)
                        
                    : 
                    //This is what it says when the user doesn't have a prayer.
                    <div>
                        <Loading />
                    </div>} 
                    </Collapsible>
                <div className="row center">
                <GlitchBtn link="prayerrequest"
                text="PRAY!" />
            </div>
                </div>
                <div className="col s3 YP-container right">
                    <img src={ headerImg } alt="a sculpture of a holy woman" className="user-dash-pic responsive-img hide-on-small-only"  />    
                </div>
            </div>
            <div></div>
            <div className="row">
                {this.props.prayers ? 
                //the map component       
                    <MapContainer 
                    markers={this.props.prayers.map(prayer => prayer.location)}
                    /> :
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