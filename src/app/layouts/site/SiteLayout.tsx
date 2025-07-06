import { PropsWithChildren, ReactElement } from 'react';
import Header from '@widgets/header';
import styles from './styles.module.scss';

/**
 * Базовый layout сайта
 *
 * @param props {PropsWithChildren}
 * @returns {Promise<ReactElement>}
 * @constructor
 */
const SiteLayout = async (props: PropsWithChildren): Promise<ReactElement> => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default SiteLayout;
