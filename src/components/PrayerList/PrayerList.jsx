import React from 'react';
import './PrayerList.css';

const PrayerList = (props) => {
  return (
    <tr>
      <td>TIME O'CLOCK</td>
      <td>{props.higherPower}</td>
      <td className="truncate">{props.text}</td>
    </tr>
  )
}

export default PrayerList;