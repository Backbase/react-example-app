import CardWrapper from "../card-wrapper/card-wrapper";

/* eslint-disable-next-line */
export interface ErrorViewProps {
  error: any;
  showInCard?: boolean;
}

function ReturnErrorBlockByError(err: any) {
  switch (err?.status) {
    case 401:
      return <p>You are not authorized!</p>;
    case 400:
      return <div>
        <div className="font-weight-bold d-flex justify-content-center">
          Bad request error
        </div>
        <div className="d-flex justify-content-center">
          There is a problem with the action you are trying to perform.
        </div>
      </div>;
    default:
      return <p >Something went wrong!</p>;
  }
}
export function ErrorView(props: ErrorViewProps) {
  const ErrorBlockView = () => {
    return <div className="p-4 d-flex justify-content-center">
      <ReturnErrorBlockByError {...props.error} />
    </div>
  };
  return (
    props?.showInCard !== false
    ? (<CardWrapper>
      <ErrorBlockView />
    </CardWrapper>)
    : <ErrorBlockView />
  );
}

export default ErrorView;
