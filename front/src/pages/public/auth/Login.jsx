import userManager from '../../../config/ConfigIdentity';
import React, { useEffect } from 'react';

function LoginPage() {
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

export default LoginPage;