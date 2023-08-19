import Input from '../Input';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import loginSchema from './loginSchema';
import { useContext, useState } from 'react';
import { UserContext } from '../../providers/UserContext';

const LoginForm = () => {
	const { login } = useContext(UserContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginSchema),
	});

	const [loading, setLoading] = useState(false);

	const submit = async formData => {
		setLoading(true);
		await login(formData);
		setLoading(false);
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
