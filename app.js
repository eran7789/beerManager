import React from 'react';
import {
  View, Text
} from 'react-native';
  import { Provider, connect } from 'react-redux';
  import { Navigation } from 'react-native-navigation';

import { authenticateUser } from './src/actions/auth';
import FirebaseController from './src/firebase-controller';

import store from './src/store';
import { registerScreens, goToLogin, goToUserMain } from './src/screens';

registerScreens(store, Provider);

class App extends React.Component {
  constructor(props) {
     super(props);
     FirebaseController['AUTHENTICATE_USER']()
      .then((isAdmin) => goToUserMain(isAdmin))
      .catch(goToLogin)    
  }
}

export default App;