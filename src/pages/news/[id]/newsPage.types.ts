import { Locale } from '@shared/i18n/i18n.types';

export interface INewsPageProps {
  params: Promise<{
    locale: Locale;
    id: string;
  }>;
}
