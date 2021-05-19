import { useHistory, Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import { useState, useContext, useEffect } from 'react';
import * as ROUTES from '../constants/routes';
import { usernameDoesExist } from '../services/firebase';

export default function SignUp() {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const [ username, setUsername ] = useState('');
	const [ fullName, setFullName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ displayError, setError ] = useState('');
	const isInvalid = password === '' || email === '';

	const handleSignUp = async (event) => {
		event.preventDefault();

		const checkUsername = await usernameDoesExist(username);

		if (!checkUsername) {
			try {
				const createUserByAlternateWay = await firebase.auth().createUserWithEmailAndPassword(email, password);
				//auth check email and password
				await createUserByAlternateWay.user.updateProfile({ displayName: username });

				await firebase.firestore().collection('users').add({
					userId: createUserByAlternateWay.user.uid,
					username: username.toLowerCase(),
					fullName,
					email: email.toLowerCase(),
					following: [],
					dateCreated: Date.now()
				});
				history.push(ROUTES.DASHBOARD);
			} catch (error) {
				setFullName('');
				setEmail('');
				setPassword('');
				setError(error.message);
			}
		} else {
			setError("Oops! As much as we love your username, it's already taken. Please try another one.");
		}
	};
	useEffect(() => {
		document.title = 'SignUp Page';
	}, []);

	return (
		<div className="container flex mx-auto max-w-screen-md items-center h-screen">
			<div className="flex w-3/5">
				<img src="/images/iphone-with-profile.jpg" alt="iphone with insta" />
			</div>
			<div className="flex flex-col w-2/5">
				<div className="flex flex-col item-center bg-white p-4 border border-gray-primary mb-4 rounded">
					<h1 className="flex justify-center w-full">
						<img src="/images/logo.png" alt="Logo" className="mt-2 w-6/12 mb-4" />
					</h1>
					{displayError && <p className="mb-4 text-xs text-red-primary">{displayError}</p>}
					<form onSubmit={handleSignUp} method="POST">
						<input
							aria-label="enter your username"
							type="text"
							placeholder="Username"
							className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
							onChange={({ target }) => setUsername(target.value)}
							value={username}
						/>
						<input
							aria-label="enter your full name"
							type="text"
							placeholder="Full Name"
							className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
							onChange={({ target }) => setFullName(target.value)}
							value={fullName}
						/>
						<input
							aria-label="enter your email"
							type="text"
							placeholder="Email Address"
							className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
							onChange={({ target }) => setEmail(target.value)}
							value={email}
						/>
						<input
							aria-label="enter your password"
							type="password"
							placeholder="Password"
							className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
							onChange={({ target }) => setPassword(target.value)}
							value={password}
						/>
						<button
							disabled={isInvalid}
							type="submit"
							className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid &&
								'opacity-50'}`}
						>
							SignUp
						</button>
					</form>
				</div>
				<div className="flex justify-center item-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
					<p className="text-sm">
						{' '}
						have an account?{` `}
						<Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
							Sign in
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
