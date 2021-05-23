import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.VUE_APP_apiKey,
	authDomain: process.env.VUE_APP_authDomain,
	projectId: process.env.VUE_APP_projectId,
	storageBucket: process.env.VUE_APP_storageBucket,
	appId: process.env.VUE_APP_appId,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log(firebaseConfig);
