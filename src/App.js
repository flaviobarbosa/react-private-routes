import './App.css';
import Navbar from './components/Navbar';
import PrivateRoutes from './Routes/PrivateRoutes';

function App() {
  return (
    <div>
      <Navbar />
      <PrivateRoutes />
    </div>
  );
}

export default App;
