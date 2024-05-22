import styles from './ui-react.module.scss';

/* eslint-disable-next-line */
export interface UiReactProps {}

export function UiReact(props: UiReactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiReact!</h1>
    </div>
  );
}

export default UiReact;
