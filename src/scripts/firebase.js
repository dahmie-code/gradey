import { getDatabase, ref, push, set, get, update, remove, child } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';

const firebaseConfig = {
  apiKey: 'AIzaSyB071Z3Mt0x04gzrF9HrGzQhySvUpPT4Wk',
  authDomain: 'wit-gradey-web.firebaseapp.com',
  databaseURL: 'https://wit-gradey-web-default-rtdb.firebaseio.com',
  projectId: 'wit-gradey-web',
  storageBucket: 'wit-gradey-web.appspot.com',
  messagingSenderId: '332956740852',
  appId: '1:332956740852:web:b6629420fdb289ea64c2a1',
  measurementId: 'G-214P1JSLDF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase();

export {
  auth, db, ref, push, set, get, update, remove,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut, child,
};
