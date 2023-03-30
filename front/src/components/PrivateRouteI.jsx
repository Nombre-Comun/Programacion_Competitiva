import { Route } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { getAuthenticatedUser } from '../config/ConfigIdentity';

const PrivateRouteI = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // check if the user is authenticated
    async function checkAuthentication() {
      const user = await getAuthenticatedUser();
      setIsAuthenticated(user !== null);
    }

    checkAuthentication();
  }, []);

  return (
    <Fragment>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            window.location.replace('/')
          )
        }
      />
    </Fragment>

  );
};

export default PrivateRouteI;
