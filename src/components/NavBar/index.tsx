import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';

const NavBar = () => {
  return (
    <header className="topbar" data-navbarbg="skin5">
        <nav className="navbar top-navbar navbar-expand-md navbar-dark d-flex align-items-center">
            <div className="navbar-header" data-logobg="skin5">
                <span className="navbar-brand">
                    <b className="logo-icon">
                        <h3 className="mb-0 ml-2">Dashboard</h3>
                    </b>
                </span>
                <span className="nav-toggler waves-effect waves-light d-flex d-md-none align-items-center justify-content-center mr-3">
                    <Icon path={mdiMenu} size={1} />
                </span>
            </div>
            <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item search-box">
                        <span className="nav-link waves-effect waves-dark">
                            <i className="ti-search"></i>
                        </span>
                        <form className="app-search position-absolute">
                            <input type="text" className="form-control" placeholder="Search &amp; enter"/>
                            <i className="ti-close"></i>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  );
}

export default NavBar;
