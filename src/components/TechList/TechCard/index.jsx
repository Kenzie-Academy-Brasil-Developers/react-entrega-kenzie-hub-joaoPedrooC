import { useContext } from 'react';
import { TechContext } from '../../../providers/TechContext';
import Delete from '../../../assets/Delete.svg';
import Edit from '../../../assets/Edit.svg';
import styles from './style.module.scss';

const TechCard = ({ techInfo }) => {
	const { deleteTech, setEditingTech } = useContext(TechContext);

	return (
		<li className={styles.techCard}>
			<div className={styles.techInfo}>
				<h3 className="title small">{techInfo.title}</h3>
				<span className="headline notBold">{techInfo.status}</span>
			</div>
			<div className={styles.actions}>
				<img
					src={Edit}
					alt="Edit Icon"
					onClick={() => setEditingTech(techInfo)}
				/>
				<img
					src={Delete}
					alt="Delete Icon"
					onClick={() => deleteTech(techInfo.id)}
				/>
			</div>
		</li>
	);
};

export default TechCard;
