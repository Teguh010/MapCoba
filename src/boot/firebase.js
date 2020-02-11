import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// PUT YOUR OWN FIREBASE CONFIGURATION HERE
var firebaseConfig = {
  apiKey: "AIzaSyC3zMA060ypEp1GKN7rOMbY8Zozy7HiLL4",
  authDomain: "gpskumap.firebaseapp.com",
  databaseURL: "https://gpskumap.firebaseio.com",
  projectId: "gpskumap",
  storageBucket: "gpskumap.appspot.com",
  messagingSenderId: "286350711275",
  appId: "1:286350711275:web:1d979a4103327c8ff961ae"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export {
  firebaseAuth,
  firebaseDb
};
