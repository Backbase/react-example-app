
/* eslint-disable-next-line */
export interface EachTransactionListItemViewProps {
  txn: any;
}

export function EachTransactionListItemView(
  props: EachTransactionListItemViewProps
) {
  const { txn } = props
  const currencyCls = +txn?.transactionAmountCurrency?.amount > 0 ? 'success' : 'danger';
  return (
    <div className="d-flex flex-row mt-2 transaction-item">
      <div className="p-2 col-5">
        <div className='d-flex flex-column'>
          <p className='font-weight-bold'>{txn?.counterPartyName}</p>
          <p>{txn?.category}</p>
        </div>
      </div>
      <div className={'p-2 text-' + currencyCls}>{
        txn?.transactionAmountCurrency?.currencyCode + ' ' + txn?.transactionAmountCurrency?.amount
      }</div>
    </div>
  );
}

export default EachTransactionListItemView;
