import {Store} from './store';

export const Galaxus: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '#addToCartButton:enabled',
      text: ['In den Warenkorb'],
    },
    maxPrice: {
      container: '.kPTrBw',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.availabilityText',
        text: ['aktuell nicht lieferbar und kein liefertermin vorhanden'],
      },
      {
        container: '.availabilityText',
        text: [
          'der liefertermin ist beim lieferanten in abklärung und wird aktualisiert.',
        ],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.galaxus.de/de/product/11156643',
    },
    {
      brand: 'amd',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.galaxus.de/de/product/13987919',
    },
    {
      brand: 'amd',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.galaxus.de/de/product/13987918',
    },
    {
      brand: 'amd',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.galaxus.de/de/product/13987917',
    },
    {
      brand: 'amd',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.galaxus.de/de/product/13987916',
    },
    {
      brand: 'asus',
      model: 'gaming oc',
      series: 'rx6600xt',
      url: 'https://www.galaxus.de/de/s1/product/asus-radeon-rx-6600-xt-oc-edition-gaming-8gb-grafikkarte-16370237',
    },
    {
      brand: 'gigabyte',
      model: 'gaming oc pro',
      series: 'rx6600xt',
      url: 'https://www.galaxus.de/de/s1/product/gigabyte-radeon-rx-6600-xt-gaming-oc-pro-8gb-grafikkarte-16362987',
    },
    {
      brand: 'sapphire',
      model: 'pulse oc',
      series: 'rx6600xt',
      url: 'https://www.galaxus.de/de/s1/product/sapphire-radeon-rx-6600-xt-gaming-oc-pulse-8gb-grafikkarte-16360565',
    },
    {
      brand: 'sapphire',
      model: 'nitro oc',
      series: 'rx6600xt',
      url: 'https://www.galaxus.de/de/s1/product/sapphire-radeon-rx-6600-xt-gaming-oc-nitro-8gb-grafikkarte-16360569',
    },
  ],
  name: 'galaxus',
};
