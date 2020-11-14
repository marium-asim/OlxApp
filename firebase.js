import firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyBbcTrqud-KH64XTJe6YvpzZkzojLe40bs",
  authDomain: "olxapp-aec41.firebaseapp.com",
  databaseURL: "https://olxapp-aec41.firebaseio.com",
  projectId: "olxapp-aec41",
  storageBucket: "olxapp-aec41.appspot.com",
  messagingSenderId: "293692661980",
  appId: "1:293692661980:web:d0c274aa78f25ecff31419"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const dt = firebase.database();
export const ds= firebase.storage();

 export default firebase;
   
  