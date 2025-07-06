import { ReactElement } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { Link } from '@shared/i18n/routing';
import { Date, Foreach, Tag } from '@shared/ui';
import { INewsCardProps } from './newsCard.types';
import { getDay, getTime } from '@shared/utils/date';
import RedirectTitle from '@/src/entities/news/ui/NewsCard/ui/RedirectTitle/RedirectTitle';

/**
 * Карточка новости
 *
 * @returns {ReactElement}
 * @constructor
 */
const NewsCard = (props: INewsCardProps): ReactElement => {
  const { news } = props;

  return (
    <div className={styles.news}>
      <Link
        href={{
          pathname: `/news/${news.id}`,
        }}
        className={styles.image}
      >
        <Image src={news.leadImage} fill sizes='100%' alt={news.heading} className={styles.imageItem} priority />
      </Link>
      <div className={styles.info}>
        <div className={styles.tags}>
          <div className={styles.tagList}>
            <Foreach each={news.tag}>
              {(tag) => (
                <Tag className={styles.tag} key={tag.id}>
                  {tag.name}
                </Tag>
              )}
            </Foreach>
          </div>

          <div className={styles.details}>
            <Date>
              <Date.Day>{getDay(news.publicationStamp)}, </Date.Day>
              <Date.Time>{getTime(news.publicationStamp)}</Date.Time>
            </Date>

            {/*<Views className={styles.views}>
              <Views.Value>245</Views.Value>
            </Views>*/}
          </div>
        </div>
        <RedirectTitle>{news.heading}</RedirectTitle>
        <p className={styles.description}>{news.lead}</p>
      </div>
    </div>
  );
};

export default NewsCard;
