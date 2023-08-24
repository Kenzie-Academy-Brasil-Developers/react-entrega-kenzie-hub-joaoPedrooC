import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import UserInfoSection from '../../components/UserInfoSection';
import styles from './style.module.scss';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';
import TechList from '../../components/TechList';
import { TechContext } from '../../providers/TechContext';
import CreateTechModal from '../../components/CreateTechModal';
import EditTechModal from '../../components/EditTechModal';

const Dashboard = () => {
	const { handleLogout } = useContext(UserContext);
	const { creatingTech, editingTech } = useContext(TechContext);

	return (
		<>
			<header className={styles.header}>
				<div className="container">
					<img src={Logo} alt="KenzieHub Logo" />
					<Link
						to={'/'}
						onClick={handleLogout}
						className="btn darkGray small headline bold">
						Sair
					</Link>
				</div>
			</header>
			<main className={styles.main}>
				<UserInfoSection />
				<TechList />
				{creatingTech === true ? <CreateTechModal /> : null}
				{editingTech !== null ? <EditTechModal /> : null}
			</main>
		</>
	);
};

export default Dashboard;
