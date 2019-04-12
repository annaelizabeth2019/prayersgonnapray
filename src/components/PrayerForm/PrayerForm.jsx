import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import prayerService from '../../utils/prayersService';
import './PrayerForm.css'


class PrayerRequest extends Component {

  state = {
    higherPower: '',
    text: '',
    location: this.props.location,
    user: {}
  }

  componentDidMount() {
    // let user = this.props.user
    // this.setState({user: user})
    console.log('Component did mount', this.props)
  }

  handleChange = (e) => {
    // const user = this.props.user;
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value,
      // user: user.email
    })
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
    // const { email } = this.props.user
    console.log(this.props)
    return (
      <div className="PrayerForm z-depth-3">
        <form className="form-horizontal form" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
            <input type="text" className="form-control" name="higherPower" onChange={this.handleChange} /><label className="black-text">Your Higher Power</label>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <textarea type="textarea" className="form-control prayer-text materialize-textarea" value={this.state.text} name="text" onChange={this.handleChange} /><label className="black-text">Your Prayer</label>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-large" disabled={this.isFormInvalid()}>Pray</button>&nbsp;&nbsp;<code className="center z-depth-3">send to t h e &nbsp; c l o u d</code>&nbsp;&nbsp;
              <Link to='/prayerboard' className="btn waves-light orange accent-3 ">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default PrayerRequest;

