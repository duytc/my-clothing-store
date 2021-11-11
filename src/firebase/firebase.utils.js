import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB_c1kjOZOxF0x4s-AFsphPALFzc-8Xn80",
  authDomain: "crwn-db-8fee7.firebaseapp.com",
  projectId: "crwn-db-8fee7",
  storageBucket: "crwn-db-8fee7.appspot.com",
  messagingSenderId: "10575521209",
  appId: "1:10575521209:web:86984f2e47a20f32af8268",
  measurementId: "G-LMDDLRH36G"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;