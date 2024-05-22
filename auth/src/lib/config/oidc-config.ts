import { User, WebStorageStateStore } from "oidc-client-ts";

/**
 * OIDC config
 */
export const oidcConfig = {
  authority: 'https://identity.dev.sdbxaz.azure.backbaseservices.com/auth/realms/customer',
  client_id: 'bb-web-client',
  redirect_uri: document.location.origin + '/select-context',
  response_type: 'code',
  scope: 'openid',
  post_logout_redirect_uri: document.location.origin + '/',
  automaticSilentRenew: true,
  silentRequestTimeoutInSeconds: 5,
  silent_redirect_uri: document.location.origin + '/silent-refresh.htm',
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  onSigninCallback: (_user: User | void): void => {
    window.history.replaceState({}, document.title, window.location.pathname);
  }
};

export default oidcConfig;
