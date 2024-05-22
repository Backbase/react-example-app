import { Spinner } from 'react-bootstrap';

export interface LoaderProps{}

/**
 * Loader component
 */
export function Loader(props: LoaderProps) {
  return (
    <div className="app-loading">
      <div className="logo"></div>
      <svg className="spinner" viewBox="25 25 50 50">
        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
      </svg>
    </div>
  );
}

export default Loader;
