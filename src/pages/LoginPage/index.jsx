import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import styles from './style.module.scss';
import LoginForm from '../../components/LoginForm';

const LoginPage = ({ setUser }) => {
	const navigate = useNavigate();

	const handleRegisterPage = () => {
		navigate('/register');
	};

	return (
		<main className={styles.main}>
			<div className="formContainer">
				<img src={Logo} alt="KenzieHub Logo" />
				<LoginForm handleRegisterPage={handleRegisterPage} setUser={setUser} />
			</div>
		</main>
	);
};

export default LoginPage;
