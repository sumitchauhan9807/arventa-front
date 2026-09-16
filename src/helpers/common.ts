import { assetsURL } from '@/src/http-client/axios';

export const appendBaseUrl = (url: string): string => {
  if (!url) return '';
  if (/^https?:\/\//i.test(url)) return url;

  return assetsURL + url;
};

export const siteMeta = {
  localhost: {
    name: 'arventa.net',
    email: 'mail@arventa.net',
  },
  'arventa.net': {
    name: 'arventa.net',
    email: 'mail@arventa.net',
  },
  'arventa.us': {
    name: 'arventa.us',
    email: 'mail@arventa.us',
  },
  'arventa.ch': {
    name: 'arventa.ch',
    email: 'mail@arventa.ch',
  },
  'ar-venta.de': {
    name: 'ar-venta.de',
    email: 'mail@ar-venta.de',
  },
};


export const replaceVariables = (content, variables) => {
    return content.replace(/{{(.*?)}}/g, (_, key) => {
      return variables[key.trim()] ?? `{{${key}}}`;
    });
  };