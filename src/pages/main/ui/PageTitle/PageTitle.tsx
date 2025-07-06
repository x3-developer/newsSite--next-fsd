'use client';

import { ReactElement } from 'react';
import { useAtomValue } from 'jotai';
import styles from '@pages/main/styles.module.scss';
import { useTranslations } from 'next-intl';
import { isNewsTag, selectedNewsTagAtom } from '@/src/entities/news';

/**
 * Заголовок страницы
 *
 * @returns {ReactElement}
 * @constructor
 */
const PageTitle = (): ReactElement => {
  const selectedNewsTagValue = useAtomValue(selectedNewsTagAtom);
  const translations = useTranslations('Common');

  return (
    <h1 className={styles.title}>
      {isNewsTag(selectedNewsTagValue) ? selectedNewsTagValue.name : translations(selectedNewsTagValue)}
    </h1>
  );
};

export default PageTitle;
