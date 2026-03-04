import { addMessages, init, locale } from 'svelte-i18n';
import enUS from './en-us.json';
import zhCN from './zh-cn.json';

addMessages('en-us', enUS);
addMessages('zh-cn', zhCN);

init({
  fallbackLocale: 'en-us',
  initialLocale: 'en-us',
});

export function initLocale() {
  if (typeof window === 'undefined') return;

  const saved = localStorage.getItem('lang') as 'en-us' | 'zh-cn' | null;
  const browserLocale = saved ?? (navigator.language?.startsWith('zh') ? 'zh-cn' : 'en-us');

  locale.set(browserLocale);

  locale.subscribe((value) => {
    if (value) localStorage.setItem('lang', value);
  });
}