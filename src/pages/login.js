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

	return <div className="container flex mx-auto max-w-screen-md items-center h-screen">
		</div>
}
