
import React, { Component } from 'react';
import EditForm from '../../components/EditForm/EditForm';
import prayerHands from '../../images/prayerhands.gif'

class EditPrayer extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='EditPrayer'>
        <header className="header-footer center"><h3>Edit Prayer</h3></header><br />
        <EditForm {...this.props} 
        updateMessage={this.updateMessage}
        />
        <p>{this.state.message}</p>
        <img src={prayerHands} alt="hands praying" className="prayer-form-img" />
      </div>
    );
  }
};

export default EditPrayer;