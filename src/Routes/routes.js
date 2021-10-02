import PublicRoutes from './PublicRoutes';
import useAuth from '../hooks/useAuth';
import App from '../App';

const Routes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return user ? <App /> : <PublicRoutes />;
};

export default Routes;
