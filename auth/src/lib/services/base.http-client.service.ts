import { ajax, AjaxConfig, AjaxResponse } from 'rxjs/ajax';
import {  Observable, of, switchMap } from 'rxjs';
import { getAuthHeader } from '../config/api.config';
import { serializeHttpQueyParams } from '../utils/http.util';

export class BaseHttpService {
    protected ajaxInstance;

    constructor() {
        this.ajaxInstance = ajax;
    }

    /**
     * Get request
     * @param url
     * @param config
     */
    public get<T>(url: string, config?: Omit<AjaxConfig, 'url' | 'body'>): Observable<AjaxResponse<T>> {
        return this.executeRequest({url, method: 'GET', ...config});
    }

    /**
     * Post request
     * @param url
     * @param body
     * @param config
     */
    public post<T>(url: string, body: any, config?: Omit<AjaxConfig, 'url' | 'body'>): Observable<AjaxResponse<T>> {
        return this.executeRequest({url, body, method: 'POST', ...config});
    }

    protected executeRequest<T>(config: AjaxConfig): Observable<AjaxResponse<T>> {
        const qryParamas = config.queryParams ? `?${serializeHttpQueyParams(config.queryParams)}` : '';
        config = {
            ...config,
            ...{url: `${config.url}${qryParamas}`},
            headers: {
                ...getAuthHeader()
            }
        };

        let execution: Observable<AjaxConfig> | Observable<AjaxResponse<T>> = of(config);
        execution =  execution
            .pipe<AjaxResponse<T>>(switchMap((requestConfig) => this.ajaxInstance<T>(requestConfig)));
        return execution;
    }
}