import { useContext, useEffect } from 'react';
import { TechContext } from '../../providers/TechContext';
import { MdClose } from 'react-icons/md';
import CreateTechForm from './CreateTechForm';

const CreateTechModal = () => {
	const { setCreatingTechValue } = useContext(TechContext);

	useEffect(() => {
		const handleKeyDown = event => {
			if (event.key === 'Escape') {
				setCreatingTechValue(false);
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
					<h3 className="title lg">Cadastrar Tecnologia</h3>
					<button onClick={() => setCreatingTechValue()}>
						<MdClose />
					</button>
				</div>
				<CreateTechForm />
			</div>
		</div>
	);
};

export default CreateTechModal;
