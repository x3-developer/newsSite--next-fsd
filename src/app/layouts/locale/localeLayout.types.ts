import { PropsWithChildren } from 'react';
import { Locale } from '@shared/i18n/i18n.types';

export interface ILocaleLayoutProps extends PropsWithChildren {
  params: Promise<{
    locale: Locale;
  }>;
}
