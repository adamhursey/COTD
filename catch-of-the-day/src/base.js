import Rebase from 're-base';
// import {initializeApp, database} from 'firebase';
import firebase from'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyAUUlzTXc3gyge7z257x324P7hE72a_VSc",
      authDomain: "catch-of-the-day-adam-hursey.firebaseapp.com",
      databaseURL: "https://catch-of-the-day-adam-hursey.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export {firebaseApp};

export default base;