import React, {Component} from 'react'
import styles from './PrayerBoard.module.css'
import Prayer from '../Prayer/Prayer'
import PrayerService from '../../utils/prayersService'

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
                    {this.state.prayers.length > 1 ? this.state.prayers.map((prayer, idx) => 
                        <Prayer 
                        key={idx}
                        text={prayer.text}
                        location={prayer.location}
                        higherPower={prayer.higherPower}
                        /> 
                    ) :
                    <p>Prayers Will Arrive Soon.</p>
                    }    
                </div>
            );
        }
} 
    

export default PrayerBoard;