import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ACCOUNT_DETAILS, ACCOUNT_LIST, TRANSACTION_LIST } from '../config/service-paths';
import { BaseHttpService } from './base.http-client.service';

class AccountsTransactionHttpClientService extends BaseHttpService {

    // Fetch all transaction for select account
    fetchTransactions(id: string): Observable<any> {
        const params = {
            arrangementsIds: id,
            from: 0,
            size: 10,
            orderBy: 'bookingDate',
            direction: 'DESC'
        }
        return this.get(TRANSACTION_LIST, {
            queryParams: params
        }).pipe(
            map((resp) => resp.response)
        );
    }

    // Fetch all accounts
    fetchAccounts(): Observable<any> {
        const params = { debitAccount: true, businessFunction: "A2A Transfer", resourceName: "Payments", privilege: "create", from: 0, size: 100 };
        return this.get(ACCOUNT_LIST, {
            queryParams: params
        }).pipe(
            map((resp) => resp.response)
        );
    }

    // Fetch account details
    fetchAccountDetails(aggrementId: string): Observable<any> {
        return this.get(`${ACCOUNT_DETAILS}/${aggrementId}`).pipe(
            map((resp) => resp.response)
        );
    }

}
export const accountsTransactionHttpClientServiceObj = new AccountsTransactionHttpClientService();