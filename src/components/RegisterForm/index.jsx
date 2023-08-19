import Input from '../Input';
import Select from '../Select';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import registerSchema from './registerSchema';
import { UserContext } from '../../providers/UserContext';

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm({
		resolver: zodResolver(registerSchema),
	});

	const { registerUser } = useContext(UserContext);
	const [loading, setLoading] = useState(false);

	const submit = async formData => {
		setLoading(true);
		await registerUser(formData, reset);
		setLoading(false);
	};

	return (
		<form className="form" onSubmit={handleSubmit(submit)}>
			<div className="formHeader">
				<h3 className="title lg">Crie sua conta</h3>
				<span className="headline notBold">Rápido e grátis, vamos nessa</span>
			</div>
			<Input
				label="Nome"
				placeholder="Digite seu nome"
				type="text"
				{...register('name')}
				errors={errors.name}
				disabled={loading}
			/>
			<Input
				label="Email"
				placeholder="Digite aqui seu email"
				type="email"
				{...register('email')}
				errors={errors.email}
				disabled={loading}
			/>
			<Input
				label="Senha"
				placeholder="Digite aqui sua senha"
				type="password"
				{...register('password')}
				errors={errors.password}
				disabled={loading}
			/>
			<Input
				label="Confirmar Senha"
				placeholder="Confirme sua senha"
				type="password"
				{...register('confirmPassword')}
				errors={errors.confirmPassword}
				disabled={loading}
			/>
			<Input
				label="Bio"
				placeholder="Fale sobre você"
				type="text"
				{...register('bio')}
				errors={errors.bio}
				disabled={loading}
			/>
			<Input
				label="Contato"
				placeholder="Opção de contato"
				type="text"
				{...register('contact')}
				errors={errors.contact}
				disabled={loading}
			/>
			<Select
				label="Selecionar módulo"
				{...register('course_module')}
				errors={errors.course_module}
				disabled={loading}>
				<option value="Primeiro módulo (Introdução ao Frontend)">
					Primeiro módulo
				</option>
				<option value="Segundo módulo (Frontend Avançado)">
					Segundo módulo
				</option>
				<option value="Terceiro módulo (Introdução ao Backend)">
					Terceiro módulo
				</option>
				<option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
			</Select>
			<button
				className={`btn pink ${isValid ? 'default' : 'negative'} big`}
				type="submit"
				disabled={loading}>
				Cadastrar
			</button>
		</form>
	);
};

export default RegisterForm;
