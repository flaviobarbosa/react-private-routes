import { useState } from 'react';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import useAuth from '../hooks/useAuth';

const Routes = () => {
  const { user } = useAuth();

  return user ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;
