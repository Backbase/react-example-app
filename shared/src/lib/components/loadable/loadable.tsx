import { PropsWithChildren, Suspense } from 'react';
import Loader from '../loader/loader';

// eslint-disable-next-line @typescript-eslint/no-explicit-any

/**
 * Loadable component - used for lazy loading
 * accepts the component as parameter which should be lazily loaded
 * shows the loader until module is downloaded
 */
export function Loadable(Component: any) {
  return function inner(props: PropsWithChildren) {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );
  };
}

export default Loadable;
