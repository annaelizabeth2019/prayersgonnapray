import React from 'react'
import styles from './PrayerCard.css'

const PrayerCard = (props) => (
    <div className={styles.PrayerCard}>
        <div className="card small black-text PrayerCard">
        <div class="card-content">
            <span class="card-title">{props.text}</span>
        </div>
        </div>
    </div>
);

export default PrayerCard;