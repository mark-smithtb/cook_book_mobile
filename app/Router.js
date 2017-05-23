import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import FriendFeed from './components/FriendFeed';
import Search from './components/Search';
import Requests from './components/Requests';
import Closet from './components/Closet';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='auth'>
        <Scene key='login' component={LoginForm} title="Please Login"/>
      </Scene>
      <Scene key="main">
        <Scene
          key="feed"
          component={FriendFeed}
          title='Friend Feed'
          initial
          />
        <Scene key='search' component={Search} title='Search'/>
        <Scene key='requests' component={Requests} title='Requests' />
        <Scene key='closet' component={Closet} title='Closet' />

      </Scene>
    </Router>
  )
}

export default RouterComponent;
