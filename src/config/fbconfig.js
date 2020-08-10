import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCFcwklKzKkxBdNvNZNqhy0IamUgzAAaAU",
    authDomain: "net-ninja-marioland-79272.firebaseapp.com",
    databaseURL: "https://net-ninja-marioland-79272.firebaseio.com",
    projectId: "net-ninja-marioland-79272",
    storageBucket: "net-ninja-marioland-79272.appspot.com",
    messagingSenderId: "793023143688",
    appId: "1:793023143688:web:5d3aaa64906ccb46cd16bd"
  };

  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore()

  export default firebase
