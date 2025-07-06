'use client';

import { ReactElement, useEffect, useState } from 'react';
import styles from '@pages/news/[id]/styles.module.scss';
import { Button } from '@shared/ui';
import { useUtm } from '@app/provider';
import { useTranslations } from 'next-intl';

/**
 * Кнопка для редиректа на страницу с UTM-метками
 *
 * @returns {ReactElement}
 * @constructor
 */
const RedirectButton = (): ReactElement => {
  const [redirectUrl, setRedirectUrl] = useState<string>('');
  const translations = useTranslations();
  const { getRedirectLink } = useUtm();

  useEffect(() => {
    setRedirectUrl(getRedirectLink());
  }, [redirectUrl, getRedirectLink]);

  return (
    <Button href={redirectUrl} isFilled className={styles.readMore}>
      {translations('Buttons.readMore')}
    </Button>
  );
};

export default RedirectButton;
