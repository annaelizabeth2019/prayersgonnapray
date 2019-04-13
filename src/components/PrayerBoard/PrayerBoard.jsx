import React, {Component} from 'react'
import  './PrayerBoard.css'
import PrayerCard from '../PrayerCard/PrayerCard'
import PrayerService from '../../utils/prayersService'
import Loading from '../../components/Loading/Loading'
// import NavBar from '../../components/NavBar/NavBar'

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
                    <div className="row">
                        {this.state.prayers.length > 1 ? 
                        <div className="PrayerBoard-container">
                        {this.state.prayers.map((prayer, idx) => 
                            <PrayerCard
                            key={idx}
                            text={prayer.text}
                            location={prayer.location}
                            higherPower={prayer.higherPower}
                            />
                        )}
                        </div> 
                        : 
                        //Prayers can take a moment to load. This will prevent the app from crashing. 
                        <Loading />
                        }    
                    </div>
                </div>
            );
        }
} 
    

export default PrayerBoard;