import userManager from './config';
import React, { useEffect } from 'react';

function Login() {
  useEffect(() => {
    async function signInAsync() {
      try {
        await userManager.signinRedirect();
      } catch (err) {
        console.error(err);
      }
    }

    signInAsync();
  }, []);

  return (
    <div>
      <p>Redirecting to login page...</p>
    </div>
  );
}

export default Login;