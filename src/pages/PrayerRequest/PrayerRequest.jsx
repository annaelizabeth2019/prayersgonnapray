
import React, { Component } from 'react';
import PrayerForm from '../../components/PrayerForm/PrayerForm';
import './PrayerRequest.css';
import prayerHands from '../../images/prayerhands.gif'

class PrayerRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='PrayerRequest'>
        <header className="header-footer center"><h3>Prayer Request</h3></header><br />
        <PrayerForm {...this.props} 
        updateMessage={this.updateMessage} 
        text=""
        message=""
        />
        <p>{this.state.message}</p>
        <img src={prayerHands} alt="hands praying" className="prayer-form-img" />
      </div>
    );
  }
};

export default PrayerRequest;