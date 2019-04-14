import React from 'react'
import './PrayerCard.css'

const PrayerCard = (props) => (
    <div className="card PrayerCard center">
        <div className="card-image waves-effect waves-block waves-light ema"><img src="https://icon-rainbow.com/i/icon_04219/icon_042190_256.png" alt="a logo" className="activator img-small " />
        </div>
        <div className="card-content center">
            <span className="card-title activator grey-text text-darken-4 truncate">{props.text}<i className="material-icons right">arrow_drop_up</i></span>
        </div>
        <div className="card-reveal black white-text">
            <span className="card-title">{props.text}<i className="material-icons right">close</i></span>
        <p>This prayer was sent to:<br />
        {props.higherPower}</p>
        </div>
    </div>
);

export default PrayerCard;