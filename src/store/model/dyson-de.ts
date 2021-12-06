import {Store} from './store';

export const MightyApe: Store = {
  currency: '$',
  labels: {
    inStock: [
      {
        container: 'div.product-hero__out-of-stock',
        text: ['Auf Lager'],
      },
    ],
    outOfStock: [
      {
        container: 'span.product-hero__text-error ',
        text: ['Dieses Gerät ist derzeit leider ausverkauft, wir haben aber einige hervorragende Alternativen.'],
      },
    ],
  },
  links: [
    {
      brand: 'dyson',
      model: 'Nachtblau/Kupfer',
      series: 'Airwrap Complete',
      url: 'https://www.dyson.de/haarpflege/dyson-airwrap-haarstyler/complete-nachtblau-kupfer',
    },
    {
      brand: 'dyson',
      model: 'Anthrazit/Fuchsia',
      series: 'Airwrap Complete',
      url: 'https://www.dyson.de/haarpflege/dyson-airwrap-haarstyler/complete-anthrazit-fuchsia',
    },
    {
      brand: 'dyson',
      model: 'Nachtblau/Kupfer',
      series: 'Airwrap Complete Long',
      url: 'https://www.dyson.de/haarpflege/dyson-airwrap-haarstyler/complete-long-nachtblau-kupfer',
    },
    {
      brand: 'dyson',
      model: 'Anthrazit/Fuchsia',
      series: 'Airwrap Complete Long',
      url: 'https://www.dyson.de/haarpflege/dyson-airwrap-haarstyler/complete-long',
    }
  ],
  name: 'dyson-de',
};
