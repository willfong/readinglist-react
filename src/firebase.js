import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { firebaseConfig } from './firebaseConfig';



firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const firebaseGoogleProvider = new firebase.auth.GoogleAuthProvider();

const firebaseData = firebase.database().ref();
export const dbUsers = firebaseData.child('users');

export const currentTs = firebase.database.ServerValue.TIMESTAMP;