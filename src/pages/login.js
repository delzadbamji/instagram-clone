import { useHistory, Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import { useState, useContext, useEffect } from 'react';
import * as ROUTES from '../constants/routes';
export default function Login() {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ displayError, setError ] = useState('');
	const isInvalid = password === '' || email === '';
	const handleLogin = async (event) => {
		event.preventDefault();
		try {
			await firebase.auth().signInWithEmailAndPassword(email,password);
			history.push(ROUTES.DASHBOARD);
		} catch (error) {
			setEmail('');
			setPassword('');
			setError(error.message);
		}
	};
	useEffect(() => {
		document.title = 'Login Page';
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
					<form onSubmit={handleLogin} method="POST">
						<input
							aria-label="enter your email"
							type="text"
							placeholder="Email Address"
							className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
							onChange={({ target }) => setEmail(target.value)}
						/>
						<input
							aria-label="enter your email"
							type="password"
							placeholder="Password"
							className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
							onChange={({ target }) => setPassword(target.value)}
						/>
						<button
							disabled={isInvalid}
							type="submit"
							className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid &&
								'opacity-50'}`}
						>
							Login
						</button>
					</form>
				</div>
				<div className="flex justify-center item-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
					<p className="text-sm">
						{' '}
						Don't have an account?{` `}
						<Link to="/signup" className="font-bold text-blue-medium">
							Sign up
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
