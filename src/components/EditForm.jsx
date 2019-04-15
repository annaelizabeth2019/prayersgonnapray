import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PrayerForm.css'


class PrayerForm extends Component {

  state = {
    higherPower: this.props.higherPower,
    text: this.props.text,
  }

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editPrayer(this.state.text, this.state.higherPower, this.props.id)
    this.props.history.push('/yourprayers');
  }

  isFormInvalid() {
    return !(this.state.higherPower && this.state.text);
  }

  render() {
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
              <button className="btn btn-large" disabled={this.isFormInvalid()}>Pray</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to='/prayerboard' className="btn waves-light orange accent-3 ">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default PrayerForm;

