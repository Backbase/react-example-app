import {
  GlobalAttributesApi,
  Configuration,
  Middleware,
} from '@backbase-react/tyscript-rxjs';
import { getAccessTokenFromStorage } from '../utils';


export const BASE_PATH = '/api';

export function getAuthHeader(): any {
  return { 
      Authorization: `Bearer ${getAccessTokenFromStorage()}`,
  };
}
/**
 * Adds Authorization header to HTTP requests made via RxJS
 */
const middleware: Middleware = {
  pre(req) {
    req.headers = getAuthHeader();
    return req;
  },
};

/**
 * RxJS api config
 */
export const rxApiEndPoint = new GlobalAttributesApi(
  new Configuration({
    basePath: BASE_PATH,
    middleware: [middleware],
  })
);