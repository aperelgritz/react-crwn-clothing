import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCRuBJP8NsOZIfqm2qbkdCqgp6I3kCRIag",
  authDomain: "react-crown-db-d966b.firebaseapp.com",
  projectId: "react-crown-db-d966b",
  storageBucket: "react-crown-db-d966b.appspot.com",
  messagingSenderId: "262877168311",
  appId: "1:262877168311:web:10bd65da4ca7deaf54c332",
  measurementId: "G-2MJTKEX5Q4"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;