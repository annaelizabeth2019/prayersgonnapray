import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import userService from '../../utils/userService';

class LoginForm extends Component {

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
            <div className="LoginForm flex-column z-depth-5">
                <header className="header-footer LoginPageHeader">
                    <h1>L O G &nbsp; I N</h1> 
                </header>
                <div className="row">
                    <form className="col" onSubmit={this.handleSubmit} >
                    <div className="row">
                        <div className="col input-field white-text">
                        <i className="material-icons prefix white-text">mail_outline</i>
                        <input type="email" className="validate white-text" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col input-field white-text">
                        <i className="material-icons prefix white-text">lock_outline</i>
                        <input type="password" className="validate white-text" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col input-field">
                        <button className="btn btn-large">Log In</button>&nbsp;&nbsp;&nbsp;
                        <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default LoginForm;