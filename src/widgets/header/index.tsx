import { ReactElement } from 'react';
import { Container } from '@shared/ui';
import Image from 'next/image';
import logo from '@public/images/logo/logo.png';
import styles from './styles.module.scss';
import { Link } from '@shared/i18n/routing';
import Navigation from './ui/Navigation/Navigation';
import { getNewsListAction } from '@/src/entities/news';

/**
 * Шапка сайта
 *
 * @returns {Promise<ReactElement>}
 * @constructor
 */
const Header = async (): Promise<ReactElement> => {
  const newsListResult = await getNewsListAction(200);
  const newsList = newsListResult?.data ?? [];

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.container}>
          <Link href={{ pathname: '/' }} className={styles.logo}>
            <Image src={logo} alt='Steamline News' title='Steamline News' className={styles.logoImage} priority />
          </Link>

          <Navigation newsList={newsList} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
