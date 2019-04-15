//basic React Stuff
import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

//Components
import NavBar from '../../components/NavBar/NavBar';
import PrayerBoard from '../../components/PrayerBoard/PrayerBoard'

//Pages
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import WelcomePage from '../WelcomePage/WelcomePage'
import PrayerRequest from '../PrayerRequest/PrayerRequest'
import YourPrayers from '../YourPrayers/YourPrayers'

//services
import userService from '../../utils/userService';
import { getCurrentLatLng } from '../../utils/utilities'
import prayerService from '../../utils/prayerService'


class App extends Component {

  /*---- State ----*/

  constructor() {
    super();
    this.state = {...this.getInitialState()};
  }

  getInitialState() {
    return {
      location: { lat: null, lng: null },
      prayers: [],
      prayerLocs: [],
      user: null
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

    handlePrayer = async (text, higherPower) => {
      try {
        await prayerService.create({
          text,
          higherPower,
          location: this.state.location,
          user: this.state.user.email,
        });
      } catch (err) {
        console.log(err);
      } 
    }

    editPrayer = async (text, higherPower, id) => {
      try {
        await prayerService.edit({
          text,
          higherPower,
          id: id,
        });
      } catch (err) {
        console.log(err);
      } 
    }

    /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    //get the location of the user
    const {lat, lng} = await getCurrentLatLng();
    //get user
    const user = await userService.getUser();
    //update state
    this.setState({ user, location: {lat, lng} });
    const prayers = this.state.user ? await userService.myPrayers(this.state.user.email).catch(err => console.log(err)) : [];
    this.setState({prayers})
    let prayerLocs = []
    await prayerService.index().then(objs => objs.map(obj => obj.location.lat ? prayerLocs.push(obj.location) : prayerLocs.push({lat: 35.652832, lng: 139.6503})))
    this.setState({prayerLocs});
  }

  render() {
    return (
      <div className="App">
      <NavBar
        user={this.state.user}
        handleLogout={this.handleLogout}
      />
      <Switch>
        <Route exact path='/' render={({ history }) => 
          <WelcomePage
            history={history}
            user={this.state.user}
            markers={this.state.prayerLocs}
          />
        }/>
        <Route exact path='/yourprayers' render={({ history }) => 
          <YourPrayers
            history={history}
            user={this.state.user}
            prayers={this.state.prayers}
          />
        }/>
        <Route exact path='/signup' render={({ history }) => 
          <SignupPage
            history={history}
            user={this.state.user}
            handleSignupOrLogin={this.handleSignupOrLogin}
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
          />
          }/>
        <Route exact path='/PrayerRequest' render={({ history }) => (
          userService.getUser() ?
          <PrayerRequest
            history={history}
            user={this.state.user}
            location={this.state.location}
            handlePrayer={this.handlePrayer}
            />
            :
            <Redirect to='/login' />
          )
        }/>
      </Switch>
      </div>
    );
  }
}

export default App;