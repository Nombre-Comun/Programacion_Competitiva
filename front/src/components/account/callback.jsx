import React, { useEffect } from 'react';
import userManager from './config';

const Callback = () => {
  useEffect(() => {
    userManager.signinRedirectCallback().then(() => {
      // La autenticación ha sido exitosa, redirigir al usuario a la página de inicio
      window.location.replace('/');
    });
  }, []);

  return <div>Procesando la autenticación...</div>;
};

export default Callback;
