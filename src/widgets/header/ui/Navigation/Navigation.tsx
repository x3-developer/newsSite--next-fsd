'use client';

import { ReactElement, Ref, useEffect, useMemo, useRef, useState } from 'react';
import { BurgerIcon, Foreach } from '@shared/ui';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { useClickAway } from '@uidotdev/usehooks';
import { INavigationProps } from '@widgets/header/ui/Navigation/navigation.types';
import { useSetAtom } from 'jotai';
import { INewsTag, newsListAtom, selectedNewsTagAtom, UntaggedNewsEnum } from '@/src/entities/news';
import { Link } from '@shared/i18n/routing';
import { useTranslations } from 'next-intl';

/**
 * Навигация
 *
 * @returns {ReactElement}
 * @constructor
 */
const Navigation = (props: INavigationProps): ReactElement => {
  const { newsList } = props;

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const burgerRef = useRef<HTMLDivElement>(null);
  const navbarRef = useClickAway((event: Event): void => {
    if (burgerRef.current?.contains(event.target as Node)) return;
    setIsOpened(false);
  }) as Ref<HTMLDivElement>;
  const setNewsList = useSetAtom(newsListAtom);
  const setSelectedNewsTag = useSetAtom(selectedNewsTagAtom);
  const translations = useTranslations('Common');

  const uniqueTags = useMemo(() => {
    const tagMap = new Map<string, INewsTag>();

    newsList.forEach((news) => {
      news.tag?.forEach((tag) => {
        if (!tagMap.has(tag.name)) {
          tagMap.set(tag.name, tag);
        }
      });
    });

    return Array.from(tagMap.values());
  }, [newsList]);

  useEffect(() => {
    setNewsList(newsList);
  }, [newsList, setNewsList]);

  return (
    <>
      <nav
        ref={navbarRef}
        className={clsx(styles.navbar, {
          [styles.opened]: isOpened,
        })}
      >
        <ul className={styles.navbarList}>
          <li>
            <Link href='/' className={styles.navbarLink} onClick={() => setSelectedNewsTag(UntaggedNewsEnum.DAY_NEWS)}>
              {translations('dayNews')}
            </Link>
          </li>
          <li>
            <Link href='/' className={styles.navbarLink} onClick={() => setSelectedNewsTag(UntaggedNewsEnum.HOT_NEWS)}>
              {translations('hotNews')}
            </Link>
          </li>
          <Foreach each={uniqueTags}>
            {(tag) => (
              <li key={tag.id}>
                <Link href='/' className={styles.navbarLink} onClick={() => setSelectedNewsTag(tag)}>
                  {tag.name}
                </Link>
              </li>
            )}
          </Foreach>
        </ul>
      </nav>
      <div ref={burgerRef} className={styles.burger} onClick={() => setIsOpened(!isOpened)}>
        <BurgerIcon />
      </div>
    </>
  );
};

export default Navigation;
