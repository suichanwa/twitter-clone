// src/Components/PrivateRoute.tsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import CircularProgress from '@material-ui/core/CircularProgress';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="loading">
        <CircularProgress color="primary" />
      </div>
    );
  }

  if (!currentUser) {
    return <Navigate to="/auth" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;