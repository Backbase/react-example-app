import { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useAuth } from 'react-oidc-context';
import { Link } from 'react-router-dom';
import { Power, PersonCircle } from 'react-bootstrap-icons';

/* eslint-disable-next-line */
export interface NavMenuProps {}

/**
 * NavMenu component - renders the menus in the header
 */
export function NavMenu(props: NavMenuProps) {
  const backgroundColor = "#08173a";
  const textColor = "text-white";
  const auth = useAuth();

  const getFirstPath = () => {
    const path = window.location.pathname;
    const paths = path.split('/');
    if (paths.length > 1) {
      return paths.slice(0, 2).join('/');
    }
    return path;
  }

  const [activeKey, setActiveKey] = useState(getFirstPath());

  const logout = () => {
    auth?.signoutRedirect();
  }

  const navItemSelected = (selectedKey: string | null) => {
    selectedKey &&setActiveKey(selectedKey);
  }

  return (
    <div>
      <nav className={`navbar navbar-dark navbar-expand-lg`} style={{ backgroundColor }}>
        <div className="container-fluid justify-content-between">
          <Navbar.Brand className='px-4' as={Link} to="/">
            <span className={`logo`}></span>
          </Navbar.Brand>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className={`navbar-nav`}>
              <Nav onSelect={navItemSelected} activeKey={activeKey} variant="underline">
                <Nav.Link eventKey="/dashboard" as={Link} to='/dashboard'>Home</Nav.Link>
                <Nav.Link eventKey="/accounts" as={Link} to='/accounts'>Accounts</Nav.Link>
                <Nav.Link eventKey="/countries" as={Link} to='/countries'>Countries</Nav.Link>
              </Nav>
            </div>
          </div>
          <div className="actions d-flex align-items-center">
            <form className="d-flex w-70" role="search">
              <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
            </form>
            <button className={`btn ${textColor}`} onClick={() => logout()}>
              <Power size={24}></Power>
            </button>
            <button className={`btn ${textColor}`}>
              <PersonCircle size={24}></PersonCircle>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavMenu;
