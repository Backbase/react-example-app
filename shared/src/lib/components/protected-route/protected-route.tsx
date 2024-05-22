import { PropsWithChildren, useEffect, useState } from 'react';
import { useAuth, hasAuthParams } from 'react-oidc-context';
import Loader from '../loader/loader';
import ErrorComponent from '../error/error';

export interface ProtectedRouteProps {}

/**
 * ProtectedRoute component - used to restrict unauthorized access of restricted pages
 */
export function ProtectedRoute(
  props: Readonly<PropsWithChildren<ProtectedRouteProps>>
) {
  const auth = useAuth();

  const [hasTriedSignin, setHasTriedSignin] = useState(false);

  /**
   * checks for authentication data, redirects to login if not found
   */
  useEffect(() => {
    if (
      !hasAuthParams() &&
      !auth.isAuthenticated &&
      !auth.activeNavigator &&
      !auth.isLoading &&
      !hasTriedSignin
    ) {
      auth.signinRedirect();
      setHasTriedSignin(true);
    }
  }, [auth, hasTriedSignin]);

  useEffect(() => {
    // the `return` is important - addAccessTokenExpiring() returns a cleanup function
    return auth.events.addAccessTokenExpiring(() => {
      alert("You're about to be signed out due to inactivity. Press continue to stay signed in.");
      auth.signinSilent();
    });
  }, [auth.events, auth.signinSilent]);

  if (auth.isLoading) {
    return <Loader />;
  }

  if (!auth.isAuthenticated) {
    return <ErrorComponent message="Unable to login" />;
  }

  return <>{props.children}</>;
}

export default ProtectedRoute;
