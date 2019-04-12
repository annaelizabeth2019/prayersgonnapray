import React, {Component} from 'react'
import styles from './PrayerBoard.css'
import PrayerCard from '../PrayerCard/PrayerCard'
import PrayerService from '../../utils/prayersService'
import loading from '../../images/loading.gif'
import NavBar from '../../components/NavBar/NavBar'

class PrayerBoard extends Component {

    state = {
        prayers: []
    };

    async componentDidMount() {
        const prayers = await PrayerService.index()
        this.setState({prayers: prayers})
        }
        render() {
            return (
                <div className="PrayerBoard">
                     {/* <NavBar
                        user={props.user}
                        handleLogout={props.handleLogout}
                    /> */}
                    <div classname="card blue">
                        {this.state.prayers.length > 1 ? this.state.prayers.map((prayer, idx) => 
                            <PrayerCard
                                key={idx}
                                text={prayer.text}
                                location={prayer.location}
                                higherPower={prayer.higherPower}
                                /> 
                        ) : 
                        <div className="noPrayers flex-column center">
                            <code>Prayers ar Being Fetched From the Cloud. Please Wait.</code>
                            <br /><img src={loading} alt="Blocks boucing around" /><br />
                            <code>if you are not automatically redirected please consult your nearest <br />s p i r i t u a l &nbsp; l e a d e r .</code>
                        </div>
                        }    
                    </div>
                </div>
            );
        }
} 
    

export default PrayerBoard;