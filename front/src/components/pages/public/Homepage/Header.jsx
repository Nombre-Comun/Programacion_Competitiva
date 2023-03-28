import { Fragment } from "react";
import { Link } from "react-router-dom";
import '../../../assets/style.css';

function Header(props){
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
                            {props.user ? (
                                <Fragment>  
                                    <Link className="navegacion__enlace user__profile" to="/">{props.user.profile.name}</Link>
                                    <Link className="navegacion__enlace" to="/logout">Cerrar sesión</Link>
                                </Fragment>
                            ) : (
                                <Link className="navegacion__enlace" to="/login">Ingresar</Link>
                            )}
                        </nav>
                    </div>
                </div>
            </header>
        </Fragment> 
    );
}
export default Header;