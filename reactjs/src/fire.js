import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyByo2VaKQxWetdAg59wi1fy3mZdBSGD8b4",
    authDomain: "reactdb-70e2c.firebaseapp.com",
    databaseURL: "https://reactdb-70e2c.firebaseio.com",
    projectId: "reactdb-70e2c",
    storageBucket: "reactdb-70e2c.appspot.com",
    messagingSenderId: "640191532123",
    appId: "1:640191532123:web:e6ea5105853dd03966837e"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;