/* eslint-disable-next-line */
export interface ViewWithLoaderProps {
  children: any;
  isLoading: boolean;
}

export function ViewWithLoader(props: ViewWithLoaderProps) {
  return (

    props?.isLoading ? (
      <div className='d-flex justify-content-center'>
        <div className="spinner-border">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    ) : (
      <>
        {props.children}
      </>
    )
  );
}

export default ViewWithLoader;
