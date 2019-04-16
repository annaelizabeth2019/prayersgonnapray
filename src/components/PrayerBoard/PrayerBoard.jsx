import React, {Component} from 'react'
import  './PrayerBoard.css'
import PrayerCard from '../PrayerCard/PrayerCard'
import prayerService from '../../utils/prayerService'
import Loading from '../../components/Loading/Loading'

class PrayerBoard extends Component {

    state = {
        prayers: []
    };

    async componentDidMount() {
        const prayers = await prayerService.index()
        this.setState({prayers: prayers})
        }
        render() {
            return (
                <div className="PrayerBoard">
                    <div className="row">
                        {this.state.prayers && this.state.prayers.length ? 
                        <div className="PrayerBoard-container">
                        {this.state.prayers.map((prayer, idx) => 
                            <PrayerCard
                            key={idx}
                            text={prayer.text}
                            location={prayer.location}
                            higherPower={prayer.higherPower}
                            date={Date(prayer.createdAt)}
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