import { ReactElement } from 'react';
import { ILocaleLayoutProps } from './localeLayout.types';
import { routing } from '@/src/shared/i18n/routing';
import { Locale } from '@/src/shared/i18n/i18n.types';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { Viewport } from 'next';
import '@app/styles/global.scss';
import { abel } from '@app/styles/fonts';
import { UtmProvider } from '@app/provider';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};

/**
 * Корневой layout для локализации
 *
 * @param props {ILocaleLayoutProps}
 * @returns {Promise<ReactElement>}
 * @constructor
 */
const LocaleLayout = async (props: ILocaleLayoutProps): Promise<ReactElement> => {
  const { children, params } = props;
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${abel.className}`}>
        <NextIntlClientProvider messages={messages}>
          <UtmProvider>{children}</UtmProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
