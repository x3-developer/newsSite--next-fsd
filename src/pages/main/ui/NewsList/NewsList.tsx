'use client';

import { ReactElement, useMemo } from 'react';
import {
  INews,
  INewsTag,
  isNewsTag,
  NewsCard,
  newsListAtom,
  selectedNewsTagAtom,
  UntaggedNewsEnum,
} from '@/src/entities/news';
import { Foreach } from '@shared/ui';
import { useAtomValue } from 'jotai';

/**
 * Фильтрует список новостей по тегу
 *
 * @param {INews[]} newsList
 * @param {INewsTag} newsTag
 * @returns {INews[]}
 */
const filterNewsByTag = (newsList: INews[], newsTag: INewsTag): INews[] => {
  const filteredNews: INews[] = [];

  for (const newsItem of newsList) {
    if (newsItem.tag.some((tag) => tag.id === newsTag.id)) {
      filteredNews.push(newsItem);
    }
  }

  return filteredNews;
};

/**
 * Фильтрует список новостей по текущему дню
 *
 * @param {INews[]} newsList
 * @returns {INews[]}
 */
const filterNewsByCurrentDay = (newsList: INews[]): INews[] => {
  const currentDate = new Date();
  const filteredNews: INews[] = [];

  for (const newsItem of newsList) {
    const newsDate = new Date(newsItem.publicationStamp);

    if (newsDate.getDate() === currentDate.getDate()) filteredNews.push(newsItem);
  }

  return filteredNews;
};

/**
 * Список новостей
 *
 * @returns {ReactElement}
 * @constructor
 */
const NewsList = (): ReactElement => {
  const newsList = useAtomValue(newsListAtom);
  const selectedNewsTagValue = useAtomValue(selectedNewsTagAtom);

  const filteredNewsList = useMemo(() => {
    let filteredNews: INews[];

    if (isNewsTag(selectedNewsTagValue)) {
      filteredNews = filterNewsByTag(newsList, selectedNewsTagValue);
    } else {
      switch (selectedNewsTagValue) {
        case UntaggedNewsEnum.DAY_NEWS:
          filteredNews = filterNewsByCurrentDay(newsList);
          break;
        default:
          filteredNews = newsList;
      }
    }

    return filteredNews;
  }, [newsList, selectedNewsTagValue]);

  return <Foreach each={filteredNewsList}>{(newsItem) => <NewsCard news={newsItem} key={newsItem.id} />}</Foreach>;
};

export default NewsList;
