const PRICE_TEMPLATE = '{{price}}'
const DEFAULT_LOCALE = 'de'

const LOCALES = {
  de: {
    locale: 'de-DE',
    currency: 'EUR',
  },
  en: {
    locale: 'en-US',
    currency: 'USD',
  },
  ja: {
    locale: 'ja-JP',
    currency: 'JPY',
  },
}

const formatPrice = ({ locale, currency, price }) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  });
  return formatter.format(price);
}

export const formatStrWithPrice = ({ price, str, locale }) => {
  let priceLocale = LOCALES[locale]
  if (!priceLocale) {
    priceLocale = LOCALES[DEFAULT_LOCALE]
  }
  return str.replace(PRICE_TEMPLATE, formatPrice({...priceLocale, price}));
}
