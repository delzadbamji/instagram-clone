import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

//add your own config details here
const config = {
	apiKey: env.apiKey,
	authDomain: env.authDomain,
	projectId: env.projectId,
	storageBucket: env.storageBucket,
	messagingSenderId: env.messagingSenderId,
	appId: env.appId,
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// only run this once when the new project is being created.
// seedDatabase(firebase);

export { firebase, FieldValue };
