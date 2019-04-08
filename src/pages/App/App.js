//basic React Stuff
import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

//Components
import NavBar from '../../components/NavBar/NavBar';

//Pages
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import WelcomePage from '../WelcomePage/WelcomePage'

//services
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {...this.getInitialState()};
  }
    /*--- Callback Methods ---*/

    handleLogout = () => {
      userService.logout();
      this.setState({ user: null });
    }

    handleSignupOrLogin = () => {
      this.setState({user: userService.getUser()});
    }

    /*--- Lifecycle Methods ---*/

    async componentDidMount() {
      const user = userService.getUser();
      this.setState({ user });
    }

  render() {
    return (
      <div className="App">
      <NavBar
        user={this.user}
        handleLogout={this.handleLogout}
      />
        <Switch>
          <Route exact path='/' render={({ history }) => 
            <WelcomePage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              user={this.state.user}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              user={this.state.user}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              user={this.state.user}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
