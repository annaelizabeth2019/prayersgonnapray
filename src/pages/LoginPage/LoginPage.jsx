import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css';

class LoginPage extends Component {

  render() {
    return (
      <div className="LoginPage flex-column">
        <LoginForm {...this.props} updateMessage={this.updateMessage} />
      </div>
    );
  }
};

export default LoginPage;