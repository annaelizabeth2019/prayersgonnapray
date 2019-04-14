import React from 'react';
import './PrayerList.css';

const PrayerList = (props) => {
  return (
    <tr>
      <td>{props.date.substring(0,15)}</td>
      <td>{props.higherPower}</td>
      <td><div ClassName="truncate">{props.text}</div></td>
    </tr>
  )
}

export default PrayerList;