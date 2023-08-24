import { createContext, useContext, useState } from 'react';
import { UserContext } from './UserContext';
import api from '../services/api';
import { toast } from 'react-toastify';

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
	const { techs, setTechs } = useContext(UserContext);

	const [creatingTech, setCreatingTech] = useState(false);
	const [editingTech, setEditingTech] = useState(null);

	const handlePostTechs = async formData => {
		try {
			const token = localStorage.getItem('@TOKEN');
			const { data } = await api.post('/users/techs', formData, {
				headers: {
					Authorization: `Bearer ${JSON.parse(token)}`,
				},
			});

			setTechs([...techs, data]);
			setCreatingTech(false);

			toast.success('Tecnologia cadastrada com sucesso');
		} catch (error) {
			toast.error('Tecnologia já cadastrada');
		}
	};

	const handleEditTechs = async formData => {
		try {
			const token = localStorage.getItem('@TOKEN');
			const { data } = await api.put(
				`/users/techs/${editingTech.id}`,
				formData,
				{
					headers: {
						Authorization: `Bearer ${JSON.parse(token)}`,
					},
				}
			);

			toast.success('Tecnologia atualizada com sucesso');
			const updatedTechList = techs.map(tech =>
				tech.id === editingTech.id ? data : tech
			);

			setTechs(updatedTechList);
			setEditingTech(null);
		} catch (error) {
			toast.error('Ops! Algo deu errado...');
		}
	};

	const setCreatingTechValue = value => {
		setCreatingTech(value);
	};

	const deleteTech = async techId => {
		try {
			const token = localStorage.getItem('@TOKEN');

			await api.delete(`/users/techs/${techId}`, {
				headers: {
					Authorization: `Bearer ${JSON.parse(token)}`,
				},
			});
			const newTechList = techs.filter(tech => tech.id !== techId);

			setTechs(newTechList);
			toast.success('Tecnologia deletada com sucesso');
		} catch (error) {
			toast.error('Ops! Algo deu errado...');
		}
	};

	return (
		<TechContext.Provider
			value={{
				setCreatingTechValue,
				creatingTech,
				handlePostTechs,
				deleteTech,
				setEditingTech,
				editingTech,
				handleEditTechs,
			}}>
			{children}
		</TechContext.Provider>
	);
};
