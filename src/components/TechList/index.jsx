import { useContext } from 'react';
import { TechContext } from '../../providers/TechContext';
import { UserContext } from '../../providers/UserContext';
import plusBtn from '../../assets/plusBtn.svg';
import styles from './style.module.scss';
import TechCard from './TechCard';

const TechList = () => {
	const { setCreatingTechValue } = useContext(TechContext);
	const { techs } = useContext(UserContext);

	return (
		<section className={styles.techSection}>
			<div className="container">
				<div>
					<h3 className="title lg">Tecnologias</h3>
					<button onClick={() => setCreatingTechValue(true)}>
						<img src={plusBtn} alt="Botão adicionar" />
					</button>
				</div>
				{techs.length > 0 ? (
					<ul>
						{techs.map(tech => (
							<TechCard techInfo={tech} key={tech.id} />
						))}
					</ul>
				) : (
					<h3 className="title lg">
						Não há tecnologias cadastradas no momento
					</h3>
				)}
			</div>
		</section>
	);
};

export default TechList;
