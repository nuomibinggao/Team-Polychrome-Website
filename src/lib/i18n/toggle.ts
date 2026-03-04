import { locale } from 'svelte-i18n';
import { get } from 'svelte/store';

export function toggleLang() {
  const current = get(locale);
  if (current?.toLowerCase().startsWith('en')) {
    locale.set('zh-cn');
  } else {
    locale.set('en-us');
  }
}