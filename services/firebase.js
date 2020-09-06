/* eslint-disable prettier/prettier */
import firebase from 'firebase';

const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

// eslint-disable-next-line no-unused-expressions
!firebase.apps.length ? firebase.initializeApp(config) : '';

const auth = firebase.auth();
// const db = firebase.firestore()
// const storage = firebase.storage()
// const functions = firebase.functions()

export { firebase, auth };
