import "the-new-css-reset/css/reset.css"
import './style.css'
import Language from '@modules/languages/language';
import ChoisePlan from '@modules/choise-plan/choise';

document.addEventListener('DOMContentLoaded', () => {
  new Language()
  new ChoisePlan()
})
