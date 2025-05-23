import { useEffect, useState } from 'react';
import { accessControlHttpClientServiceObj } from '../../services';
import { ErrorComponent, Loader } from '@backbase/shared';
import { Navigate } from 'react-router-dom';
import { ServiceAgreement } from '../../models';

/**
 * SelectContext component -  Sets the default context for the authenticated user and redirects to Dashboard page
 */
export function SelectContext() {
  const [hasError, setHasError] = useState(false);
  const [hasUserContext, setHasUserContext] = useState(false);

  /**
   * makes HTTP request for fetching and setting the user context
   */
  useEffect(() => {
    accessControlHttpClientServiceObj.fetchServiceAgreements().subscribe({
      next: (result: ServiceAgreement[]) => {
        const serviceAgreementId = result?.[0]?.id || null;
        accessControlHttpClientServiceObj.setUserContext(serviceAgreementId).subscribe({
          next: (resp) => {
            setHasUserContext(true);
          },
          error: () => {
            setHasError(true);
          }
        })
      },
      error: (err) => {
        setHasError(true);
      },
    });
  }, []);

  return (
    <>
      {hasError && (
        <ErrorComponent message="Error while setting user context" />
      )}
      {!hasError && <Loader />}
      {hasUserContext && <Navigate to="/dashboard" />}
    </>
  );
}

export default SelectContext;
