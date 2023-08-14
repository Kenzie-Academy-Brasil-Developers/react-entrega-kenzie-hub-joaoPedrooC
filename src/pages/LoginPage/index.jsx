import Logo from '../../assets/Logo.svg';
import styles from './style.module.scss';
import LoginForm from '../../components/LoginForm';

const LoginPage = ({ setUser }) => {
	return (
		<main className={styles.main}>
			<div className="formContainer">
				<img src={Logo} alt="KenzieHub Logo" />
				<LoginForm setUser={setUser} />
			</div>
		</main>
	);
};

export default LoginPage;
