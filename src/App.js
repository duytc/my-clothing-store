import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shops/shop.compnent';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css'
import React from 'react';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth()
  }



  render() {
    return (
    <div>
        <Header currentUser={ this.state.currentUser }/>
        <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>
        <Route exact path='/signin' component={ SignInAndSignUpPage}></Route>
        </Switch>
      </div>
  );
  }
}

export default App;
