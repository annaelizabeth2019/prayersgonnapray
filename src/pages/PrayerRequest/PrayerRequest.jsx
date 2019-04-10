
import React, { Component } from 'react';
import PrayerForm from '../../components/PrayerForm/PrayerForm';
import './PrayerRequest.css';

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
        <PrayerForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
};

export default PrayerRequest;