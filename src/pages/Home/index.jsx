import useAuth from '../../hooks/useAuth';

const Home = () => {
  const { user } = useAuth();

  return <h1>Welcome, {user.name}</h1>;
};

export default Home;
