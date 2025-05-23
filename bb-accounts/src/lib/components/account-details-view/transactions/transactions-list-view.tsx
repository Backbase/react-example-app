import { CardWrapper, ErrorView, ViewWithLoader } from '@backbase/ui-react';
import { useEffect, useState } from 'react';
import { accountsTransactionHttpClientServiceObj } from '@backbase/auth';
import EachTransactionListItemView from './each-transaction-list-item-view/each-transaction-list-item-view';
import { useParams } from "react-router-dom";

/* eslint-disable-next-line */
export interface TransactionslistViewProps { }

export function TransactionslistView(props: TransactionslistViewProps) {
  const params: any = useParams();
  const [transactions, setTransactions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>({});
  useEffect(() => {
    // Fetch the transaction list data
    accountsTransactionHttpClientServiceObj.fetchTransactions(params.id).subscribe({
      next: (transactions) => {
        setTransactions(transactions);
        setIsLoading(false);
      },
      error: (err) => {
        setIsLoading(false);
        setError(err);
      },
    });
  }, []);

  return (
    <CardWrapper classes='p-4'>
      <ViewWithLoader isLoading={isLoading}>
        {
          !error?.status
            ?
            (<div className='px-2'>
              {
                transactions?.length > 0
                ?
                (transactions?.map((txn) => {
                  return <EachTransactionListItemView txn={txn} key={txn?.id}></EachTransactionListItemView>
                }))
                :
                (
                  <p className='p-4'>No Transactions found.</p>
                )
              }
            </div>)
            :
            <ErrorView showInCard={false} error={error}></ErrorView>
        }
      </ViewWithLoader>
    </CardWrapper>
  );
}

export default TransactionslistView;
