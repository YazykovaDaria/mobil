const CHOISE_SELECTOR = '.js-choise'
const BTN_SELECTOR = '[data-link]'
const LINK_SELECTOR = '.js-link'
const ACTIVE_CLS = 'active'

class ChoisePlan {

  rootEl = document.querySelector(CHOISE_SELECTOR)
  btns = this.rootEl.querySelectorAll(BTN_SELECTOR)
  linkEl = this.rootEl.querySelector(LINK_SELECTOR)

  constructor() {
    this.init()
  }

  init = () => {
    this.rootEl.addEventListener('click', (e) => {

      const target = e.target.closest(BTN_SELECTOR)
      if (!target) {
        return
      }
      const link = target.dataset.link
      this.linkEl.href = link
      this.removeActiveCls()
      target.classList.add(ACTIVE_CLS)
    })
  }

  removeActiveCls = () => {
    this.btns.forEach((el) => el.classList.remove(ACTIVE_CLS))
  }

}

export default ChoisePlan
