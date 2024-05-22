/* contains the pages that should be loaded lazily */

import { Loadable } from '@backbase-react/shared';
import { lazy } from 'react';


// Countries List view
export const CountriesPage = Loadable(
    lazy(() =>
        import('@backbase-react/bb-accounts').then((m) => ({
            default: m.Countries,
        }))
    )
);

// Account List view
export const AccountsListPage = Loadable(
    lazy(() =>
        import('@backbase-react/bb-accounts').then((m) => ({
            default: m.AccountList,
        }))
    )
);

// Account details main container which contains transactions and info tab
export const AccountDetailViewContainer = Loadable(
    lazy(() =>
        import('@backbase-react/bb-accounts').then((m) => ({
            default: m.AccountsDetailView,
        }))
    )
);

// Account details info view
export const AccountInfoView = Loadable(
    lazy(() =>
        import('@backbase-react/bb-accounts').then((m) => ({
            default: m.AccountInfo,
        }))
    )
);

// Transaction List view
export const TransactionslistView = Loadable(
    lazy(() =>
        import('@backbase-react/bb-accounts').then((m) => ({
            default: m.TransactionslistView,
        }))
    )
);