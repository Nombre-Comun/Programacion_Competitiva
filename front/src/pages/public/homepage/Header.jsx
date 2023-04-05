import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import '../../../styles/style.css';
import { getAuthenticatedUser } from '../../../config/ConfigIdentity';

function Header(){
    const [user, setUser] = useState('');
    useEffect(() => {
        async function getUser() {
          const user = await getAuthenticatedUser();
          setUser(user);
        }
        getUser();
      }, []);
    return (
        <Fragment>
            <header>
                <div className="contenedor">
                    <div className="barra">
                        <Link className="logo__header" to="/">
                            <h1 className="logo__nombre no-margin">
                            Cundi<span className="logo__bold">Code</span>
                            </h1>
                        </Link>
                        <nav className="navegacion">
                            <Link className="navegacion__enlace" to="/">Nosotros</Link>
                            <Link className="navegacion__enlace" to="/editor">Editor</Link>
                            <Link className="navegacion__enlace" to="/">Conceptos</Link>
                            <Link className="navegacion__enlace" to="/">Contacto</Link>
                            <Link className="navegacion__enlace" to="/register">Sign up</Link>
                            {user ? (
                                <Fragment>  
                                    <Link className="navegacion__enlace user__profile" to="/">{user.profile.name}</Link>
                                    <Link className="navegacion__enlace" to="/logout">Cerrar sesión</Link>
                                </Fragment>
                            ) : (
                                <Link className="navegacion__enlace" to="/login">Login</Link>
                            )}
                        </nav>
                    </div>
                </div>
            </header>
        </Fragment> 
    );
}
export default Header;