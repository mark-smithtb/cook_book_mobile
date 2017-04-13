import React from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import Reducers from './reducers/';
import LoginForm from './LoginForm';
import RegistationForm from './RegistationForm';


class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(Reducers, applyMiddleware(logger))}>
        <View>
          <RegistationForm />
        </View>
      </Provider>
    );
  }
}

export default App;
