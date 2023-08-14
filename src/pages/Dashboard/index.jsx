import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import UserInfoSection from '../../components/UserInfoSection';
import styles from './style.module.scss';

const Dashboard = ({ user, setUser }) => {
	const handleLogout = () => {
		localStorage.removeItem('@TOKEN');
		setUser({});
	};

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
				<UserInfoSection userInfo={user} setUser={setUser} />
				<section>
					<div className="container">
						<h2>Que pena! Estamos em desenvolvimento :(</h2>
						<p className="paragraph">
							Nossa aplicação está em desenvolvimento, em breve teremos
							novidades
						</p>
					</div>
				</section>
			</main>
		</>
	);
};

export default Dashboard;
