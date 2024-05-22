import { Footer, Header } from '@backbase-react/shared';
import { PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';
import styles from './retail-layout.module.scss';

export interface RetailLayoutProps {}

/**
 * RetailLayout component - renders the base layout for the application
 */
export function RetailLayout(
  props: Readonly<PropsWithChildren<RetailLayoutProps>>
) {
  return (
    <div className={`d-flex flex-column min-vh-100 ${styles['bb-background']}`}>
      <Header />
        <Container className='my-5 flex-grow-1'>
          {props.children}
        </Container>
      <Footer />
    </div>
  );
}

export default RetailLayout;
