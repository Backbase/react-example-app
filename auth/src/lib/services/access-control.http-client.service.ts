import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ACC_CNTL_SERVICE_AGREEMENT, ACC_CNTL_SET_USR_CNTXT } from '../config/service-paths';
import { ServiceAgreement } from '../models';
import { BaseHttpService } from './base.http-client.service';

class AccessControlHttpClientService extends BaseHttpService {

    /**
     * * fetches the list of user contexts for the authenticated user
     */
    fetchServiceAgreements(): Observable<ServiceAgreement[]> {
        return this.get<ServiceAgreement[]>(ACC_CNTL_SERVICE_AGREEMENT, {
            queryParams: { from: 0, to: 7 }
        }).pipe(
            map((resp) => resp.response)
        );
    }

    /**
     * * sets the first context from the list as user context for the authenticated user
     */
    setUserContext(serviceAgreementId: string | null): Observable<any> {
        return this.post(ACC_CNTL_SET_USR_CNTXT, {
            serviceAgreementId
        }).pipe(
            map((resp) => resp.response)
        );
    }

}
export const accessControlHttpClientServiceObj = new AccessControlHttpClientService();