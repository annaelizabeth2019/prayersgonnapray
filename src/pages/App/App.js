//basic React Stuff
import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

//Components
import NavBar from '../../components/NavBar/NavBar';
import PrayerBoard from '../../components/PrayerBoard/PrayerBoard'

//Pages
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import WelcomePage from '../WelcomePage/WelcomePage'
import PrayerRequest from '../PrayerRequest/PrayerRequest'

//services
import userService from '../../utils/userService';
import { getCurrentLatLng } from '../../utils/utilities'
import prayersService from '../../utils/prayersService'

class App extends Component {

  /*---- State ----*/

  constructor() {
    super();
    this.state = {...this.getInitialState()};
  }

  getInitialState() {
    return {
      prayers: [],
      location: { lat: null, lng: null }
    };
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
    //get the location of the user
    const {lat, lng} = await getCurrentLatLng();
    //get user
    const user = userService.getUser();
    //go to the database for prayers
    const prayers = await prayersService.index();
    //update state
    this.setState({ user, prayers, location: {lat, lng} });
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
        <Route exact path='/PrayerBoard' render={({ history }) => 
          <PrayerBoard
            history={history}
            user={this.state.user}
            location={this.state.location}
            prayers={this.state.prayers}
          />
          }/>
        <Route exact path='/PrayerRequest' render={({ history }) => 
          <PrayerRequest
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
            user={this.state.user}
            location={this.state.location}
          />
        }/>
      </Switch>
      </div>
    );
  }
}

export default App;
