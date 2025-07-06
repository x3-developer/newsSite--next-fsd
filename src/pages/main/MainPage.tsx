import { ReactElement } from 'react';
import { Container } from '@shared/ui';
import styles from './styles.module.scss';
import NewsList from '@pages/main/ui/NewsList/NewsList';
import PageTitle from '@pages/main/ui/PageTitle/PageTitle';

/**
 * Главная страница {/}
 *
 * @returns {Promise<ReactElement>}
 * @constructor
 */
const MainPage = async (): Promise<ReactElement> => {
  return (
    <section className={styles.news}>
      <Container>
        <PageTitle />

        <div className={styles.list}>
          <NewsList />
        </div>
      </Container>
    </section>
  );
};

export default MainPage;
