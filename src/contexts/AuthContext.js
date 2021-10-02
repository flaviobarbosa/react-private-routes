import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  const signIn = async () => {
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
  };

  console.log(user);

  return <AuthContext.Provider value={{ user, token, signIn }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
