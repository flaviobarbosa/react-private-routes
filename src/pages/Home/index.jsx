import useAuth from '../../hooks/useAuth';

const Home = () => {
  const { user } = useAuth();

  console.log('user = ', user);

  return <h1>Welcome, {user.name}</h1>;
};

export default Home;
