import styles from './tyscript-rxjs.module.scss';

/* eslint-disable-next-line */
export interface TyscriptRxjsProps {}

export function TyscriptRxjs(props: TyscriptRxjsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TyscriptRxjs!</h1>
    </div>
  );
}

export default TyscriptRxjs;
