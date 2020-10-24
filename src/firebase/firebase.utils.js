import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBPL5wSMDvpzSl5gVfW_5DSZ8457jZJKrI",
    authDomain: "crwn-db-f1fc2.firebaseapp.com",
    databaseURL: "https://crwn-db-f1fc2.firebaseio.com",
    projectId: "crwn-db-f1fc2",
    storageBucket: "crwn-db-f1fc2.appspot.com",
    messagingSenderId: "271310878386",
    appId: "1:271310878386:web:f2af1b859ba0842286fbab",
    measurementId: "G-PLYKS77E5C"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;