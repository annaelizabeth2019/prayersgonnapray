
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
      <header className="header-footer"><h1>Prayer Request</h1></header>
        <PrayerForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
        <img src={prayerHands} alt="hands praying" class="prayer-form-img" />
      </div>
    );
  }
};

export default PrayerRequest;