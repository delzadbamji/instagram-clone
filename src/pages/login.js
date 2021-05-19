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
				<p>Form!</p>
			</div>
		</div>
	);
}
