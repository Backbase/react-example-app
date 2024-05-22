/* eslint-disable-next-line */
export interface CardWrapperProps {
  children: any;
  classes?: string;
}

export function CardWrapper(props: CardWrapperProps) {
  return (
      <div className={'card-container card ' + props.classes}>
        {props.children}
      </div>
  );
}

export default CardWrapper;
