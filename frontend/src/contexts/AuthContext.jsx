import { createContext, useContext, useState } from 'react';

import axios from 'axios';
// import Login from './../Layouts/Login';

const AuthContent = createContext({
	user: null,
	setUser: () => {},
	csrfToken: () => {},
});

export const AuthProvider = ({ children }) => {
	const [user, _setUser] = useState(
		JSON.parse(localStorage.getItem('user')) || null
	);

	// set user to local storage
	const setUser = (user) => {
		
		if (user) {
			localStorage.setItem('user', JSON.stringify(user));
			console.log("Done")
		} else {
			localStorage.removeItem('user');
		}
		_setUser(user);
	};
	

	// csrf token generation for guest methods
	const csrfToken = async () => {
		
		// const response = await axios.get('http://localhost:8000/sanctum/csrf-cookie');
		await axios.get('http://localhost:8000/sanctum/csrf-cookie');
		// const token = response.data.token; // تحديد موقع الـ token في الاستجابة واستخراجه

		// console.log(token); // طباعة الـ token في وحدة التحكم (console)
	  		return true;
	};

	return (
		<AuthContent.Provider value={{ user, setUser, csrfToken }}>
			{children}

		</AuthContent.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContent);
};