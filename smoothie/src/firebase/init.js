import firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/storage';

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBt1MTjcj9rPCCGMEyNo1f8LmEL_ZnNsQo",
  authDomain: "smoothies-e0bfe.firebaseapp.com",
  databaseURL: "https://smoothies-e0bfe-default-rtdb.firebaseio.com",
  projectId: "smoothies-e0bfe",
  storageBucket: "smoothies-e0bfe.appspot.com",
  messagingSenderId: "771062715482",
  appId: "1:771062715482:web:b792059085146db853f463",
  measurementId: "G-V42T6MSM1F"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

// export firestore database
export default firebaseApp.firestore()