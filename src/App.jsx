import { useContext } from 'react';
import RoutesMain from './routes/RoutesMain';
import './styles/index.scss';
import { UserContext } from './providers/UserContext';
import Loading from './components/Loading';

const App = () => {
	const { loading } = useContext(UserContext);

	return loading === true ? <Loading /> : <RoutesMain />;
};

export default App;
