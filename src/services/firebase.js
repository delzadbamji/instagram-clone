import { firebase, FieldValue } from '../lib/firebase';

export async function usernameDoesExist(username) {
	const result = await firebase.firestore().collection('users').where('username', '==', username).get();

	return result.docs.length > 0;
	// try {
	// 	return result.docs[0].exists;
	// } catch (error) {
	// 	return false;
	// }
	// return result.docs.map((user) => user.data().length > 0);
}
