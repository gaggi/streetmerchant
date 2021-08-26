import {Store} from './store';

export const AmazonDeWarehouse: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: [
        'geben sie die unten angezeigten zeichen ein',
        'geben sie die zeichen unten ein',
      ],
    },
    captchaHandler: {
      challenge: '.a-row > img',
      input: '#captchacharacters',
      submit: 'button[type="submit"]',
    },
    inStock: {
      container: '#aod-message-component',
      text: ['weitere optionen'],
    },
    maxPrice: {
      container: '#aod-price-1',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.a-size-medium',
        text: [
          'Derzeit gibt es keine Verkäufer, die diesen Artikel an Ihren Standort liefern können',
        ],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.amazon.de/gp/offer-listing/B07PW9VBK5',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.amazon.de/gp/offer-listing/B08H93ZRK9',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.amazon.de/gp/offer-listing/B08H98GVK8',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.amazon.de/gp/offer-listing/B087VM5XC6',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.amazon.de/gp/offer-listing/B08H93ZRLL',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: 'rx6600xt',
      url: 'https://www.amazon.de/gp/offer-listing/B09C2BN5TL',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc',
      series: 'rx6600xt',
      url: 'https://www.amazon.de/gp/offer-listing/B09C2BK98L',
    },
    {
      brand: 'msi',
      model: 'gaming x',
      series: 'rx6600xt',
      url: 'https://www.amazon.de/gp/offer-listing/B09BZKNM9D',
    },
    {
      brand: 'sapphire',
      model: 'pulse',
      series: 'rx6600xt',
      url: 'https://www.amazon.de/gp/offer-listing/B099Y4SYTK',
    },
    {
      brand: 'sapphire',
      model: 'nitro+',
      series: 'rx6600xt',
      url: 'https://www.amazon.de/gp/offer-listing/B099Y6439Y',
    },
    {
      brand: 'xfx',
      model: 'merc308',
      series: 'rx6600xt',
      url: 'https://www.amazon.de/gp/offer-listing/B09B4929ZV',
    },
    {
      brand: 'xfx',
      model: 'quick308',
      series: 'rx6600xt',
      url: 'https://www.amazon.de/gp/offer-listing/B09B46MZ3T',
    },
    {
      brand: 'westerndigital',
      model: 'elements',
      series: 'usb14tb',
      url: 'https://www.amazon.de/gp/offer-listing/B07Y3KDVZH',
    },
    {
      brand: 'westerndigital',
      model: 'elements',
      series: 'usb16tb',
      url: 'https://www.amazon.de/gp/offer-listing/B08KY4P7L5',
    },
    {
      brand: 'westerndigital',
      model: 'elements',
      series: 'usb18tb',
      url: 'https://www.amazon.de/gp/offer-listing/B08KY32HFR',
    },
    {
      brand: 'westerndigital',
      model: 'my book',
      series: 'usb14tb',
      url: 'https://www.amazon.de/gp/offer-listing/B07Y3JXGPL',
    },
    {
      brand: 'westerndigital',
      model: 'my book',
      series: 'usb16tb',
      url: 'https://www.amazon.de/gp/offer-listing/B08KY99GPL',
    },
    {
      brand: 'westerndigital',
      model: 'my book',
      series: 'usb18tb',
      url: 'https://www.amazon.de/gp/offer-listing/B08KY9ZZDG',
    },
    {
      brand: 'seagate',
      model: 'desktop expansion',
      series: 'usb14tb',
      url: 'https://www.amazon.de/gp/offer-listing/B0889D848K',
    },
    {
      brand: 'seagate',
      model: 'desktop expansion',
      series: 'usb16tb',
      url: 'https://www.amazon.de/gp/offer-listing/B08899GVT6',
    },
  ],
  name: 'amazon-de-warehouse',
};
