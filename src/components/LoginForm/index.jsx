import Input from '../Input';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import loginSchema from './loginSchema';
import { useState } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';

const LoginForm = ({ setUser }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginSchema),
	});

	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const submit = async formData => {
		try {
			setLoading(true);
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
				toast.error('Ops! Algo deu errdo!');
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<form className="form" onSubmit={handleSubmit(submit)}>
			<h3 className="title lg">Login</h3>
			<Input
				label="Email"
				placeholder="Digite aqui seu email..."
				type="email"
				{...register('email')}
				errors={errors.email}
				disabled={loading}
			/>
			<Input
				label="Senha"
				placeholder="Digite aqui sua senha..."
				type="password"
				{...register('password')}
				errors={errors.password}
				disabled={loading}
			/>
			<button
				type="submit"
				className={`btn pink ${!loading ? 'default' : 'negative'} big`}
				disabled={loading}>
				Entrar
			</button>
			<span className="headline">Ainda não possui uma conta?</span>
			<Link
				to={'/register'}
				className="btn gray disabled big link-sm"
				disabled={loading}>
				Cadastre-se
			</Link>
		</form>
	);
};

export default LoginForm;
