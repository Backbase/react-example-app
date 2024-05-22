import { User, WebStorageStateStore } from "oidc-client-ts";

/**
 * OIDC config
 */
export const oidcConfig = {
    authority: '${AUTH_URL}realms/${AUTH_REALM}',
    client_id: '${AUTH_CLIENT_ID}',
    redirect_uri: document.location.origin + '/select-context',
    response_type: 'code',
    scope: '${AUTH_SCOPE}',
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
