import React from 'react'
import styles from './PrayerBoard.module.css'
import Prayer from '../Prayer/Prayer'

const PrayerBoard = (props) => (
    <div className="PrayerBoard">
        {props.prayers.length > 1 ? props.prayers.map((prayer, idx) => 
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

export default PrayerBoard;