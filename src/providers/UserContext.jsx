import { createContext, useEffect, useState } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);

	const [techs, setTechs] = useState([]);
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem('@TOKEN');
		setUser(null);
	};

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem('@TOKEN'));

		const getUserInfo = async () => {
			try {
				setLoading(true);
				const { data } = await api.get('/profile', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				setUser(data);
				setTechs(data.techs);
				navigate('/dashboard');
			} catch (error) {
				navigate('/');
			} finally {
				setLoading(false);
			}
		};

		if (token) {
			getUserInfo();
		}
	}, []);

	const login = async formData => {
		try {
			const { data } = await api.post('/sessions', formData);
			localStorage.setItem('@TOKEN', JSON.stringify(data.token));
			setUser(data.user);
			toast.success('Login realizado com sucesso');
			navigate('/dashboard');
		} catch (error) {
			const errorMessage = error.response.data.message;

			if (errorMessage.includes('email') || errorMessage.includes('password')) {
				toast.error('Email ou senha incorretos!');
			} else {
				toast.error('Ops! Algo deu errado!');
			}
		}
	};

	const registerUser = async (formData, reset) => {
		try {
			await api.post('/users', formData);
			toast.success('Conta criada com sucesso!');
			reset();
			navigate('/');
		} catch (error) {
			if (error.response.data.message === 'Email already exists') {
				toast.error('Email já cadastrado');
			} else {
				toast.error('Ops! Algo deu errado');
			}
		}
	};

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				handleLogout,
				login,
				registerUser,
				loading,
				techs,
				setTechs,
			}}>
			{children}
		</UserContext.Provider>
	);
};
