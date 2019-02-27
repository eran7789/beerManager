import firebase from 'firebase';
import { FIREBASE_ACTIONS } from './constants/firebase';

const config = {
  apiKey: "AIzaSyB53KY26Kr9cvb9sHcgUTh5cElEWQ0RZ5k",
  authDomain: "beermanager-859c3.firebaseapp.com",
  databaseURL: "https://beermanager-859c3.firebaseio.com",
  projectId: "beermanager-859c3",
  storageBucket: "beermanager-859c3.appspot.com",
  messagingSenderId: "624971431341"
};

class FirebaseController {
  constructor() {
    firebase.initializeApp(config);
  }

  registerUser = ({ email, password}) => {
    const { uid } = firebase.auth().currentUser;
    
    return firebase.database().ref(`users/${uid}`)
      .set({ email, password, isAdmin: false })
      .then(() => ({ email, password, isAdmin: false }));
  }
  
  readAdminRights = () => {
    const { uid } = firebase.auth().currentUser;
    let isAdmin = false;
    
    return firebase.database().ref(`users/${uid}`).once('value')
      .then(snapshot => snapshot.val())
  }

  [FIREBASE_ACTIONS.AUTHENTICATE_USER.BASE] = () => new Promise((resolve, reject) => 
    firebase.auth().currentUser ? resolve(firebase.auth().currentUser) : reject());
  
  [FIREBASE_ACTIONS.LOGIN_USER.BASE] = ({ email, password }) => {
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => 
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(() => this.readAdminRights())
          .catch(() => 
            firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(() => this.registerUser({ email, password }))
          )
      );
  }

  [FIREBASE_ACTIONS.ADD_BEER.BASE] = ({ name, type, brewery, picture, user }) => {
    let databaseBeer = null;

    return firebase.database().ref(`beers/${name}/name`).once('value')
      .then((snapshot) => {
        const databaseBeerName = snapshot.val();

        if (databaseBeerName) {
          throw new Error('Beer name already exists in database!');
        }

        return databaseBeerName;
      })
        .then(() => firebase.database().ref(`beers/${name}`)
          .set({ name, type, brewery, picture, addedBy: user })
        );
  }

  [FIREBASE_ACTIONS.FETCH_BEERS.BASE] = () => {
    return firebase.database().ref('beers').once('value')
      .then((snapshot) => snapshot.val());
  }
}


export default new FirebaseController;