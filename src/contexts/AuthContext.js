import { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();

  // const [user, setUser] = useState(null);
  const [user, setUser] = useLocalStorage('@app:user', null);
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUser(JSON.parse(user));
      setLoading(false);
    }, 2000);
  }, []);

  const signIn = async () => {
    setLoading(true);

    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {
            name: 'User Name',
            email: 'user@mail.com',
          },
          token: 'werfkqwjebrfkb34',
        });
      }, 2000);
    });

    setUser(response.user);
    setToken(response.token);

    localStorage.setItem('@app:user', JSON.stringify(response.user));

    setLoading(false);

    history.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, signIn }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
