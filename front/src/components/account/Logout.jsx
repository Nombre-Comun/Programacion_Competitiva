import React from 'react';
import userManager from './config';

const Logout = () => {
  const handleLogout = async () => 
  {
    localStorage.removeItem('user');
    await userManager.removeUser();
    await userManager.signoutRedirect();
  };

  handleLogout();

  return <div>Logging out...</div>;
};

export default Logout;
