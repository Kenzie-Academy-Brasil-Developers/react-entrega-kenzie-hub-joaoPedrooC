import { useContext } from 'react';
import { TechContext } from '../../../providers/TechContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import createTechSchema from './createTechSchema';
import Input from '../../Input';
import Select from '../../Select';

const CreateTechForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(createTechSchema),
	});

	const { handlePostTechs } = useContext(TechContext);

	const submit = formData => {
		handlePostTechs(formData);
	};

	return (
		<form onSubmit={handleSubmit(submit)} className="form">
			<Input
				placeholder="Insira o nome da tecnologia"
				{...register('title')}
				label="Nome"
				errors={errors.title}
			/>
			<Select
				{...register('status')}
				label="Selecionar status"
				errors={errors.status}>
				<option value="Iniciante">Iniciante</option>
				<option value="Intermediário">Intermediário</option>
				<option value="Avançado">Avançado</option>
			</Select>
			<button type="submit" className="btn pink default big">
				Cadastrar tecnologia
			</button>
		</form>
	);
};

export default CreateTechForm;
