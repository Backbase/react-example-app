import { ProtectedRoute } from '@backbase-react/shared';
import { Navigate, Outlet, RouteObject, useRoutes } from 'react-router-dom';
import RetailLayout from './retail-layout/retail-layout';
import { SelectContext } from '@backbase-react/auth';
import { AccountsListPage, CountriesPage, AccountDetailViewContainer, AccountInfoView, TransactionslistView } from './journeys/app-journeys.bundle';
import { environment } from '../environments/environment';

function VerifiedGuardOnView(props: any) {
  if (environment.skipLogin) {
    return <>{props.children}</>
  }
  return <ProtectedRoute>{props.children}</ProtectedRoute>
}
/**
 * route specification
 */
const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <VerifiedGuardOnView>
        <RetailLayout>
          <Outlet />
        </RetailLayout>
      </VerifiedGuardOnView>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <AccountsListPage />,
      },
      {
        path: 'accounts',
        element: <AccountsListPage />,
      },
      {
        path: 'countries',
        element: <CountriesPage />
      },
      {
        path: 'accounts/:id',
        element: <AccountDetailViewContainer />,
        children: [
          {
            path: '',
            element: <Navigate to="account-info" replace />,
          },
          {
            path: 'account-info',
            element: <AccountInfoView />,
          },
          {
            path: 'transactions',
            element: <TransactionslistView />,
          }
        ]
      },
      {
        path: 'select-context',
        element: <SelectContext />
      }
    ],
  },
  {
    path: '*',
    element: <Navigate to="/dashboard" replace />,
  },
];

export function Routes() {
  return useRoutes(routes);
}

export default Routes;
