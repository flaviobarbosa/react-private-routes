import './App.css';
import AuthProvider from './contexts/AuthContext';
import Routes from './Routes/routes';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
