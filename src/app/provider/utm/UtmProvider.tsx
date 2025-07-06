'use client';

import { createContext, PropsWithChildren, ReactElement, useContext, useEffect } from 'react';
import { usePathname } from '@shared/i18n/routing';
import { useSearchParams } from 'next/navigation';
import { REDIRECT_URL } from '@shared/constants/env';
import { IUtmContext } from '@app/provider/utm/utmprovider.types';

const UTM_STORAGE_KEY = 'UTM_PARAMS';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'product', 'click_id', 'lp'];
const URL_LANDING_NAME = 'lp';
const DEFAULT_LANDING_INDEX = 'landing42';

const UtmContext = createContext<IUtmContext>({
  getRedirectLink: () => '',
});

/**
 * Провайдер для работы с UTM метками
 *
 * @param {PropsWithChildren} props
 * @returns {ReactElement}
 * @constructor
 */
export const UtmProvider = (props: PropsWithChildren): ReactElement => {
  const { children } = props;

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hasUtm = UTM_KEYS.some((key) => searchParams?.get(key));

    if (hasUtm) {
      const params = searchParams?.toString();
      if (params) localStorage.setItem(UTM_STORAGE_KEY, params);
    }
  }, [pathname]);

  const getRedirectLink = (): string => {
    if (typeof window === 'undefined') return '';

    const savedParams = localStorage.getItem(UTM_STORAGE_KEY) || '';
    const params = new URLSearchParams(savedParams);
    const landing = params.get(URL_LANDING_NAME) || DEFAULT_LANDING_INDEX;
    params.delete(URL_LANDING_NAME); // Удаляем lp из query параметров

    return `${REDIRECT_URL}/${landing}?${params.toString()}`;
  };

  return <UtmContext.Provider value={{ getRedirectLink }}>{children}</UtmContext.Provider>;
};

export const useUtm = (): IUtmContext => useContext(UtmContext);
