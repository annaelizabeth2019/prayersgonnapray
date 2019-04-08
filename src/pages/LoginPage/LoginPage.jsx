import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.scss';
import userService from '../../utils/userService';

class LoginPage extends Component {
  
    state = {
        email: '',
        pw: ''
    };

    handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            // NOTE: Use a modal or toast here instead of the alert!??
        alert('Invalid Credentials!');
        }
    }

  render() {
    return (
      <div className="LoginPage">
        <header className="header-footer LoginPageStyle">
        <div className="text">
            <h1 className="r">Log In</h1>
            <h1 className="g">Log In</h1>
            <h1 className="b">Log In</h1>
        </div>
        </header>
        <div class="row">
            <form className="col" onSubmit={this.handleSubmit} >
            <div className="row">
                <div className="col input-field">
                <input type="email" className="validate" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                </div>
            </div>
            <div className="row">
                <div className="col input-field">
                <input type="password" className="validate" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
                </div>
            </div>
            <div className="row">
                <div className="col input-field">
                <button className="btn">Log In</button>&nbsp;&nbsp;&nbsp;
                <Link to='/'>Cancel</Link>
                </div>
            </div>
            </form>
        </div>
      </div>
    );
  }
};

export default LoginPage;