import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import UserInfoSection from '../../components/UserInfoSection';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';

const Dashboard = ({ user, setUser }) => {
	const navigate = useNavigate();

	const handleLogout = () => {
		navigate('/');
		localStorage.removeItem('@TOKEN');
		setUser({});
	};

	return (
		<>
			<header className={styles.header}>
				<div className="container">
					<img src={Logo} alt="KenzieHub Logo" />
					<button onClick={handleLogout} className="btn darkGray small">
						Sair
					</button>
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
