import firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: REACT_APP_FIREBASE_DB_URL,
    projectId: REACT_APP_FIREBASE_PROJ_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
};

firebase.initalizeApp(config);

export const ref = firebase.database().ref();
export const { auth } = firebase;
 