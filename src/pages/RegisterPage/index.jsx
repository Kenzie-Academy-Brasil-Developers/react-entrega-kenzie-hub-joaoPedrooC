import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import RegisterForm from '../../components/RegisterForm';
import styles from './style.module.scss';

const RegisterPage = () => {
	const navigate = useNavigate();

	const handleLoginPage = () => {
		navigate('/');
	};

	return (
		<>
			<header className={styles.header}>
				<div className="formContainer">
					<img src={Logo} alt="KenzieHub Logo" />
					<button onClick={handleLoginPage} className="btn darkGray small">
						Voltar
					</button>
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
