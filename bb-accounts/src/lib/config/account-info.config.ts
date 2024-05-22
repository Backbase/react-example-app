export const accountInfoViewDefaultConfig: any[] = [
    {
        title: 'General',
        children: [
            {
                title: 'Account Type',
                key: 'productKindName',
                tooltip: 'Account Type'
            },
            {
                title: 'Available Balance',
                key: 'availableBalance'
            },
            {
                title: 'Account Owner(s)',
                key: 'accountHolderNames'
            },
            {
                title: 'ACH Routing Number',
                key: 'bankBranchCode',
                tooltip: 'Bank Branch Code'
            },
            {
                title: 'Account Status',
                key: 'state.state'
            }
        ]
    },
    {
        title: 'Interest Details',
        children: [
            {
                title: 'Interest Rate',
                key: 'accountInterestRate'
            },
            {
                title: 'Accrued Interest',
                key: 'accruedInterest',
                tooltip: 'It\'s Accrued Interest'
            },
        ]
    },
    {
        title: 'Overdraft Details',
        children: [
            {
                title: 'Overdraft Limit',
                key: 'creditLimit'
            },
        ]
    },
    {
        title: 'Other',
        children: [
            {
                title: 'Account Opening Date',
                key: 'accountOpeningDate'
            },
            {
                title: 'Last Updated Date',
                key: 'lastUpdateDate'
            },
        ]
    }
]