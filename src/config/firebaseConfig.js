import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export var firebaseConfig = {
    apiKey: "AIzaSyC2f0m7UbHM3tgA3NqHDsVU7XDzPHpvcGo",
    authDomain: "marioproject-2f60a.firebaseapp.com",
    databaseURL: "https://marioproject-2f60a.firebaseio.com",
    projectId: "marioproject-2f60a",
    storageBucket: "marioproject-2f60a.appspot.com",
    messagingSenderId: "128391302125",
    appId: "1:128391302125:web:ff9e664eb6f66ac1b975e4",
    measurementId: "G-Z5L0SBWVGG",
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;