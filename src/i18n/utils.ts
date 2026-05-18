import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getTranslatedPath(url: URL, targetLang: keyof typeof ui) {
  const currentLang = getLangFromUrl(url);
  let pathname = url.pathname;

  if (currentLang !== defaultLang) {
    pathname = pathname.replace(`/${currentLang}`, '') || '/';
  }

  if (targetLang === defaultLang) {
    return pathname;
  }

  return `/${targetLang}${pathname === '/' ? '' : pathname}`;
}