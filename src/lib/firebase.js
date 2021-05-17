import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDR0je58GBAiGyc3Nvx9Q-5B_ussnR64QA',
	authDomain: 'instagram-clone-36789.firebaseapp.com',
	projectId: 'instagram-clone-36789',
	storageBucket: 'instagram-clone-36789.appspot.com',
	messagingSenderId: '736763238978',
	appId: '1:736763238978:web:b64e98b4e5c4b9f7096bdb'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
