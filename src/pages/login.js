import { useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import { useState, useContext, useEffect } from 'react';

export default function Login() {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ error, setError ] = useState('');
	const isInvalid = password === '' || email === '';
	const handleLogin = () => {};
	useEffect(() => {
		document.title = 'Login Page';
	}, []);

	return (
		<div className="container flex mx-auto max-w-screen-md items-center h-screen">
			<div className="flex w-3/5">
				<img src="/images/iphone-with-profile.jpg" alt="iphone with insta" />
			</div>
			<div className="flex flex-col w-2/5">
				<h1 className="flex justify-center w-full">
					<img src="/images/logo.png" alt="Logo" className="mt-2 w-6/12 mb-4" />
				</h1>
				{error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
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
				</form>
			</div>
		</div>
	);
}
