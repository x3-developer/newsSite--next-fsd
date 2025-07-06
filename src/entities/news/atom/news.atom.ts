import { atom } from 'jotai';
import { INews, INewsTag, UntaggedNewsEnum } from '@/src/entities/news';

export const newsListAtom = atom<INews[]>([]);
export const selectedNewsTagAtom = atom<INewsTag | UntaggedNewsEnum>(UntaggedNewsEnum.ALL_NEWS);
