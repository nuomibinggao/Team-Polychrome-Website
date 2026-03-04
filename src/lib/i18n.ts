import { register, init, getLocaleFromNavigator } from 'svelte-i18n';
import enUS from './i18n/en-us.json';
import zhCN from './i18n/zh-cn.json';
// import zhHK from './i18n/zh-hk.json';

register('en-us', () => Promise.resolve(enUS));
register('zh-cn', () => Promise.resolve(zhCN));
// register('zh-hk', () => Promise.resolve(zhHK));

init({
  fallbackLocale: 'en-us',
  initialLocale: getLocaleFromNavigator()
});