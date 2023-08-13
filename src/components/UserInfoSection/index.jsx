import styles from './style.module.scss';

const UserInfoSection = ({ userInfo }) => {
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
