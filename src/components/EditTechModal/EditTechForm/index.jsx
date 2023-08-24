import { useForm } from 'react-hook-form';
import Input from '../../Input';
import Select from '../../Select';
import { useContext } from 'react';
import { TechContext } from '../../../providers/TechContext';

const EditTechForm = () => {
	const { handleEditTechs, editingTech } = useContext(TechContext);

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
	} = useForm({
		values: {
			title: editingTech.title,
			status: editingTech.status,
		},
	});

	const submit = formData => {
		handleEditTechs(formData);
	};

	return (
		<form onSubmit={handleSubmit(submit)} className="form">
			<Input
				placeholder="Insira o nome da tecnologia"
				{...register('title')}
				label="Nome"
				errors={errors.title}
				disabled={true}
			/>
			<Select {...register('status')} label="Status" errors={errors.status}>
				<option value="Iniciante">Iniciante</option>
				<option value="Intermediário">Intermediário</option>
				<option value="Avançado">Avançado</option>
			</Select>
			<button
				type="submit"
				className={`btn pink ${isDirty ? 'default' : 'negative'} big`}
				disabled={!isDirty}>
				Salvar alterações
			</button>
		</form>
	);
};

export default EditTechForm;
