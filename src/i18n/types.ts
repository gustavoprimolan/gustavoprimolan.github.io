export type Locale = 'en' | 'pt';

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'pt'];

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  pt: 'PT',
};
