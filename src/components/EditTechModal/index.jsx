import { useEffect } from 'react';
import { useContext } from 'react';
import { TechContext } from '../../providers/TechContext';
import { MdClose } from 'react-icons/md';
import EditTechForm from './EditTechForm';

const EditTechModal = () => {
	const { setEditingTech } = useContext(TechContext);

	useEffect(() => {
		const handleKeyDown = event => {
			if (event.key === 'Escape') {
				setEditingTech(null);
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<div role="dialog" className="dialog">
			<div className="container">
				<div>
					<h3>Cadastrar Tecnologia</h3>
					<button onClick={() => setEditingTech(null)}>
						<MdClose />
					</button>
				</div>
				<EditTechForm />
			</div>
		</div>
	);
};

export default EditTechModal;
