'use client';

import { ReactElement, useMemo } from 'react';
import styles from './styles.module.scss';
import { Button, Condition, Foreach } from '@shared/ui';
import { Link } from '@shared/i18n/routing';
import { getDay, getTime } from '@shared/utils/date';
import { INews, newsListAtom, selectedNewsTagAtom, UntaggedNewsEnum } from '@/src/entities/news';
import { useAtomValue } from 'jotai/index';
import { IOtherNewsProps } from './otherNews.types';
import { useSetAtom } from 'jotai';
import { useTranslations } from 'next-intl';

/**
 * Другие новости
 *
 * @returns {ReactElement}
 * @constructor
 */
const OtherNews = (props: IOtherNewsProps): ReactElement => {
  const { currentNewsId } = props;

  const newsList: INews[] = useAtomValue(newsListAtom);
  const setSelectedNewsTag = useSetAtom(selectedNewsTagAtom);
  const translations = useTranslations();

  const otherNewsList = useMemo(() => {
    const otherNews = [];

    for (const news of newsList) {
      if (otherNews.length === 3) break;
      if (news.id === currentNewsId) continue;

      otherNews.push(news);
    }

    return otherNews;
  }, [newsList]);

  return (
    <Condition
      _if={otherNewsList.length > 0}
      _then={
        <>
          <div className={styles.listContainer}>
            <h2 className={styles.listTitle}>{translations('Common.otherNews')}</h2>

            <div className={styles.list}>
              <Foreach each={otherNewsList}>
                {(item) => (
                  <Link
                    href={{
                      pathname: `/news/${item.id}`,
                    }}
                    className={styles.card}
                    key={item.id}
                  >
                    <span className={styles.cardDate}>
                      {getDay(item.publicationStamp)}, {getTime(item.publicationStamp)}
                    </span>
                    <h3 className={styles.cardTitle}>{item.heading}</h3>
                    <p>{item.lead}</p>
                  </Link>
                )}
              </Foreach>
            </div>
          </div>
          <Button
            color='golden'
            className={styles.loadMore}
            href='/'
            onClick={() => setSelectedNewsTag(UntaggedNewsEnum.ALL_NEWS)}
          >
            {translations('Buttons.openMore')}
          </Button>
        </>
      }
      _else={<></>}
    />
  );
};

export default OtherNews;
