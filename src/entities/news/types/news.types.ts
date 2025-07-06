export enum UntaggedNewsEnum {
  ALL_NEWS = 'allNews',
  DAY_NEWS = 'dayNews',
  HOT_NEWS = 'hotNews',
}

export interface INewsTag {
  id: number;
  name: string;
  slug: null;
}

export interface INews {
  id: number;
  publicationStamp: string;
  heading: string;
  lead: string;
  icon: null;
  link: string;
  author: string;
  leadImage: string;
  tag: INewsTag[];
}

export interface IGetNewsListActionParams {
  slug: 'news';
  limit: number;
}

export interface IGetNewsByIdActionParams {
  mediaId: number;
}

/**
 * Type guard для проверки, является ли переданный параметр тегом новости
 *
 * @param {INewsTag | UntaggedNewsEnum} tag
 * @returns {boolean}
 */
export const isNewsTag = (tag: INewsTag | UntaggedNewsEnum): tag is INewsTag => {
  return typeof tag === 'object' && tag !== null && 'name' in tag;
};
