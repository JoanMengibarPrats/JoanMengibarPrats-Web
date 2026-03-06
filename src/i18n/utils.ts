// src/i18n/utils.ts
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

// --- NUEVA FUNCIÓN ---
// Calcula la URL equivalente en otro idioma manteniendo la página actual
export function getTranslatedPath(url: URL, targetLang: keyof typeof ui) {
  const currentLang = getLangFromUrl(url);
  let pathname = url.pathname;

  // 1. Si el idioma actual no es el por defecto (es), quitamos el prefijo (ej: /en/blog -> /blog)
  if (currentLang !== defaultLang) {
    // Reemplazamos el /en o /va inicial. El || '/' asegura que si nos quedamos sin nada, volvemos a la raíz.
    pathname = pathname.replace(`/${currentLang}`, '') || '/';
  }

  // 2. Si queremos ir al idioma por defecto, devolvemos la ruta limpia (ej: /blog)
  if (targetLang === defaultLang) {
    return pathname;
  }

  // 3. Si queremos ir a un idioma secundario, le añadimos el prefijo (ej: /blog -> /en/blog)
  return `/${targetLang}${pathname === '/' ? '' : pathname}`;
}