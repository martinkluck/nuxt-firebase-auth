/* eslint-disable prettier/prettier */
import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};

// eslint-disable-next-line no-console
console.log(process.env.VUE_APP_API_KEY);

// eslint-disable-next-line no-unused-expressions
!firebase.apps.length ? firebase.initializeApp(config) : '';

export const auth = firebase.auth();
