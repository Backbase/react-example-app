import { NavLink, Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { NavLink as Nav } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';

/* eslint-disable-next-line */
export interface AccountsDetailViewProps { }

export function AccountsDetailView(props: AccountsDetailViewProps) {
  return (
    <div className="account-detail-view">
      <Button variant="light" className="font-weight-bold mb-2">
        <Nav href="/accounts"><ArrowLeft className="pr-2" size={24} /> My Accounts</Nav>
      </Button>
      <div className="mx-2">
        <h1>Account basic info</h1>
      </div>
      <div className="mt-4">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink className="nav-link" to='transactions'>Transactions</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='account-info'>Account Details</NavLink>
          </li>
        </ul>
      </div>
      <div className="detail-view-container mt-5">
        <Outlet />
      </div>
    </div>
  );
}

export default AccountsDetailView;
