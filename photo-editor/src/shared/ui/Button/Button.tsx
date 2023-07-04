import { connectClassnames } from 'shared/lib/dom';
import styles from './styles.module.css';

export const Button = ({ className, children, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className={connectClassnames(styles.button, className)}
    // instead of this className defining you can use clsx/classnames or any other lib
    >
      {children}
    </button>
  );
};
