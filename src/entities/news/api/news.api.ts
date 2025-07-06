'use server';

import { actionFetch } from '@shared/api';
import { IGetNewsByIdActionParams, IGetNewsListActionParams, INews } from '@/src/entities/news';
import { IActionFetchResult } from '@shared/api/api.types';

/**
 * Получение списка новостей
 *
 * @returns {Promise<IActionFetchResult<INews[]>>}
 */
export const getNewsListAction = async (limit: number): Promise<IActionFetchResult<INews[]>> => {
  return await actionFetch<IGetNewsListActionParams, INews[]>('media.GetList', {
    slug: 'news',
    limit,
  });
};

/**
 * Получение новости по ID
 *
 * @param {number} newsId
 * @returns {Promise<IActionFetchResult<INews | null>>}
 */
export const getNewsByIdAction = async (newsId: number): Promise<IActionFetchResult<INews | null>> => {
  return await actionFetch<IGetNewsByIdActionParams, INews>('media.Get', {
    mediaId: newsId,
  });
};
