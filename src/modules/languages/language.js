import de from '@locales/de.json'
import en from '@locales/en.json'
import es from '@locales/es.json'
import fr from '@locales/fr.json'
import ja from '@locales/ja.json'
import pt from '@locales/pt.json'

import { formatStrWithPrice } from '@lib/format-price-str'

const DICTIONARY = {
  de,
  en,
  es,
  fr,
  ja,
  pt
}

const DEFAULT_LANGUAGE = 'en'
const LANG_SELECTOR  = '[data-lang]'

class Language {

  elements = document.querySelectorAll(LANG_SELECTOR)
  currentLang = DEFAULT_LANGUAGE

  constructor() {
  this.init()
  }

  init = () => {
    this.setCurrentLanguage()
    this.localizeContent()
}

  setCurrentLanguage = () => {
  const params = new URLSearchParams(window.location.search);
  const browserLang = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage

  if (params.has('lang') || !!browserLang) {
    this.currentLang = params.has('lang') ? params.get('lang').toLowerCase() : browserLang.split('-')[0];
  }
  }

  localizeContent = () => {
    let currentDictionary = DICTIONARY[this.currentLang]
    if (!currentDictionary) {
      currentDictionary = DICTIONARY[DEFAULT_LANGUAGE]
      this.currentLang = DEFAULT_LANGUAGE
    }
    this.elements.forEach((el) => {
      const key = el.dataset.lang
      const price = el.dataset.price
      if (price) {
        el.innerHTML = formatStrWithPrice({price, str:currentDictionary[key], locale: this.currentLang })
      } else {
        el.innerHTML = currentDictionary[key]
      }
    })

    document.documentElement.lang = this.currentLang
  }
}

export default Language
