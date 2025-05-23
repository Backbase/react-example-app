import { accountsTransactionHttpClientServiceObj } from '@backbase/auth';
import { useEffect, useState } from 'react';
import { ProductGroup, ViewWithLoader } from '@backbase/ui-react';
interface DataInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: {
    current: [];
    savings: [],
    pocket: [],
    loans: [],
  };
}

/* eslint-disable-next-line */
export interface AccountListProps { }

export function AccountList(props: AccountListProps) {

  const [productsSummary, setProductsSummary] = useState<DataInterface>({ data: { current: [], savings: [], pocket: [], loans: [] } });
  const [isLoading, setIsLoading] = useState(true);

  // fetch product summary data from Sandbox API
  useEffect(() => {
    accountsTransactionHttpClientServiceObj.fetchAccounts().subscribe({
      next: (response) => {
        const output = {
          data: {
            current: response.filter((account: any) => account.productKindName === 'Current Account'),
            savings: response.filter((account: any) => account.productKindName === 'Savings Account'),
            pocket: response.filter((account: any) => account.productKindName === 'Pocket Parent'),
            loans: response.filter((account: any) => account.productKindName === 'Loan')
          }
        }
        setProductsSummary(output);
        setIsLoading(false);
      },
      error: (error) => {
        setIsLoading(false);
        console.error('Error fetching Sandbox data:', error);
      }
    });
  }, []);

  return (
    <div>
      <h1 className='mb-4 font-weight-bold'>My Accounts</h1>
      <ViewWithLoader isLoading={isLoading}>
        {productsSummary?.data?.current?.length > 0 && <ProductGroup accountInfoArr={productsSummary?.data?.current} title='Current Accounts'></ProductGroup>}
        {productsSummary?.data?.savings?.length > 0 && <ProductGroup accountInfoArr={productsSummary?.data?.savings} title='Savings Accounts'></ProductGroup>}
        {productsSummary?.data?.loans?.length > 0 && <ProductGroup accountInfoArr={productsSummary?.data?.loans} title='Loan'></ProductGroup>}
        {productsSummary?.data?.pocket?.length > 0 && <ProductGroup accountInfoArr={productsSummary?.data?.pocket} title='Pocket Parent'></ProductGroup>}
      </ViewWithLoader>
    </div>
  );
}

export default AccountList;
