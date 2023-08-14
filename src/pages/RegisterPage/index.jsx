import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import RegisterForm from '../../components/RegisterForm';
import styles from './style.module.scss';

const RegisterPage = () => {
	return (
		<>
			<header className={styles.header}>
				<div className="formContainer">
					<img src={Logo} alt="KenzieHub Logo" />
					<Link to={'/'} className="btn darkGray small headline bold">
						Voltar
					</Link>
				</div>
			</header>
			<main>
				<div className="formContainer">
					<RegisterForm />
				</div>
			</main>
		</>
	);
};

export default RegisterPage;
