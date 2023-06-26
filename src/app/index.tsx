import { PublicRoutes } from 'pages';
import { withProviders } from './providers';
import './styles.module.css';

const App = () => (
    <PublicRoutes />
);

export default withProviders(App);
