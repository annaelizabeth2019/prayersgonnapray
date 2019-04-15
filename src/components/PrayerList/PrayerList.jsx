import React from 'react';
import './PrayerList.css';
import { Link } from 'react-router-dom';

const PrayerList = (props) => {
  return (
    
    <div>
      <span>{props.date.substring(0,15)}</span>&nbsp;&nbsp; | &nbsp;&nbsp;
      <span>{props.higherPower}</span> <br />
      <div className="row">{props.text}</div>
    </div>
  )
}

export default PrayerList;