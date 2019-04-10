import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import prayerService from '../../utils/prayersService';

class PrayerRequest extends Component {

  state = {
    higherPower: '',
    text: '',
    location: this.props.location
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await prayerService.create(this.state);
      // Back to the main
      this.props.history.push('/prayerboard');
    } catch (err) {
      // Invalid user data
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.higherPower && this.state.text);
  }

  render() {
    return (
      <div>
        <header className="header-footer">Prayer Request</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
            <input type="text" className="form-control" placeholder="Your Higher Power" value={this.state.higherPower} name="higherPower" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Your Prayer" value={this.state.text} name="text" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Send Your Prayer to {this.state.higherPower}</button>&nbsp;&nbsp;
              <Link to='/prayerboard'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default PrayerRequest;