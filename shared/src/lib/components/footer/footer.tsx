import styles from './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

/**
 * Footer component
 */
export function Footer(props: FooterProps) {
  return (
    <footer className="bg-light-subtle text-center text-lg-start mt-4">
      <div className="text-center p-3" >
        © Copyright React App 2024
      </div>
    </footer>
  );
}

export default Footer;
