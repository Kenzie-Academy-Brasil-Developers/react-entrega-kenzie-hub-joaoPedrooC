import styles from './style.module.scss';

const Loading = () => {
	return (
		<div className={styles.loadingContainer}>
			<div className={styles.loading}>
				<div></div>
			</div>
		</div>
	);
};

export default Loading;
