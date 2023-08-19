import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';
import styles from './style.module.scss';

const UserInfoSection = () => {
	const { user: userInfo } = useContext(UserContext);

	return (
		<section className={styles.userInfoSection}>
			<div className="container">
				<h2 className="title lg">Olá, {userInfo.name}</h2>
				<p className="headline notBold">{userInfo.course_module}</p>
			</div>
		</section>
	);
};

export default UserInfoSection;
