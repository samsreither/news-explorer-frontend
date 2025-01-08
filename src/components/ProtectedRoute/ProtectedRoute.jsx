import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({
  children,
  isLoggedIn,
  setActiveModal,
  isCheckingToken,
  setIsActive,
}) {
  React.useEffect(() => {
    if (!isCheckingToken && !isLoggedIn) {
      setActiveModal('login');
      setTimeout(() => {
        setIsActive(true);
      }, 10);
    }
  }, [isLoggedIn, setActiveModal, isCheckingToken, setIsActive]);

  if (!isLoggedIn && !isCheckingToken) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;