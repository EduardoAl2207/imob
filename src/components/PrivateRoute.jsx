// src/components/PrivateRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Spinner from './Spinner';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  // Enquanto o status de autenticação está sendo verificado, exiba um carregador
  if (checkingStatus) {
    return <Spinner />;
  }

  // Se o usuário estiver autenticado, renderize o Outlet; caso contrário, redirecione
  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />;
};

export default PrivateRoute;
