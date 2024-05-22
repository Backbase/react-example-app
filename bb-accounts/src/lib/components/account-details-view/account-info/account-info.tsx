import { accountsTransactionHttpClientServiceObj } from '@backbase-react/auth';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AccountInfoContainer } from './account-info-container/account-info-container';
import { accountInfoViewDefaultConfig } from '../../../config/account-info.config';
import { ErrorView, ViewWithLoader } from '@backbase-react/ui-react';

/* eslint-disable-next-line */
export interface AccountInfoProps { }

export function AccountInfo(props: AccountInfoProps) {
  const params: any = useParams();
  const [accountInfo, setAccountInfo] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>({});
  useEffect(() => {
    // Fetch the transaction list data
    accountsTransactionHttpClientServiceObj.fetchAccountDetails(params.id).subscribe({
      next: (accountInfoResp) => {
        setAccountInfo(accountInfoResp);
        setIsLoading(false);
      },
      error: (err) => {
        setIsLoading(false);
        setError(err)
      },
    });
  }, []);

  return (
    <ViewWithLoader isLoading={isLoading}>
      {
        !error?.status ?
          accountInfoViewDefaultConfig.map((config, i) => {
            return <AccountInfoContainer accountInfo={accountInfo} key={i} config={config} />
          })
        : 
        <ErrorView error={error}></ErrorView>
      }
    </ViewWithLoader>
  );
}

export default AccountInfo;
