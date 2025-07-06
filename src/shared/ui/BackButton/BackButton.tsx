'use client';

import { HTMLAttributes, ReactElement } from 'react';
import ArrowIcon from '@shared/ui/Icon/ArrowIcon';
import { useRouter } from '@shared/i18n/routing';
import clsx from 'clsx';
import styles from './styles.module.scss';

/**
 * Кнопка "Назад"
 *
 * @param {HTMLAttributes<HTMLDivElement>} props
 * @returns {ReactElement}
 * @constructor
 */
const BackButton = (props: HTMLAttributes<HTMLButtonElement>): ReactElement => {
  const { className, ...rest } = props;
  const router = useRouter();

  return (
    <button className={clsx(styles.button, className)} {...rest} onClick={() => router.back()}>
      <div className={styles.icon}>
        <ArrowIcon />
      </div>
      <span>Назад</span>
    </button>
  );
};

export default BackButton;
