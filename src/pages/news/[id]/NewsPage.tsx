import { ReactElement } from 'react';
import { BackButton, Container, Date, Foreach, Tag } from '@shared/ui';
import styles from './styles.module.scss';
import Image from 'next/image';
import { INewsPageProps } from '@pages/news/[id]/newsPage.types';
import NotFound from '@/app/[locale]/(site)/not-found';
import { getNewsByIdAction } from '@/src/entities/news';
import { getDay, getTime } from '@shared/utils/date';
import OtherNews from '@pages/news/[id]/ui/OtherNews/OtherNews';
import RedirectButton from '@pages/news/[id]/ui/RedirectButton/RedirectButton';

/**
 * Страница новости
 *
 * @returns {ReactElement}
 * @constructor
 */
const NewsPage = async (props: INewsPageProps): Promise<ReactElement> => {
  const { id } = await props.params;
  const newsId = Number(id);

  if (isNaN(newsId)) return <NotFound />;

  const newsResult = await getNewsByIdAction(newsId);
  const news = newsResult?.data;

  if (!news) return <NotFound />;

  return (
    <section className={styles.news}>
      <Container>
        <BackButton className={styles.backButton} />

        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.image}>
              <Image src={news.leadImage} fill sizes='100%' alt={news.heading} className={styles.imageItem} priority />
            </div>
            <div className={styles.tags}>
              <div className={styles.tagList}>
                <Foreach each={news.tag}>
                  {(tag) => (
                    <Tag className={styles.tag} color='gray' key={tag.id}>
                      {tag.name}
                    </Tag>
                  )}
                </Foreach>
              </div>

              <Date>
                <Date.Day>{getDay(news.publicationStamp)}, </Date.Day>
                <Date.Time>{getTime(news.publicationStamp)}</Date.Time>
              </Date>
            </div>

            <h1 className={styles.title}>{news.heading}</h1>

            <div className={styles.description}>
              <p className={styles.descriptionText}>{news.lead}</p>
            </div>

            <RedirectButton />
          </div>

          <div className={styles.newsList}>
            <OtherNews currentNewsId={newsId} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsPage;
