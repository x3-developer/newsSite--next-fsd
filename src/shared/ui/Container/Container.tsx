import { HTMLAttributes, ReactElement } from 'react';
import styles from './styles.module.scss';

/**
 * Контейнер сайта
 *
 * @param props {HTMLAttributes<HTMLDivElement>}
 * @returns {ReactElement}
 * @constructor
 */
const Container = (props: HTMLAttributes<HTMLDivElement>): ReactElement => {
  const { children, ...rest } = props;

  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  );
};

export default Container;
