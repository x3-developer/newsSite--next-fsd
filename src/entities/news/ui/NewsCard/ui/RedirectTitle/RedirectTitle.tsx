'use client';

import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { useUtm } from '@app/provider';
import { Link } from '@shared/i18n/routing';

/**
 * Заголовок для редиректа на страницу с UTM-метками
 *
 * @returns {ReactElement}
 * @constructor
 */
const RedirectTitle = (props: PropsWithChildren): ReactElement => {
  const { children } = props;

  const [redirectUrl, setRedirectUrl] = useState<string>('');
  const { getRedirectLink } = useUtm();

  useEffect(() => {
    setRedirectUrl(getRedirectLink());
  }, [redirectUrl, getRedirectLink]);

  return (
    <Link href={redirectUrl}>
      <h3 className={styles.title}>{children}</h3>
    </Link>
  );
};

export default RedirectTitle;
