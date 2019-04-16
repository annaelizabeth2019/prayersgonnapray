import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './SignupForm.css';

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
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
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      // Back to the main
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div className="SignupForm z-depth-5 center-align">
        <header className="header-footer SignupPageHeader"><h1>S I G N &nbsp; U P</h1></header>
        <div className="row flex-column">
        <form className="SignupPageHeader col flex-column" onSubmit={this.handleSubmit} >
          <div className="row ">
            <div className="col">
              <input type="text" className="input-field white-text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="col input-field white-text">
              <input type="email" className="input-field white-text" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <input type="password" className="input-field white-text" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
            </div>
          </div>
          <div className="row white-text">
            <div className="col">
              <input type="password" className="input-field white-text" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
            </div>
          </div>
          <div className="row white-text">
            <div className="col-sm-12 text-center white-text">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
        </div>
      </div>
    );
  }
};

export default SignupForm;