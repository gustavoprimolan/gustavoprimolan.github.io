import { defaultLocale, type Locale } from './types';

export function getLangFromPath(pathname: string): Locale {
  return pathname === '/pt' || pathname.startsWith('/pt/') ? 'pt' : 'en';
}

export function getLocalePrefix(lang: Locale): string {
  return lang === defaultLocale ? '' : '/pt';
}

export function localizePath(lang: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const prefix = getLocalePrefix(lang);

  if (normalized === '/') {
    return prefix || '/';
  }

  return `${prefix}${normalized}`;
}

export function switchLangPath(pathname: string, targetLang: Locale): string {
  const currentLang = getLangFromPath(pathname);
  if (currentLang === targetLang) return pathname;

  let pathWithoutLocale = pathname;
  if (pathname === '/pt') {
    pathWithoutLocale = '/';
  } else if (pathname.startsWith('/pt/')) {
    pathWithoutLocale = pathname.slice(3) || '/';
  }

  return localizePath(targetLang, pathWithoutLocale);
}

export function dateLocale(lang: Locale): string {
  return lang === 'pt' ? 'pt-BR' : 'en-US';
}
